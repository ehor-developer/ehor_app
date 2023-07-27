import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Apps from "../components/Projects.tsx";
import apps from "../data/app/apps.json" assert { type: "json" };
export default function Index(props: PageProps<string>) {
  const TITLE = "Ehor App｜Ehorアプリ";
  const DESCRIPTION = `えほが開発したアプリです！今後も更新予定です！ぜひお使いください！`;
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta property="og:title" content={TITLE} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={props.url.href} />
      </Head>
      <div class="flex flex-col min-h-screen">
        <div class="flex-1">
          <Apps items={apps} />
        </div>
      </div>
    </>
  );
}
