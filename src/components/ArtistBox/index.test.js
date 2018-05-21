import React from "react";
import { shallow } from "enzyme";
import ArtistBox from "./";

describe("ArtistBox", () => {
  let wrapper;
  const artist = {
    id: "43",
    title: "Bestami Turna - Soundpark 14.04.2018",
    thumb:
      "https://images.hearthis.at/1/5/2/_/uploads/283048/image_track/1914537/w200_h200_q70_----1525319281387.jpg",
    user: {
      username: "TDSmix"
    },
    playback_count: "126"
  };

  beforeEach(() => {
    wrapper = shallow(<ArtistBox artist={artist} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
