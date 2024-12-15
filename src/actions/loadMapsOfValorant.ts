import axios from "axios";
import { Maps } from "../interfaces/request.response";

export const loadMapsOfValorant = async () => {
  const { data } = await axios.get<Maps>("https://valorant-api.com/v1/maps");
  return data.data;
};
