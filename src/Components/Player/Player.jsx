import React from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from 'react-router-dom';
import Cards_data from '../../assets/cards/Cards_data';

const Player = () => {
  const { id } = useParams(); // Get the video ID from URL params
  const navigate = useNavigate();

  // Find the card data using the video ID (from the playlist)
  const cardData = Cards_data.find((card) => card.id === id);

  if (!cardData) {
    return <div>Video not found!</div>; // Handle invalid ids or missing video data
  }

  return (
    <div className="player">
      {/* Back button to go back to the previous page */}
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-icon"
        onClick={() => navigate(-1)} // Navigate back
      />
      
      {/* YouTube iframe to play the video */}
      <iframe
        width="90%"
        height="90%"
        src={`${cardData.url.replace("watch?v=", "embed/")}?autoplay=1&rel=0&showinfo=0`}
        title={cardData.name}
        frameBorder="0"
        allowFullScreen
        controls="1"
        autoplay="1"
      ></iframe>

      {/* Display video information */}
      <div className="player-info">
        <p>{cardData.published_at}</p>
        <p>{cardData.name}</p>
        <p>{cardData.type}</p>
      </div>
    </div>
  );
};

export default Player;
