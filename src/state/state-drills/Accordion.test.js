import React from "react";
import Accordion from './Accordion.js'
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];

describe("Accordion Component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("renders sections closed by default", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("opens sections when button is clicked", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("one sections opens at a time", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
