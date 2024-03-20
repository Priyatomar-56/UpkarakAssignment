import React, { useState } from 'react';
import './EventCreationForm.css'; // Importing CSS file for EventCreationForm
import logo from "../image/CharityImage.jpeg";
import { useNavigate } from 'react-router-dom';
const EventCreationForm = ({ onCreateEvent }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      onCreateEvent(eventData);
      navigate("/event");
  };
const navigate = useNavigate();
    return (
      <div className='container'>
      <form className="event-creation-form" onSubmit={handleSubmit}>
          <h2 className='heading'>Create Event</h2>
      <label className="form-label">
        Title
        <input className="form-input" type="text" name="title" value={eventData.title} onChange={handleChange} required />
      </label>
      <label className="form-label">
        Date
        <input className="form-input" type="date" name="date" value={eventData.date} onChange={handleChange} required />
      </label>
      <label className="form-label">
        Time
        <input className="form-input" type="time" name="time" value={eventData.time} onChange={handleChange} required />
      </label>
      <label className="form-label">
        Description
        <textarea className="form-textarea" name="description" value={eventData.description} onChange={handleChange} required />
      </label>
      <button className="form-button" type="submit" >Create Event</button>
      </form>
            <img className="image" src={ logo} alt="" />
    </div>
  );
};

export default EventCreationForm;
