// Minimal classnames joiner — avoids adding a dependency for a one-line utility.
export type ClassValue = string | number | false | null | undefined;

export function clsx(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
