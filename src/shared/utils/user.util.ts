export const generateCode = (): string => {
  return `${Math.floor(100000 + Math.random() * 900000)}`;
};
