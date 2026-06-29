import { profile } from '@/data/profileData';
import ContactForm from '../form/ContactForm';
import React from 'react';

interface IContactArea {
    spacingClass?: string;
}

const ContactArea: React.FC<IContactArea> = ({ spacingClass = "pb-135" }) => {
    return (
        <div className={`tp-contact-area ${spacingClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-contact-wrap">
                            <h2 className="tp-section-tittle">Get in touch with me</h2>
                            <p className="mb-40">{profile.shortBio}</p>
                            {/* contact form area */}
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
