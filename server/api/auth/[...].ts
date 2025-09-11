import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  providers: [
    // Google
    // @ts-expect-error You need to use .default here for it to work during SSR
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: { prompt: "login" },
      },
    }),

    // Credentials
    // @ts-expect-error same reason as above
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // 🔥 Replace with your backend login API
        /*const user = await $fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: {
            email: credentials?.email,
            password: credentials?.password,
          },
        }).catch(() => null);*/

        const user = {
          id: "1",
          name: "Vahe",
          email: "vahemikayelyan@gmail.com",
          password: "hunter2AA3",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }

        return null; // return null if login fails
      },
    }),
  ],
});
