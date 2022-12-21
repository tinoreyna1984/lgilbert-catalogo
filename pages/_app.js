import Head from "next/head"
import '../styles/globals.css'
import 'normalize.css/normalize.css';

/** Font Awesome */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>L-Gilbert catálogo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <Component {...pageProps} />
    </>)
}

export default MyApp
