import axios from "axios";
import { useMemo } from "preact/hooks";

export function useStrapi() {
  return useMemo(() => {
    return axios.create({
      baseURL: "/api",
    });
  }, []);
}
