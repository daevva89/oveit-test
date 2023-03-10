import React from 'react';
import eventsData from '../data.json';
import './Events.scss';
import {Link} from "react-router-dom";
import { formatDate } from './utils';

const Events = ({ sortBy }) => {
    const today = new Date();
    const events = sortBy === 'date'
        ? eventsData.events
            .filter(event => new Date(event.date) >= today)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 4)
            .map(event => ({...event, date: formatDate(event.date)}))
        : eventsData.events.sort((a, b) => b.importance - a.importance);

    const last4Events = events.slice(0, 4);

    return (
        <div className="events-container">
            {last4Events.map(event => {
                return (
                    <Link
                        className="event-box"
                        key={event.id}
                        to={`/event/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                        <img src={require(`../images/${event.image}`)} alt={event.title} />
                        <div className="event-details">
                            <div className="event-type">{event.type}</div>
                            <div className="event-title">{event.title}</div>
                            <div className="event-date"><i className="fa fa-regular fa-calendar"></i>{event.date} at {event.startTime} - {event.endTime}</div>
                            <div className="event-virtual"><i className="fa fa-regular fa-location-dot"></i>{event.virtual ? 'Virtual' : 'Physical'}</div>
                            <div className="event-separator"></div>
                            <div className="event-actions">
                                <a href="#" className="event-action"><i className="fa fa-regular fa-share-nodes"></i>Share</a>
                                <a href="#" className="event-action"><i className="fa fa-regular fa-heart"></i>Like</a>
                            </div>
                            <div className="event-separator"></div>
                            <div className="event-bottom">
                                <div className="event-price-range">
                                    <i className="fa fa-regular fa-ticket"></i>
                                    {event.priceRange}
                                </div>
                                <a href="#" className="button-ticket">
                                    Tickets
                                </a>
                            </div>
                        </div>
                    </Link>
            )})}
        </div>
    );
};

export default Events;
