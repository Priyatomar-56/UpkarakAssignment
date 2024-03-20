let events = []; // No longer exported

export const createEvent = (eventData) => {
  const newEvent = { ...eventData, id: Date.now().toString() };
  events.push(newEvent); // This line is problematic
  return Promise.resolve(newEvent);
};

export const getEvents = () => {
  return Promise.resolve([...events]); // Return a copy of events array
};
