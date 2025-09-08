// composables/useWallet.ts
import { ethers } from "ethers";

interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on?: (event: string, handler: (...args: any[]) => void) => void;
  removeListener?: (event: string, handler: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export const useWallet = () => {
  const provider = shallowRef<ethers.BrowserProvider>();
  const signer = shallowRef<ethers.Signer>();
  const address = ref<string | undefined>();
  const accounts = ref<string[]>([]);
  const selectedAddress = ref<string>("");
  const status = ref<"disconnected" | "connecting" | "connected">(
    "disconnected"
  );

  let listenersAttached = false;

  const connectWallet = async () => {
    if (!window.ethereum) {
      window.open("https://metamask.io/download", "_blank");
      return;
    }

    status.value = "connecting";

    provider.value = new ethers.BrowserProvider(window.ethereum);

    // 👇 Force MetaMask to show popup
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });

    const accs = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    accounts.value = accs;
    address.value = accs[0];
    signer.value = await provider.value.getSigner(accs[0]);
    status.value = "connected";
    localStorage.removeItem("wallet-disconnected");

    window.ethereum.on?.("accountsChanged", async (accs: string[]) => {
      if (accs.length > 0) {
        accounts.value = accs;
        address.value = accs[0];
        signer.value = await provider.value?.getSigner(accs[0]);
      } else {
        disconnectWallet();
      }
    });

    window.ethereum.on?.("chainChanged", () => window.location.reload());
  };

  const autoConnectWallet = async () => {
    if (typeof window === "undefined" || !window.ethereum) return;
    if (localStorage.getItem("wallet-disconnected") === "true") return;

    const accs = await window.ethereum.request({ method: "eth_accounts" });
    if (accs.length > 0) {
      provider.value = new ethers.BrowserProvider(window.ethereum);
      accounts.value = accs;
      address.value = accs[0];
      selectedAddress.value = accs[0];
      signer.value = await provider.value.getSigner(accs[0]);
      status.value = "connected";

      if (!listenersAttached) {
        window.ethereum.on?.("accountsChanged", handleAccountChange);
        window.ethereum.on?.("chainChanged", () => window.location.reload());
        listenersAttached = true;
      }
    }
  };

  const handleAccountChange = async (accs: string[]) => {
    if (accs.length > 0) {
      accounts.value = accs;
      address.value = accs[0];
      selectedAddress.value = accs[0]!;
      signer.value = await provider.value?.getSigner(accs[0]);
      status.value = "connected";
    } else {
      disconnectWallet();
    }
  };

  const disconnectWallet = () => {
    provider.value = undefined;
    signer.value = undefined;
    address.value = undefined;
    accounts.value = [];
    selectedAddress.value = "";
    status.value = "disconnected";
    localStorage.setItem("wallet-disconnected", "true");
  };

  const sendETH = async (to: string, amountEth: string) => {
    if (!signer.value) throw new Error("Wallet not connected");
    const tx = await signer.value.sendTransaction({
      to,
      value: ethers.parseEther(amountEth),
    });
    return tx;
  };

  const getBalance = async () => {
    if (!provider.value || !selectedAddress.value) return "0";
    const balance = await provider.value.getBalance(selectedAddress.value);
    return ethers.formatEther(balance);
  };

  return {
    connectWallet,
    autoConnectWallet,
    disconnectWallet,
    sendETH,
    getBalance,
    provider,
    signer,
    address,
    accounts,
    selectedAddress,
    status,
  };
};
