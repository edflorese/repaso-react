import { useEffect, useState } from "react";
import { Map } from "../interfaces/request.response";
import { loadMapsOfValorant } from "../actions/loadMapsOfValorant";

export default function useLoadMap() {
  const [maps, setMaps] = useState<Map[]>([]);
  useEffect(() => {
    loadMapsOfValorant().then((maps) => setMaps(maps));
  });
  return { maps };
}
