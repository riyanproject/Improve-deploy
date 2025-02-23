import React from 'react';

// Function to extract video ID from YouTube URL
const getYouTubeVideoID = (url) => {
  const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const CardsData0 = ({ playlist }) => {
  return (
    <div>
      <h2>My Playlist</h2>
      <div className="cards-container">
        {playlist.map((videoLink, index) => {
          const videoID = getYouTubeVideoID(videoLink);
          const thumbnailUrl = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : '';

          return (
            <div key={index} className="card">
              <img
                src={thumbnailUrl}
                alt={`Thumbnail for video ${index + 1}`}
                width="300"
                height="200"
              />
              <p>Video {index + 1}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsData0;
