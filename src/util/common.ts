export const get_obj_diff = (a: {}, b: {}) => {
  let result = {};
  Object.keys(a).forEach((key) => {
    if (a[key] !== b[key]) {
      result[key] = a[key];
    }
  });
  return result;
};
