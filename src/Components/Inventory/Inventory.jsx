import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';
import Cards_data from '../../assets/cards/cards_data';


const Inventory = () => {
  const [favorites, setFavorites] = useState([]);
  const [goals, setGoals] = useState({
    day: '',
    week: '',
    month: '',
    year: ''
  });
  const [journal, setJournal] = useState('');
  const [time, setTime] = useState({
    ishaToFajr: '',
    fajrToZuhr: '',
    zuhrToAsr: '',
    asrToMaghrib: '',
    maghribToIsha: ''
  });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    // Load goals from localStorage
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || {
      day: '',
      week: '',
      month: '',
      year: ''
    };
    setGoals(savedGoals);

    // Load journal from localStorage
    const savedJournal = localStorage.getItem('journal') || '';
    setJournal(savedJournal);

    // Load time from localStorage
    const savedTime = JSON.parse(localStorage.getItem('time')) || {
      ishaToFajr: '',
      fajrToZuhr: '',
      zuhrToAsr: '',
      asrToMaghrib: '',
      maghribToIsha: ''
    };
    setTime(savedTime);
  }, []);

  const favoriteCards = Cards_data.filter((card) => favorites.includes(card.id));

  // Delete a card from favorites
  const deleteCard = (id) => {
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Handle goal input change
  const handleGoalChange = (e, type) => {
    const updatedGoals = { ...goals, [type]: e.target.value };
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  // Handle journal input change
  const handleJournalChange = (e) => {
    setJournal(e.target.value);
    localStorage.setItem('journal', e.target.value);
  };

  // Handle time input change
  const handleTimeChange = (e, key) => {
    const updatedTime = { ...time, [key]: e.target.value };
    setTime(updatedTime);
    localStorage.setItem('time', JSON.stringify(updatedTime));
  };

  return (
    <div>
      <h1 className='inventory'>Inventory</h1>
      <div className='favourites'>
        <h2>Favourites</h2>
        <div className="card-list">
          {favoriteCards.length > 0 ? (
            favoriteCards.map((card) => (
              <div className="card" key={card.id}>
                <button className="inventory-button-delete" onClick={() => deleteCard(card.id)}>✖</button>
                <Link to={`/player/${card.id}`}>
                  <img src={card.image} alt={card.name} />
                </Link>
                <p>{card.name}</p>
              </div>
            ))
          ) : (
            <p>No favorites yet!</p>
          )}
        </div>
      </div>

      <div className='Mind-title'><h2>Mind</h2></div>
      <div className="mind-container">
        <img src="src/assets/mind-picture.png" alt="Mind" className="mind-image" />
        <div className="mind-text">
          <p>Motivation : <span style={{ marginLeft: "20px" }}>13</span></p>
          <p>Knowledge : <span style={{ marginLeft: "15px" }}>24</span></p>
          <p>Web Dev : <span style={{ marginLeft: "32px" }}>32</span></p>
          <p>Gym : <span style={{ marginLeft: "65px" }}>14</span></p>
          <p>Dawah : <span style={{ marginLeft: "46px" }}>23</span></p>
        </div>

        {/* Goals Section */}
        <div className='goals-inventory'>
          <h2>Goals</h2>
          <p>
            Goal for the day <input 
              type="text" 
              value={goals.day} 
              onChange={(e) => handleGoalChange(e, 'day')} 
              style={{ marginLeft: "23px" }} 
            />
          </p>
          <p>
            Goal for the week <input 
              type="text" 
              value={goals.week} 
              onChange={(e) => handleGoalChange(e, 'week')} 
              style={{ marginLeft: "13px" }} 
            />
          </p>
          <p>
            Goal for the month <input 
              type="text" 
              value={goals.month} 
              onChange={(e) => handleGoalChange(e, 'month')} 
              style={{ marginLeft: "1px" }} 
            />
          </p>
          <p>
            Goal for the year <input 
              type="text" 
              value={goals.year} 
              onChange={(e) => handleGoalChange(e, 'year')} 
              style={{ marginLeft: "18px" }} 
            />
          </p>
        </div>

        {/* Time Section */}
        <div className='time-inventory'>
          <h2>Time</h2>
          <p>
            isha to fajr <input 
              type="text" 
              value={time.ishaToFajr} 
              onChange={(e) => handleTimeChange(e, 'ishaToFajr')} 
              style={{ marginLeft: "44px" }} 
            />
          </p>
          <p>
            fajr to zuhr <input 
              type="text" 
              value={time.fajrToZuhr} 
              onChange={(e) => handleTimeChange(e, 'fajrToZuhr')} 
              style={{ marginLeft: "44px" }} 
            />
          </p>
          <p>
            zuhr to asr <input 
              type="text" 
              value={time.zuhrToAsr} 
              onChange={(e) => handleTimeChange(e, 'zuhrToAsr')} 
              style={{ marginLeft: "45px" }} 
            />
          </p>
          <p>
            asr to maghrib <input 
              type="text" 
              value={time.asrToMaghrib} 
              onChange={(e) => handleTimeChange(e, 'asrToMaghrib')} 
              style={{ marginLeft: "10px" }} 
            />
          </p>
          <p>
            maghrib to isha <input 
              type="text" 
              value={time.maghribToIsha} 
              onChange={(e) => handleTimeChange(e, 'maghribToIsha')} 
              style={{ marginLeft: "2px" }} 
            />
          </p>
        </div>
      </div>
      
      {/* Journal Section */}
      <div className='journal-inventory'>
        <h2>Journal</h2>
        <textarea
          value={journal}
          onChange={handleJournalChange}
          placeholder="Write your thoughts here..."
          rows={5}
          cols={50}
        />
      </div>
    </div>
  );
};

export default Inventory;
