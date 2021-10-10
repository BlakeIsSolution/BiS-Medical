import React from "react";
import { Link } from "react-router-dom";

const ContactAddress = () => {
    return (
        <div className="contact-info-content">
            <div className="info-address">
                <h2 className="title">
                    Brooklyn, <span>New York</span>
                </h2>
                <p>
                    849 Diamond Str, 07th Floor, NY 10012, New York, United
                    State America
                </p>
                <Link to="/">
                    <span>Email:</span> test@test.com
                </Link>
            </div>
            <div className="brand-office">
                <div className="info-tem style-two">
                    <h6>Call directly:</h6>
                    <p>+1 123-456-7890</p>
                </div>
                <div className="info-tem">
                    <h6>Brand Offices:</h6>
                    <p>
                        XXXX PA | XXX, GA | XXXXX, IL | XXXXX, TX,
                        XXXX, NJ | XXXX, TX
                    </p>
                </div>
                <div className="info-tem mb-0">
                    <h6>Work Hours:</h6>
                    <p>Mon - Sat: 8.00 - 17.00, Sunday closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;
