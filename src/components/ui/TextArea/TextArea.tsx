import { FC, MutableRefObject } from "react";
import styles from "./TextArea.module.css";

interface IProps {
  text: string;
  setText: (newText: string) => void;
}
export const TextArea: FC<IProps> = ({ text, setText }) => {
  return (
    <textarea
      className={styles.textarea}
      autoCorrect="off"
      spellCheck="false"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
};
