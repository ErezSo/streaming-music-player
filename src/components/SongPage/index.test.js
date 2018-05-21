import React from "react";
import { shallow } from "enzyme";
import SongPage from "./";

describe("SongPage", () => {
  let wrapper;
  const spyOnPlaySong = jest.fn();
  const props = {
    artists: [
      {
        id: "43",
        release_date: "2018-05-14 09:46:01",
        downloadable: "0",
        title: "Bestami Turna - Soundpark 14.04.2018",
        artwork_url:
          "https://images.hearthis.at/1/5/2/_/uploads/283048/image_track/1914537/w500_q70_----1525319281387.jpg",
        user: {
          id: "283048",
          username: "TDSmix"
        },
        stream_url:
          "https://hearthis.at/tdsmix/bestami-turna-soundpark-14042018/listen/?s=rCW"
      }
    ],
    match: {
      match: {
        params: {
          id: "43"
        }
      }
    },
    playSong: spyOnPlaySong
  };

  beforeEach(() => {
    wrapper = shallow(<SongPage {...props} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('plays the selected song when clicking on "play"', () => {
    wrapper.find(".glyphicon-play-circle").simulate("click");
    expect(spyOnPlaySong).toHaveBeenCalledTimes(1);
  });
});
