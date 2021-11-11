export const cJoin = (...args: string[]) => {
  return args.filter((a) => a !== undefined).join(" ");
};
