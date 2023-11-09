import { useState } from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import IconMenu from "./assets/menu.svg?react";

export const Header = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const onClick = () => {
    setSidebarOpened((prev) => !prev);
  };

  const _class_iconmenu = clsx(styles.iconmenu, {
    [styles.iconmenu_opened]: sidebarOpened == true,
  });

  return (
    <div className={styles.header}>
      <IconMenu className={_class_iconmenu} onClick={onClick} />
      <span className={styles.sitename}>GetCountry</span>
      <Sidebar sidebarOpened={sidebarOpened} setOpened={onClick} />
    </div>
  );
};
