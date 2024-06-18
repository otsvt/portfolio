import { useGSAPRoute } from "@/components/hooks/use-gsap-route";
import "@/styles/globals.scss";
import styles from "../styles/blocks/screen-loader.module.scss";

export default function App({ Component, pageProps }) {
  const { loaderRef } = useGSAPRoute();

  return (
    <>
      <Component {...pageProps} />
      <div ref={loaderRef} className={styles.screenLoader}></div>
    </>
  );
}
