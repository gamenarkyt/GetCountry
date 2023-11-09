import { FC, useEffect, useState } from "react";
import styles from "./ResultList.module.css";

import { getContry } from "@/serives/getContry";

interface IResult {
  delay: number;
  ip: string;
  contry: string;
  city: string;
}

interface IProps {
  ipList: string[];
}
export const ResultList: FC<IProps> = ({ ipList }) => {
  const [socksInfo, setSocksInfo] = useState<IResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      for (let index in ipList) {
        const ip = ipList[index];
        const data = await getContry(ip);
        console.log(data);

        setSocksInfo((prev) => [
          ...prev,
          {
            delay: data.elapsed_ms,
            ip: data.ip,
            contry: data.location.country,
            city: data.location.city,
          },
        ]);
      }
    };
    fetchData();
  }, []);

  if (!ipList.length) return null;
  return (
    <ul className={styles.resultlist}>
      {socksInfo.map((sock) => {
        return <li>{sock.delay} {sock.ip} {sock.contry} {sock.city}</li>;
      })}
    </ul>
  );
};
