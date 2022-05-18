function App() {
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
          <h4 className="text-2xl font-bold text-gray-900 pb-8">My Products</h4>
          <div className="grid grid-cols-4 gap-y-10 gap-x-6">
            <article className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80">
                <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Basic Tee
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
