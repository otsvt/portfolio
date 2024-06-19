import Image from "next/image";
import { folders, optionIcons } from "../data/codepen";
import openFolderIcon from "../images/codepen/open-folder.svg";
import arrowIcon from "../images/codepen/arrow.svg";
import txtIcon from "../images/codepen/txt-icon.svg";
import mdIcon from "../images/codepen/md-icon.svg";
import jsIcon from "../images/codepen/js-icon.svg";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Codepen = ({ classNames, speed, lag }) => {
  return (
    <div data-speed={speed} data-lag={lag} className={clsx(classNames, "flex rounded-lg overflow-hidden shadow-2xl")}>
      <Aside />
      <Body />
    </div>
  );
};

const Aside = () => {
  return (
    <aside className="py-2 px-3 hidden md:block lg:py-4 lg-px-6 bg-[rgba(51,51,51,0.8)] backdrop-blur-[50px] text-sm lg:text-base">
      <header className="mb-4 flex items-center gap-4">
        <div className="flex gap-[7px]">
          <span className="w-4 h-4 rounded-full bg-[#F44336]"></span>
          <span className="w-4 h-4 rounded-full bg-[#FFC107]"></span>
          <span className="w-4 h-4 rounded-full bg-[#4CAF50]"></span>
        </div>
        <span>Editor</span>
      </header>
      <ul className="mb-4 flex gap-2 lg:gap-4">
        {optionIcons.map((icon, i) => {
          return (
            <li key={i}>
              <Image src={icon} alt={icon} />
            </li>
          );
        })}
      </ul>
      <ul>
        <li className="flex items-center gap-1">
          <Image src={openFolderIcon} alt="openFolderIcon" />
          <span className="font-bold">wispy</span>
        </li>
        {folders.map((folder, i) => {
          return (
            <li className="py-1 flex items-center gap-1" key={i}>
              {folder.arrow ? (
                <Image className={folder.reverse && "rotate-90"} src={arrowIcon} alt="arrowIcon" />
              ) : (
                <div className="w-6 h-6"></div>
              )}
              <Image src={folder.icon} alt={folder.text} />
              <span>{folder.text}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const Body = () => {
  return (
    <div className="flex flex-col">
      <header className="flex items-center bg-[#191919] ">
        <div className="px-2 py-1 lg:py-2 lg:px-4 text-xs md:text-sm flex items-center gap-1 bg-white/20">
          <Image src={jsIcon} alt={jsIcon} />
          <span>index.js</span>
        </div>
        <div className="px-2 py-1 lg:py-2 lg:px-4 text-xs md:text-sm flex items-center gap-1">
          <Image src={mdIcon} alt={mdIcon} />
          <span>README.md</span>
        </div>
        <div className="px-2 py-1 lg:py-2 lg:px-4 text-xs md:text-sm flex items-center gap-1">
          <Image src={txtIcon} alt={txtIcon} />
          <span>.gitignore</span>
        </div>
      </header>
      <div className="grow py-2 pl-8 lg:py-4 lg:pl-10 bg-[#222222] font-outfit">
        <ol className={styles.list}>
          <li className={clsx(styles.listItem, styles.colorComment)}>{`// Imports`}</li>
          <li className={styles.listItem}>
            <i className={styles.colorReserve}>import</i> <i className={styles.colorConst}>mongoose</i>, {`{ `}{" "}
            <i className={styles.colorConst}>Schema</i>
            {` } `}
            <i className={styles.colorReserve}>from </i>
            {"mongoose"}
          </li>
          <li className={styles.listItem}></li>
          <li className={clsx(styles.listItem, styles.colorComment)}>{`// Collection name`}</li>
          <li className={styles.listItem}>
            <i className={styles.colorReserve}>export const </i>
            <i className={styles.colorConst}>collection</i> = {"Product"}
          </li>
          <li className={styles.listItem}></li>
          <li className={clsx(styles.listItem, styles.colorComment)}>{`// Schema`}</li>
          <li className={styles.listItem}>
            <i className={styles.colorReserve}>const </i> <i className={styles.colorConst}>schema</i> ={" "}
            <i className={styles.colorReserve}>new </i> Schema{`({`}
          </li>
          <li className={styles.listItemInner}>
            <i className={styles.colorConst}>name</i>: {`{`}
          </li>
          <li className={styles.listItemBigInner}>
            {" "}
            <i className={styles.colorConst}>type</i>: String,
          </li>

          <li className={styles.listItemBigInner}>
            <i className={styles.colorConst}>required</i>: true
          </li>
          <li className={styles.listItemInner}>{`}`}</li>
          <li className={styles.listItem}>
            {`}`}, <i className={styles.colorConst}>timestamps</i>: true{`})`}
          </li>
          <li className={styles.listItem}></li>
          <li className={clsx(styles.listItem, styles.colorComment)}>{`// Model`}</li>
          <li className={clsx(styles.listItem, styles.typedOut)}>
            <div>
              {" "}
              <i className={styles.colorReserve}>export default </i> mongoose.model{`(`}
              <i className={styles.colorConst}>collection, schema, collection</i>
              {`)`}
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.typedOutSecond)}>
            <div>
              <i className={styles.colorWar}>module</i>
              .exports = mongoose.model{`(`}
              <i className={styles.colorConst}>collection, schema, collection</i>
              {`)`}
            </div>
          </li>
          <li className={clsx(styles.listItem, styles.typedOutThird)}>
            <div className={styles.blink}>|</div>
          </li>
        </ol>
      </div>
      <footer className="px-4 flex items-center justify-end gap-4 bg-white/5 text-[12px] text-white/40">
        <span>LF</span>
        <span>Line 6:8</span>
        <span>UTF8</span>
        <span>2 spaces</span>
        <span>main</span>
      </footer>
    </div>
  );
};
