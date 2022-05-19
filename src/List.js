import { useEffect, useState, useRef } from "react";

function useIntersectionObserver(element, callback) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const theObserver = new IntersectionObserver(callbackRef.current, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    theObserver.observe(element);
    return () => {
      theObserver.disconnect();
    };
  }, [element]);
}

export default function List({
  fetchMore,
  items,
  loading,
  renderItem,
  renderLoadingItem,
}) {
  const [ref, setRef] = useState();

  useIntersectionObserver(ref, (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchMore();
    }
  });

  return (
    <div>
      <div className="grid grid-cols-4 gap-y-10 gap-x-6">
        {items.map((item) => renderItem(item))}
        {loading ? renderLoadingItem() : null}
      </div>
      <div className="w-full" ref={setRef} />
    </div>
  );
}
