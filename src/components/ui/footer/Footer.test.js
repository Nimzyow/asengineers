import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtilities";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Footer from "../footer/Footer";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  assumedProps: null
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Footer {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-footer");
  expect(component.length).toBe(1);
});
