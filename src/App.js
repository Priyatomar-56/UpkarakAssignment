// import React, { useState, useEffect } from 'react';
// import EventCreationForm from './components/EventCreationForm';
// import EventListing from './components/EventListing';
// import { createEvent, getEvents } from './api/Api';
// import './style.css';

// const App = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     getEvents().then(data => setEvents(data));
//   }, []);

//   const handleCreateEvent = (eventData) => {
//     createEvent(eventData).then(newEvent => {
//       setEvents(prevEvents => [...prevEvents, newEvent]);
//     });
//   };

//   return (
//     <div className="app-container">
//       <div className="event-creation">
//         <EventCreationForm onCreateEvent={handleCreateEvent} />
//       </div>
//       <div className="event-listing">
//         <EventListing events={events} />
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventCreationForm from './components/EventCreationForm';
import EventListing from './components/EventListing';
import { createEvent, getEvents } from './api/Api';
import './style.css';

const App = () => {
  const [events, setEvents] = React.useState([]);
  console.log(events)

  React.useEffect(() => {
    getEvents().then(data => setEvents(data));
  }, []);

  const handleCreateEvent = (eventData) => {
    createEvent(eventData).then(newEvent => {
      setEvents(prevEvents => [...prevEvents, newEvent]);
    });
  };

  return (
    <Router >
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<div className="event-creation"><EventCreationForm onCreateEvent={handleCreateEvent} /></div>}
          />
          <Route
            path="/event"
            element={<div className="event-listing"><EventListing events={events} /></div>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

