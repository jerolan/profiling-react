import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function SearchInput({ onSearch }) {
  const [value, setState] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className="rounded-md w-2/4">
      <input
        type="text"
        name="search"
        placeholder="Buscar un producto"
        className="border bg-gray-100 rounded-md h-6 w-full px-3"
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
