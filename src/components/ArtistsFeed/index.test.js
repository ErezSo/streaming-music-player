import React from "react";
import { shallow } from "enzyme";
import ArtistsFeed from "./";

describe("ArtistsFeed", () => {
  let wrapper;
  const artists = [
    {
      id: "43",
      title: "Bestami Turna - Soundpark 14.04.2018",
      thumb:
        "https://images.hearthis.at/1/5/2/_/uploads/283048/image_track/1914537/w200_h200_q70_----1525319281387.jpg",
      user: {
        username: "TDSmix"
      },
      playback_count: "126"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<ArtistsFeed artists={artists} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
