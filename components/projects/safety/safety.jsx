"use client";
import { usePageLoader } from "./hooks/use-page-loader";
import { useGSAP } from "./hooks/use-gsap-animation";
import { useSafety } from "./hooks/use-safety";
import { Header } from "./layouts/header";
import { Gallery } from "./layouts/gallery";
import { Overlay } from "./layouts/overlay";
import { Card } from "./layouts/card";
import clsx from "clsx";
import styles from "./styles/style.module.scss";

export const Safety = ({ basePath }) => {
  const { isPageLoad } = usePageLoader();
  const { galleryRef } = useGSAP();
  const { isOverlayVisible, selectedItem, onItemClick, onCloseClick } = useSafety();

  return (
    <div className={clsx(styles.wrapper, "font-pretty")}>
      <Header isPageLoad={isPageLoad} />
      <Gallery basePath={basePath} isPageLoad={isPageLoad} ref={galleryRef} onClick={onItemClick} />
      <Overlay isVisible={isOverlayVisible} onClose={onCloseClick}>
        <Card basePath={basePath} item={selectedItem} onClose={onCloseClick} />
      </Overlay>
    </div>
  );
};
