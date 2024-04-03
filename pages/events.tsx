import React, { useEffect, useState } from 'react';

interface Event {
    id: number;
    title: string;
    date: string;
}

const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch('https://localhost:9872/events')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>All Events</h1>
            {events.map((event) => (
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    <p>Date: {event.date}</p>
                </div>
            ))}
        </div>
    );
};

export default EventsPage;