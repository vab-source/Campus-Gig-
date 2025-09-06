import { HTMLAttributes } from "react";

export default function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={
        "inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 " +
        className
      }
    />
  );
}

