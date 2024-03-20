
import React from 'react';
import './EventListing.css'; // Import your CSS file

const EventListing = ({ events }) => {
  return (
    <div className='event-listing-container'>
      <h2>Event Lists</h2>
      {events.map((event, index) => (
        <div className='event-card' key={index}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Description: {event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventListing;


