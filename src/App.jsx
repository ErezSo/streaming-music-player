import React, { useState, useEffect, useRef } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { ArtistsFeed, Navbar, SongPage } from "./components"

function App() {
  const [artists, setArtists] = useState([])
  const [page, setPage] = useState(1)
  const [song, setSong] = useState("")
  const { current: currentPage } = useRef(page)

  const loadArtists = async ({ delay = 0, page }) => {
    return fetch(
      `https://api-v2.hearthis.at/feed/?type=popular&page=${page}&count=20`
    )
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setArtists(prevArtists => prevArtists.concat(data))
          setPage(prevPage => prevPage + 1)
        }, delay)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    loadArtists({ page: currentPage })
  }, [currentPage])

  const playSong = song => setSong(song)

  return (
    <BrowserRouter>
      <div>
        <Navbar song={song} />
        <div className="container-fluid">
          <Route
            exact
            path="/"
            render={() => (
              <ArtistsFeed
                artists={artists}
                loadArtists={opts => loadArtists({ page, ...opts })}
              />
            )}
          />
          <Route
            exact
            path="/songs/:id"
            render={match => (
              <SongPage artists={artists} playSong={playSong} match={match} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
