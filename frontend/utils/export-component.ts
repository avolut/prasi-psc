import { ComponentType, lazy } from "react";

export const exportComponent = <
  K extends Promise<Record<string, ComponentType<any>>>,
  I extends keyof Awaited<K>
>(
  arg: K,
  key: I
) => {
  return lazy(async () => ({
    default: (await arg)[key],
  }));
};
