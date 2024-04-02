import axios from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { ProductResponse } from "../types/product";

const useGetCatalogue = (name?: string) => {
  const queryKey = useMemo(() => ["/products", name], [name]);

  const search = name && name.length > 2 ? `/search?q=${name}` : "";
  return useQuery({
    queryKey,
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_APP_BASE_URL}/products${search}`)
        .then((res) => {
          return res.data as ProductResponse;
        }),
    enabled: true,
    refetchOnWindowFocus: false,
    onError(err) {
      console.log(err);
    },
  });
};

export default useGetCatalogue;
