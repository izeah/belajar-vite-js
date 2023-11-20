export const isEven = (i: number): boolean => {
  return i % 2 == 0;
};

export const sayGoodbye = (name: string): void => {
  console.info("Goodbye", name);
};

export const sayHello = (name: string): void => {
  console.info("Hello", name);
};
