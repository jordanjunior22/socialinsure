import React, { useEffect, useState, useRef } from 'react';
import styles from './ScrollReveal.module.css';

const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`${styles.reveal} ${isVisible ? styles.isVisible : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
