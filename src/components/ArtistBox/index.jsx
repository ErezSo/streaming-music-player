import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const ArtistBox = ({ artist }) => {
  return (
    <Link to={{ pathname: `/songs/${artist.id}` }}>
      <GroupItem type="button" className="list-group-item">
        <Image src={artist.thumb} alt="artist" className="img-thumbnail" />
        <ArtistDetails>
          <ArtistName>{artist.user.username}</ArtistName>
          <Count>
            <PlayCount>Play Count: {artist.playback_count}</PlayCount>
          </Count>
        </ArtistDetails>
      </GroupItem>
    </Link>
  )
}

const Image = styled.img`
  height: 80px;
  width: 80px;
`

const GroupItem = styled.div`
  width: 100%;
  text-align: left;
  cursor: pointer;
`

const ArtistDetails = styled.div`
  display: inline-block;
`

const ArtistName = styled.div`
  font-size: 1.5em;
  padding-left: 1em;
`

const Count = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: left;
  margin-left: 22px;
`

const PlayCount = styled.li`
  font-size: 11px;
`

export default ArtistBox
