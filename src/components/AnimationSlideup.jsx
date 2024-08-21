import React, { useRef, useEffect } from 'react';

const SlideUpFadeIn = ({ children, threshold }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('animate');
                    observer.unobserve(ref.current); // Stop observing once the animation is triggered
                }
            },
            { threshold: 0.2 } // Trigger when 1% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="slide-up-fade-in">
            {children}
        </div>
    );
};

export default SlideUpFadeIn;
