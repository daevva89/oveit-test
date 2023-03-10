import React from 'react';
import vendorData from '../data.json';
import './AboutVendor.scss';

const AboutVendor = () => {
    const { vendor } = vendorData;

    return (
        <div className="about-vendor">
            <div className="about-vendor__img-container">
                <img className="about-vendor__img" src={require(`../images/${vendor.image}`)} alt={vendor.name} />
            </div>
            <div className="about-vendor__right">
                <div className="about-vendor__info">
                    <h2 className="about-vendor__name">{vendor.name}</h2>
                    <p className="about-vendor__description">{vendor.description}</p>
                </div>
                <a className="about-vendor__contact" href={vendor.contactUrl}>Contact Vendor</a>
            </div>
        </div>
    );
};

export default AboutVendor;
