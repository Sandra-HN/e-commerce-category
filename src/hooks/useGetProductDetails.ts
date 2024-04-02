import axios from "axios";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Product } from "../types/product";

const useGetProductDetails = (id?: string) => {
  const queryKey = useMemo(() => ["/productsDetails", id], [id]);

  return useQuery({
    queryKey,
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_APP_BASE_URL}/products/${id}`)
        .then((res) => {
          debugger;
          return res.data as Product;
        }),
    enabled: !!id,
    refetchOnWindowFocus: false,
    onError(err) {
      console.log(err);
    },
  });
};

export default useGetProductDetails;
