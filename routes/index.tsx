/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    //const resp = await fetch(`https://api.github.com/users/denoland`);
    const resp = await fetch(`https://qiita.com/api/v2/tags/fresh/items`);
    if (resp.status === 404) {
      return ctx.render(null);
    }

    //console.log(await resp.json());
    const user: [User] = await resp.json();
    console.log(user[0].title);
    return ctx.render(user[0]);
  },
};

export default function Home({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>Data not found</h1>;
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
      <p>-</p>
      <p>↓ Qiita APIでFreshタグの1つ目の記事のタイトルを表示</p>
      <p><a href={data.url}>{data.title}</a></p>
    </div>
  );
}
