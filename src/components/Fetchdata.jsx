import Product from "../views/Product";
import { useQuery } from "@tanstack/react-query";
import { MutatingDots } from "react-loader-spinner";

const url = "https://dummyjson.com/products?limit=0&skip=0";

const Fetchdata = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  if (isLoading)
    return (
      <div className="error">
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  if (error) return <div>An error has occurred: {error.message}</div>;
  return (
    <div>
      <Product products={data.products} />
    </div>
  );
};

export default Fetchdata;
