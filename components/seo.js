import Head from "next/Head";

export default function Seo({ title, description }) {
  console.log("here");
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  );
}
