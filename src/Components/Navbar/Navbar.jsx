import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { logout } from '../../firebase';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Load saved tags from localStorage on initialization
  const [tags, setTags] = useState(() => {
    return JSON.parse(localStorage.getItem('goalTags')) || [];
  });

  // Save tags to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('goalTags', JSON.stringify(tags));
  }, [tags]);

  // Add a new tag
  const addTag = () => {
    const input = document.getElementById('goalInput');
    const newTag = input.value.trim();

    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]); // Add new tag to state
      input.value = ''; // Clear input after adding tag
    }
  };

  // Add tag on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents newline in textarea
      addTag();
    }
  };

  // Remove a tag when clicked
  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <div className='navbar'>
      <div className="improve-logo">Improve</div>

      <div className="goals">
        <h3 className='goalsname'>GOALS</h3>
        <div className="goal-input-container">
          <textarea
            id="goalInput"
            placeholder="Type a goal"
            onKeyDown={handleKeyPress}
          />
          <button onClick={addTag} className="add-button">Add</button>
        </div>

        {/* Tags appear below the input section */}
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="goal-tag" onClick={() => removeTag(tag)}>
              {tag} ✖
            </span>
          ))}
        </div>
      </div>

      <div className="inventory-navbar">
        <Link to="/inventory" className="inventory-link" style={{ textDecoration: 'none' }}>
          Inventory
        </Link>
      </div>

      <div className="profile">
        <a onClick={() => logout()}>Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
