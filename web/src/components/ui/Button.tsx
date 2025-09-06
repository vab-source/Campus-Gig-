import { ButtonHTMLAttributes } from "react";

export default function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed " +
        className
      }
    />
  );
}

