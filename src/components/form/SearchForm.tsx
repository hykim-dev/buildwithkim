"use client";
import React from 'react';

const SearchForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form onClick={handleSubmit} action="#">
            <div className="tp-search-form-input">
                <input type="text" placeholder="What are you looking foor?" />
                <span className="tp-search-focus-border"></span>
                <button className="tp-search-form-icon" type="submit">
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    );
};

export default SearchForm;