// utils/index.ts
export function cn(...classNames: (string | undefined | false)[]) {
  return classNames.filter(Boolean).join(" ");
}


