import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const GalleryItem = forwardRef(({ proj }, ref) => {
  return (
    <Link href={proj.link} ref={ref} className={clsx(styles.galleryItem, "relative")}>
      <Image className="h-full object-cover rounded-md" src={proj.img} alt="image" />
      <div className={styles.overlay}></div>
      <div className={styles.galleryItemImages}>
        {proj.icons?.map((img, i) => (
          <div key={i} className="p-2 bg-zinc-900 rounded-md flex items-center justify-center">
            <Image className={styles.iconImage} src={img} alt={`overlay-image-${i}`} width={50} height={50} />
          </div>
        ))}
      </div>
      <div className={styles.galleryItemText}>{proj.hasAdapt ? null : "*does not have mobile adaptive"}</div>
    </Link>
  );
});
GalleryItem.displayName = "GalleryItem";
