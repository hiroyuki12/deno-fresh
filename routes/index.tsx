/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Test Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <a className="QiitaApp-link" href="https://mbp.hatenablog.com/entry/2022/07/30/095030?_ga=2.78326934.324356107.1659107296-905746074.1658639894" target="_blank" rel="noreferrer">DenoのWebフレームワーク Fresh(deno-fresh)</a><br />
      <p>QiitaでReactタグありの記事を表示</p>
    </div>
  );
}
