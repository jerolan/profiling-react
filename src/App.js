import { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import useProducts from "./useProducts";
import SearchInput from "./SearchInput";
import ListItemSkeleton from "./ListItemSkeleton";

const PAGE_SIZE = 5;

export default function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(PAGE_SIZE);
  const { products, isLoading } = useProducts(search, items);

  return (
    <main className="tracking-tight">
      <header className="flex items-center justify-between h-16 border px-16">
        <h1 className="font-bold">super awesome</h1>
        <figure>
          <div className="rounded-full bg-indigo-600 h-8 w-8" />
        </figure>
      </header>
      <div className="px-16 py-32">
        <div className="pb-8 flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-900">My Products</h4>
          <SearchInput onSearch={setSearch} />
        </div>
        <List
          loading={isLoading}
          items={products}
          renderLoadingItem={() => <ListItemSkeleton />}
          fetchMore={() => {
            if (!isLoading) {
              setItems((prevItems) => prevItems + PAGE_SIZE);
            }
          }}
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
    </main>
  );
}
