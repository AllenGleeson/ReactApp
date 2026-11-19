import { useEffect, useState } from 'react';

// True once the page has been scrolled more than `offset` pixels.
export default function useScrolledPast(offset = 20) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > offset);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    return scrolled;
}
