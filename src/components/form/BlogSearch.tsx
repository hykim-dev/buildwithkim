"use client";
import { SearchIconTwo } from '@/svg/SearchIcon';
import React from 'react';

const BlogSearch = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onClick={handleSubmit} action="#">
            <div className="tp-blog-sidebar-search-input">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                    <SearchIconTwo/>
                </button>
            </div>
        </form>
    );
};

export default BlogSearch;