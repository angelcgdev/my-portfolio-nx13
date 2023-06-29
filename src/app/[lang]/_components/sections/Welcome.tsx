import Socials from "../Socials";
import styles from "./Welcome.module.css";
import type en from "../../dictionaries/en.json";
import data from "@/data/local/yourData";
import { NavBar } from "../NavBar/NavBar";
export interface CommonProps {
  dictionary: typeof en;
}
export function Welcome({ dictionary }: CommonProps) {
  return (
    <main>
      <NavBar className="sticky top-0 z-10 border-b-2 border-borderc" />
      <section
        id="welcome"
        className={styles["wrapper"]}
      >
        <div className="my-auto flex flex-col gap-1">
          <h1 className={styles["title"]}>{data.name}</h1>
          <h2 className="text-body font-medium">{dictionary.main.role}</h2>
          <p className="description max-w-xs">
            I build accessible, inclusive products and digital experiences for the web.</p>
          <Socials className="mt-4" />
        </div>
      </section>
    </main>
  );
}
