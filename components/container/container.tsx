import cn from "clsx";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  noBackground?: boolean;
};
export function Container({
  children,
  className,
  noBackground,
}: ContainerProps): JSX.Element {
  return (
    <section className="">
      <div
        className={cn(
          "rounded-xl py-1",
          noBackground ? "" : "bg-main-black",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
