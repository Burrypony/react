import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {

  const [videos, setVideos] = React.useState([])
  const [selectedVideo, setSelectedVideo] = React.useState(null)
  const [term, setTerm] = React.useState("buildings")

  
  useEffect(
    () => {
      const response = async () =>{await youtube.get("/search", {
        params: {
          q: term,
        },
      });}
      console.log(response)
      setVideos(response.data.items)
      setSelectedVideo(response.data.items[0])
    },[term]
  )
  

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  };

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={setTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={onVideoSelect}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
