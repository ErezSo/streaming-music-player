import React from "react";
import { shallow } from "enzyme";
import MusicPlayer from "./";

describe("MusicPlayer", () => {
  let wrapper;
  const song =
    "https://hearthis.at/tdsmix/bestami-turna-soundpark-14042018/listen/?s=rCW";

  beforeEach(() => {
    wrapper = shallow(<MusicPlayer song={song} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
