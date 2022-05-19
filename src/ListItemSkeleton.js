export default function ListItemSkeleton() {
  return (
    <article className="group relative animate-pulse">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80">
        <div className={`w-full h-full bg-gray-300`} />
      </div>
      <div className="mt-4 flex justify-between  space-x-2">
        <div className="space-y-1 flex w-1/3 flex-col">
          <div className="text-sm text-gray-300 bg-gray-300 rounded h-5 w-full" />
          <div className="text-sm text-gray-300 bg-gray-300 rounded h-5 w-full" />
        </div>
        <div className="text-sm font-medium text-gray-300 bg-gray-300 rounded h-6 w-1/2" />
      </div>
    </article>
  );
}
