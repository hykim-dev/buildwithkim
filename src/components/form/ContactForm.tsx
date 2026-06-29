"use client";
import { profile } from '@/data/profileData';
import { budgetOptions, PortfolioTypeOptions } from '@/data/dropdownData';
import NiceSelect from '../ui/NiceSelect';
import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleSorting = () => { };
    return (
        <form onSubmit={handleSubmit} action="#">
            <div className="tp-contact-form">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-form-input mb-20">
                            <label className="tp-label" htmlFor="name">What’s your name?*</label>
                            <input className="tp-input" type="text" id="name" placeholder="Your name" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form-input mb-20">
                            <label className="tp-label" htmlFor="email">Enter your email address*</label>
                            <input className="tp-input" type="text" id="email" placeholder={profile.email} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form-input">
                            <label className="tp-label" htmlFor="interested">What kind of opportunity is this?*</label>
                            <NiceSelect
                                options={PortfolioTypeOptions}
                                defaultCurrent={0}
                                onChange={handleSorting}
                                name="Country"
                                cls="tp-select tp-input mb-20"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form-input">
                            <label className="tp-label" htmlFor="budget">How would you like to work together?*</label>
                            <NiceSelect
                                options={budgetOptions}
                                defaultCurrent={0}
                                onChange={handleSorting}
                                name="Country"
                                cls="tp-select tp-input mb-20"
                            />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tp-contact-form-input mb-20">
                            <label className="tp-label" htmlFor="email2">Where can I learn more?</label>
                            <input className="tp-input" type="text" id="email2" placeholder="Company site, job post, or LinkedIn link" />
                        </div>
                        <div className="tp-contact-form-input mb-20">
                            <label className="tp-label" htmlFor="textarea">How can I help you?</label>
                            <textarea className="tp-input tp-textarea" id="textarea" placeholder="Tell me about the product, role, or problem you want to solve."></textarea>
                        </div>
                        <div className="tp-contact-form-btn">
                            <button type="submit" className="tp-btn tp-btn-xl d-flex justify-content-center lh-1">
                                <span>
                                    <span className="text-1">Send Message</span>
                                    <span className="text-2">Send Message</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
