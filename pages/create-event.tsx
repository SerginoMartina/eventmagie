import React, { useState } from 'react';

const CreateEventPage: React.FC = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');

    const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
    };

    const handleEventDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventDate(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your logic to create the event here
        console.log('Event name:', eventName);
        console.log('Event date:', eventDate);
    };

    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={handleEventNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="eventDate">Event Date:</label>
                    <input
                        type="date"
                        id="eventDate"
                        value={eventDate}
                        onChange={handleEventDateChange}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateEventPage;