import { forwardRef, HtmlHTMLAttributes } from "react";
import styles from "./Section.module.css";
// eslint-disable-next-line react/display-name
export const SectionWrapper = forwardRef<
  HTMLElement,
  HtmlHTMLAttributes<HTMLElement>
>(({ id, children, ...rest }, ref) => {
  return (
    <section id={id} ref={ref} className={styles["wrapper"]} {...rest}>
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 lg:gap-10 relative top-0">{children}</div>
    </section>
  );
});
