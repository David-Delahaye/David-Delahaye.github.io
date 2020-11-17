import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.reCAPTCHA_site_key}`}
        ></script>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  );
}
