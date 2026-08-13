import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Lightweight reveal-on-scroll wrapper backed by IntersectionObserver.
 * Drop-in replacement for the unmaintained react-reveal <Fade/>: it keeps the
 * same prop shape (bottom/top/left/right + distance/duration/delay) so call
 * sites don't have to change. Unlike react-reveal, it reveals reliably on mount
 * (the observer fires immediately for anything already in view), which fixes the
 * "content stuck at opacity: 0" behavior under modern React.
 */
const Reveal = ({
  children,
  bottom,
  top,
  left,
  right,
  distance,
  duration,
  delay,
  fraction,
  className,
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // No IO support or reduced-motion preference: show immediately, no animation.
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: fraction }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [fraction]);

  const hiddenOffset = () => {
    if (bottom) return `translateY(${distance})`;
    if (top) return `translateY(-${distance})`;
    if (left) return `translateX(-${distance})`;
    if (right) return `translateX(${distance})`;
    return 'none';
  };

  const style = {
    opacity: shown ? 1 : 0,
    transform: shown ? 'none' : hiddenOffset(),
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  bottom: PropTypes.bool,
  top: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  distance: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  fraction: PropTypes.number,
  className: PropTypes.string,
};

Reveal.defaultProps = {
  bottom: false,
  top: false,
  left: false,
  right: false,
  distance: '30px',
  duration: 1000,
  delay: 0,
  fraction: 0.2,
  className: '',
};

export default Reveal;
