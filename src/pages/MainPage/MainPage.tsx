import styles from "./MainPage.module.css";
import { Header } from "@/components/Header/Header";
import { ResultList } from "@/components/business/ResultList/ResultList";
import { TextArea } from "@/components/ui/TextArea/TextArea";
import { useRef, useState } from "react";

export const MainPage = () => {
  const [text, setText] = useState("");
  const [socksList, setSocksList] = useState<string[]>([]);

  const onCheckClickHandler = () => {
    setSocksList(text.split("\n"));
  };

  return (
    <div className={styles.mainpage}>
      <Header />
      <div className={styles.container}>
        <TextArea text={text} setText={setText} />
        <button className={styles.checkbutton} onClick={onCheckClickHandler}>
          Check
        </button>
        <ResultList ipList={socksList} />
      </div>
    </div>
  );
};
