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

export const groupByMonth = (list, prop) => {
  debugger;
  let groups = {};

  list.forEach((item) => {
    const value = item[prop].format('MM/YYYY');
    if (!groups[value]) groups[value] = [];
    groups[value].push(item);
  });
  return groups;
};

export const moneyFormatter = (num) => {
  let p = num.toFixed(2).split('.');
  return (
    'R$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc;
      }, '') +
    ',' +
    p[1]
  );
};
