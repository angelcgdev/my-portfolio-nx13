"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useNavBar = () => {
  const [menu, setMenu] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const router = useRouter();
  const path = usePathname();
  const goBack = () => {
    router.back();
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function getSubpathWithoutLang(path: string) {
    const regex = new RegExp(`^\/[a-zA-Z_]+(.*)$`);
    const match = path.match(regex);
    if (match) {
      return match[1].length !== 0 ? match[1] : "/";
    } else {
      return "/";
    }
  }
  useEffect(() => {
    const pathWithOutLang = getSubpathWithoutLang(path ?? "");
    if (pathWithOutLang !== "/") {
      return setIsHome(false);
    }
    return setIsHome(true);
  }, [path]);

  return { menu, setMenu, isHome, goBack, goTop };
};
