import React, { useRef, useState, useEffect } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';
import Cards_data from '../../assets/cards/cards_data1';

const TitleCards1 = ({ title }) => {
  const [cards, setCards] = useState(Cards_data);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });
  const cardsRef = useRef();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener('wheel', handleWheel);

    return () => {
      currentCardsRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const deleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id)); // Also remove from favorites if deleted
  };

  return (
    <div className="title-cards">
      <h2>{title || 'Popular Trailers'}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <Link to={`/player/${card.id}`}>
              <img src={card.image} alt={card.name} />
            </Link>
            <p>{card.name}</p>
            <div className="card-buttons">
              <button
                className={`button-edit ${favorites.includes(card.id) ? 'favorite' : ''}`}
                onClick={() => toggleFavorite(card.id)}
              >
                {favorites.includes(card.id) ? '💖' : '❤︎'}
              </button>
              <button className="button-delete" onClick={() => deleteCard(card.id)}>
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards1;
