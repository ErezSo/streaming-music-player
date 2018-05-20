import React from "react";
import { shallow } from "enzyme";
import ArtistsPage from "./";

describe("ArtistsPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArtistsPage />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
