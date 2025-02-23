import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Player1 = () => {
  const { id } = useParams();  // This will get the videoID from the URL
  const navigate = useNavigate();

  if (!id) {
    return <div>Video not found!</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;

  return (
    <div className="player1">
      <button onClick={() => navigate(-1)}>Back</button>
      <iframe
        width="100%"
        height="640"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default Player1;
