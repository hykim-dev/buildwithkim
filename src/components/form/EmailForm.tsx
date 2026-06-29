"use client";
import React from 'react';

const EmailForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form onClick={handleSubmit} action="#">
            <input className="tp-input mr-20 mb-10" type="text" placeholder="Email address" />{" "}
            <button type="submit" className="tp-btn mb-10 tp-btn-xl d-inline-flex align-items-center">
                <span>
                    <span className="text-1">Subscribe</span>
                    <span className="text-2">Subscribe</span>
                </span>
            </button>
        </form>
    );
};

export default EmailForm;