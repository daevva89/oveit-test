import { useParams } from 'react-router-dom';
import eventsData from '../data.json';
import EventDetails from "./EventDetails";
import Events from "./Events";
import AboutVendor from "./AboutVendor";
import React from "react";

const EventPage = () => {
    const { title } = useParams();
    const event = eventsData.events.find(event => event.title.replace(/\s+/g, '-').toLowerCase() === title);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="container-page">
            <div className="page-content">
                <h1 className="section-title">Events</h1>
                <EventDetails event={event} />
                <h1 className="section-title">About Vendor</h1>
                <AboutVendor />
                <div className="page-separator"></div>
                <Events
                    sortBy='importance'
                />
            </div>
        </div>
    );
};

export default EventPage;