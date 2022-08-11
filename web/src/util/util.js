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
  let groups = {};

  list.forEach((item) => {
    const value = item[prop].format('MM/YYYY');
    if (!groups[value]) groups[value] = [];
    groups[value].push(item);
  });
  return groups;
};

export const moneyFormatter = (num) => {
  const p = num.toFixed(2).split('.');
  const negative = p[0].includes('-');
  const format =
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc;
      }, '') +
    ',' +
    p[1];
  return 'R$ ' + (negative ? '-' + format : format);
};

export const getRoutesObjects = object => {
  const routes = [];
  const getRoutesObjectsRecusiv = object => {
    const keys = Object.keys(object);
    keys.forEach(key => {
      const value = object[key];
      if (typeof value === 'string') {
        routes.push(value);
        return;
      }
      getRoutesObjectsRecusiv(value);
    });
  };
  getRoutesObjectsRecusiv(object);
  return routes.map(item => {
    const obj = { path: item, exact: true };
    return obj;
  });
};

export const hashCodePath = () => {
  const value = window.location?.getCurrentPath && window.location?.getCurrentPath();
  let hash = 0,
    i = 0,
    len = value?.length || 0;
  while (i < len) {
    hash = ((hash << 5) - hash + value.charCodeAt(i++)) << 0;
  }
  return hash + 2147483647 + 1;
};