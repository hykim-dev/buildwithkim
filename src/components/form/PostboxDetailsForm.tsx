"use client"
import React from 'react';

const PostboxDetailsForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form onClick={handleSubmit} action="#">
            <div className="row">
                <div className="col-xl-6">
                    <div className="postbox-details-input-box">
                        <div className="postbox-details-input">
                            <label>Name *</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="postbox-details-input-box">
                        <div className="postbox-details-input">
                            <label>Email *</label>
                            <input type="email" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="postbox-details-input-box">
                        <div className="postbox-details-input">
                            <label>Website</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="postbox-details-input-box">
                        <div className="postbox-details-input">
                            <label>Comment *</label>
                            <textarea id="msg"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PostboxDetailsForm;