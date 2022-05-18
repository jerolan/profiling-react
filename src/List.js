export default function List({ items, renderItem }) {
  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-6">
      {items.map((item) => renderItem(item))}
    </div>
  );
}
