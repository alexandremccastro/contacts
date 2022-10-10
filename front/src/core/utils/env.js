const vars = process.env;

export const env = (name) => {
  return vars[name];
};
