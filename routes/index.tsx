/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  id: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api.github.com/users/denoland`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Home({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <a className="QiitaApp-link" href="https://mbp.hatenablog.com/entry/2022/07/30/095030?_ga=2.78326934.324356107.1659107296-905746074.1658639894" target="_blank" rel="noreferrer">DenoのWebフレームワーク Fresh(deno-fresh)</a><br />

      <img src={data.avatar_url} width={64} height={64} />
      <p>{data.id}</p>
    </div>
  );
}
