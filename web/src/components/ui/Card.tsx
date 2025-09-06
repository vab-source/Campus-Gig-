import { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={"rounded-lg border border-slate-200 bg-white " + className} />
  );
}

export function CardBody({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={"p-4 " + className} />
  );
}

export function CardHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={"px-4 pt-4 font-semibold " + className} />
  );
}

