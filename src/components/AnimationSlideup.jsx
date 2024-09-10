import React, { useRef, useEffect } from 'react';

const SlideUpFadeIn = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('animate');
                } else {
                    ref.current.classList.remove('animate');
                }
            },
            { threshold: 0.09 }
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
