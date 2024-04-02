import { FC, useMemo } from "react";
import { Product } from "../types/product";
import { useParams } from "react-router-dom";
import useGetProductDetails from "../hooks/useGetProductDetails";

const ProductDetails: FC = () => {
  const { id } = useParams();
  const { data, isFetching, isLoading } = useGetProductDetails(id);
  const product = useMemo(() => {
    if (!isLoading || isFetching) {
      return data as Product;
    }
    return null;
  }, [data, isFetching, isLoading]);
  return (
    <div className=" flex flex-col w-full h-screen">
      {isLoading || isFetching ? (
        "loading"
      ) : (
        <div className="flex">
          <div className="w-1/5">
            {product?.thumbnail && (
              <img
                className="w-full h-[100px] max-h-[100px] object-contain"
                src={product?.thumbnail}
                alt={product?.title}
              />
            )}
          </div>

          <div className="w-4/5">
            <h1 className="text-black font-bold text-xl">{product?.title}</h1>
            <p className="text-green-400 font-semibold text-sm">
              {product?.price}
            </p>
            <p className="text-gray-600 text-base">{product?.description}</p>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {product?.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
