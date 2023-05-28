"use client";
import { useRef, useState, MouseEvent, useEffect } from "react";
const categories = ["All", "Fontend", "Backend"] as const;
type categories = (typeof categories)[number];
export const Filter = () => {
  const firstId = categories[0];
  const [index, setIndex] = useState<categories>(firstId);
  const listCategories = useRef<HTMLDivElement>(null);
  const tabIndicator = useRef<HTMLSpanElement>(null);

  function getElementById(id: categories) {
    return listCategories.current!.children.namedItem(id);
  }
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setIndex(id as categories);
    const button = getElementById(id as categories)! as HTMLElement;
    const { offsetLeft, clientWidth, clientHeight } = button;
    tabIndicator.current!.style.width = `${clientWidth}px`;
    tabIndicator.current!.style.height = `${clientHeight}px`;
    tabIndicator.current!.style.left = `${offsetLeft}px`;
  };

  useEffect(() => {
    const firstButton = getElementById(firstId) as HTMLButtonElement;
    const { clientWidth, clientHeight } = firstButton;
    tabIndicator.current!.style.width = `${clientWidth}px`;
    tabIndicator.current!.style.height = `${clientHeight}px`;
  }, []);
  return (
    <div
      ref={listCategories}
      className="flex flex-row justify-start items-center w-max relative overflow-hidden"
    >
      <span
        ref={tabIndicator}
        className="bg-primary absolute -z-10 rounded-md duration-200"
      />
      {categories.map((category, i) => (
        <button
          key={"category" + i}
          id={category}
          className={`!bg-transparent !scale-100 ${
            category === index ? "text-white" : "opacity-70"
          }`}
          onClick={handleClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
