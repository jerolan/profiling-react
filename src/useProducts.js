import faker from "@faker-js/faker";
import sample from "lodash/sample";
import times from "lodash/times";
import { useEffect, useState } from "react";

export default function useProducts(search) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = times(faker.datatype.number({ min: 500, max: 3000 }), () => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      color: faker.commerce.color(),
      background: sample([
        "from-cyan-500 to-blue-500",
        "from-indigo-500 via-purple-500 to-pink-500",
        "from-indigo-500 to-blue-500",
      ]),
    }));

    setTimeout(() => {
      setProducts(items);
    }, 100);
  }, [search]);

  return products;
}
