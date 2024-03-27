import React, { useState, useEffect } from "react";
import "./youtube.css";

function YouTube() {
  const [YoutubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB27_z8BO_hKsc_e09nN55JQt6tYyc5SmU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const YoutubeVideosData = data.items;
        setYouTubeVideos(YoutubeVideosData);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
  }, []);

  console.log(YoutubeVideos);
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">
              Latest Videos <br />
              <br />
            </div>
          </div>
          {YoutubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTube;
