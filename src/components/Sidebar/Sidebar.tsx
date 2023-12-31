import { FC } from "react";
import styles from "./Sidebar.module.css";
import clsx from "clsx";

interface IProps {
  sidebarOpened: boolean;
  setOpened: () => void;
}
export const Sidebar: FC<IProps> = ({ sidebarOpened, setOpened }) => {
  const _sidebar_class = clsx(styles.sidebar, {
    [styles.sidebar_opened]: sidebarOpened == true,
  });
  const _sidebar_container_class = clsx(styles.sidebar_container, {
    [styles.sidebar_container_opened]: sidebarOpened == true,
  });
  return (
    <div className={_sidebar_container_class} onClick={setOpened}>
      <div className={_sidebar_class}>
        <a href="#" className={styles.link}>YakireBlog</a>
        <a href="#" className={styles.link}>YakireTasker</a>
        <a href="#" className={styles.link}>YakireSearch</a>
        <a href="#" className={styles.link}>YakireHentai</a>
        <a href="#" className={clsx(styles.link, styles.link_active)}>GetCount</a>
      </div>
    </div>
  );
};
