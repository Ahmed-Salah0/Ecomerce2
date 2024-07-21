import React, { useState, useEffect } from 'react';
import "./Scroll.css"
import { FaArrowUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // This function will be called when the user scrolls
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // This function will scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <i onClick={scrollToTop} className="scroll-button fs-2">
                    <FaArrowUp/>
                </i>
            }
        </div>
    );
};

export default ScrollToTop;
