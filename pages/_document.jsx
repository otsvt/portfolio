import { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function Document() {
  const { basePath } = publicRuntimeConfig;

  return (
    <Html>
      <Head>
        <link rel="icon" type="image/svg+xml" href={`${basePath}/images/favicons/favicon.svg`} />
        <link rel="icon" type="image/png" href={`${basePath}/images/favicons/favicon.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
