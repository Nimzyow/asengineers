import checkPropTypes from "check-prop-types";
/**
 *
 * @param {*} wrapper - Enzyme shallow wrapper
 * @param {*} value  - value of data-test for search
 * @returns{shallow wrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
