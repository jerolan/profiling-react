import faker from "@faker-js/faker";
import sample from "lodash/sample";
import times from "lodash/times";
import { useEffect, useState } from "react";

export default function useProducts(search, limit) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const items = times(limit, () => ({
      id: faker.datatype.uuid(),
      name: `${search} ${faker.commerce.productName()}`,
      price: faker.commerce.price(),
      color: faker.commerce.color(),
      background: sample([
        "from-cyan-500 to-blue-500",
        "from-indigo-500 via-purple-500 to-pink-500",
        "from-indigo-500 to-blue-500",
      ]),
    }));

    const timer = setTimeout(() => {
      setProducts(items);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [limit, search]);

  return { products, isLoading };
}
