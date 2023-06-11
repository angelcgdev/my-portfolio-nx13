"use client";
import { useRef, useState, MouseEvent, useEffect } from "react";
export const categories = ["All", "Frontend", "Backend"] as const;
export type Categories = (typeof categories)[number];
type Props = { onChange: (category: Categories)=>void};
export const Filter = (props:Props) => {
  const firstId = categories[0];
  const [index, setIndex] = useState<Categories>(firstId);
  const listCategories = useRef<HTMLDivElement>(null);
  const tabIndicator = useRef<HTMLSpanElement>(null);

  function getElementById(id: Categories) {
    return listCategories.current!.children.namedItem(id);
  }
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setIndex(id as Categories);
    const button = getElementById(id as Categories)! as HTMLElement;
    const { offsetLeft, clientWidth, clientHeight } = button;
    tabIndicator.current!.style.width = `${clientWidth}px`;
    tabIndicator.current!.style.height = `${clientHeight}px`;
    tabIndicator.current!.style.left = `${offsetLeft}px`;
    props.onChange(id as Categories)
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
