import faker from "@faker-js/faker";
import sample from "lodash/sample";
import times from "lodash/times";
import { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";

export default function App() {
  const [search, setSearch] = useState("");
  const items = times(10, () => ({
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

  return (
    <main className="tracking-tight">
      <header className="flex items-center justify-between h-16 border px-16">
        <h1 className="font-bold">super awesome</h1>
        <figure>
          <div className="rounded-full bg-indigo-600 h-8 w-8" />
        </figure>
      </header>
      <div className="px-16 py-32">
        <div>
          <div className="pb-8 flex items-center justify-between">
            <h4 className="text-2xl font-bold text-gray-900">My Products</h4>
            <div className="rounded-md w-2/4">
              <input
                type="text"
                name="search"
                placeholder="Buscar un producto"
                className="border bg-gray-100 rounded-md h-6 w-full px-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <List
            items={items}
            renderItem={(item) => (
              <ListItem
                key={item.id}
                background={item.background}
                name={item.name}
                color={item.color}
                price={item.price}
              />
            )}
          />
        </div>
      </div>
    </main>
  );
}
