import React from 'react';
import Events from "./Events";
import AboutVendor from "./AboutVendor";

const ListPage = () => {
    return (
        <div className="container-page">
            <div className="page-content">
                <h1 className="section-title">Events</h1>
                <Events
                    sortBy='date'
                />
                <AboutVendor />
                <div className="page-separator"></div>
                <Events
                    sortBy='importance'
                />
            </div>
        </div>
    );
};

export default ListPage;