export const objectToFields = (object) => {
  return Object.keys(object).map((e) => ({ name: [e], value: object[e] }));
};
