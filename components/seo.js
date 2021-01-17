import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
    </div>
  );
}
