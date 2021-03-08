export const objectToFields = (object) => {
  if (object)
    return Object.keys(object).map((e) => ({ name: [e], value: object[e] }));
  else return [];
};

export const fieldsToObject = (fields) => {
  const result = {};
  fields.forEach((e) => {
    result[e.name[0]] = e.value;
  });
  return result;
};
