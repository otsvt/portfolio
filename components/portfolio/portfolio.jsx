"use client";
import { projectsLeft, projectsRight } from "./data/projects";
import { useCustomScroll } from "../hooks/use-custom-scroll";
import { useGSAP } from "./hooks/use-gsap-animation";
import { useLoading } from "./hooks/use-loading";
import { Preloader } from "./layouts/preloader";
import { Codepen } from "./layouts/codepen";
import { GalleryItem } from "./layouts/gallery-item";
import { Title } from "./layouts/title";
import { ContactsItem } from "./layouts/contacts.jsx";
import { Decore } from "./layouts/decore";
import styles from "./styles/style.module.scss";
import clsx from "clsx";

export const Portfolio = ({ basePath }) => {
  useCustomScroll(styles.customScroll);
  const { isLoading } = useLoading();
  const { wrapperRef, contentRef, heroSectionRef, iconsLeftRef, iconsRightRef } = useGSAP(isLoading);

  return (
    <div className={clsx(styles.body, "font-raleway")}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${basePath}/images/bg.jpg)` }} ref={wrapperRef}>
        <Preloader isVisible={isLoading} />
        {!isLoading && (
          <div ref={contentRef} className={styles.content}>
            <header className={styles.heroSection} ref={heroSectionRef}>
              <Codepen classNames={styles.codepen} speed=".6" lag=".5" />
              <Decore />
              <div className={styles.container}>
                <Title classNames={styles.mainHeader} speed=".8" />
              </div>
            </header>
            <div className={styles.container}>
              <main className={styles.gallery}>
                <div className={styles.galleryWrapper} data-speed=".9">
                  {projectsLeft.map((proj, i) => {
                    return <GalleryItem key={i} proj={proj} ref={(el) => (iconsLeftRef.current[i] = el)} />;
                  })}
                  <ContactsItem />
                </div>
                <div className={styles.galleryWrapper} data-speed="1.1">
                  {projectsRight.map((proj, i) => {
                    return <GalleryItem key={i} proj={proj} ref={(el) => (iconsRightRef.current[i] = el)} />;
                  })}
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
