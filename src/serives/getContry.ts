import { IIpInfo } from "@/types/ipinfo.interface";
import axios from "axios"


export const getContry = async (ip: string): Promise<IIpInfo> => {
  const {data} = await axios.get<IIpInfo>(`https://api.ipapi.is/?q=${ip}`);
  return data;
}
