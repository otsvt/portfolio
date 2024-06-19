import { forwardRef } from "react";
import styles from "../styles/style.module.scss";
import Image from "next/image";
import { items } from "../data/items";

export const Gallery = forwardRef(({ basePath, isPageLoad, onClick }, ref) => {
  return (
    <div className={styles.gallery} style={{ opacity: isPageLoad ? 0 : 1 }} ref={ref}>
      {items.map((item) => {
        return (
          <div onClick={() => onClick(item)} key={item.id} className={styles.galleryItem}>
            <Image width={500} height={500} className={styles.img} src={`${basePath}${item.image}`} alt="alt" />
          </div>
        );
      })}
    </div>
  );
});
Gallery.displayName = "Gallery";
