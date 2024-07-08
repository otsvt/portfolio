import Link from "next/link";
import { GithubIcon } from "../images/icons/github-icon";
import { TgIcon } from "../images/icons/tg-icon";
import styles from "../styles/style.module.scss";

export const ContactsItem = () => {
  return (
    <div className={styles.contactsItem}>
      <Link href="https://github.com/otsvt" target="_blank">
        <GithubIcon className="w-20 h-20 xl:w-40 xl:h-40 transition-colors text-[#161614] hover:text-white/80" />
      </Link>
      <Link href="https://t.me/otsvt" target="_blank">
        <TgIcon className="w-20 h-20 xl:w-40 xl:h-40 transition-colors text-[#161614] hover:text-white/80" />
      </Link>
    </div>
  );
};
