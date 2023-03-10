import React from 'react';
import './EventDetails.scss';
import { formatDate } from './utils';

const EventDetails = ({ event }) => {

    const formattedDate = formatDate(event.date);

    return (
        <div className="event-details-container">
            <div className="event-details-image">
                <img src={require(`../images/${event.image}`)} alt={event.title} />
            </div>
            <div className="event-details-content">
                <div className="event-details-top">
                    <div className="event-details-title">{event.title}</div>
                    <div className="event-details-date"><i className="fa fa-regular fa-calendar"></i>{formattedDate} at {event.startTime} - {event.endTime}</div>
                    <div className="event-details-virtual"><i className="fa fa-regular fa-location-dot"></i>{event.virtual ? 'Virtual' : 'Physical'}</div>
                    <div className="event-details-description">{event.description}</div>
                </div>
                <div className="event-details-bottom">
                    <div className="event-details-separator"></div>
                    <div className="event-details-links">
                        <div className="event-details-bottom-left">
                            <a href="#" className="button-ticket">
                                Tickets
                            </a>
                            <div className="event-details-price-range">
                                <i className="fa fa-regular fa-ticket"></i>
                                {event.priceRange}
                            </div>
                        </div>
                        <div className="event-details-actions">
                            <a href="#" className="event-details-action"><i className="fa fa-regular fa-share-nodes"></i>Share</a>
                            <a href="#" className="event-details-action"><i className="fa fa-regular fa-heart"></i>Like</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
