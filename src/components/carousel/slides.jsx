import React from 'react';
import { CarouselContext } from './carousel-context';

/**
 * `<Slides />` is the component that wrap around `<Slide />`.
 *
 * `<Slides />` must be used within `<Carousel />` component.
 */
export function Slides({ children }) {
  const {
    activeIndex,
    direction,
    setTotalSlides,
    pause,
    unPause,
  } = React.useContext(CarouselContext);

  const totalSlides = React.Children.count(children);

  React.useEffect(() => {
    setTotalSlides(totalSlides);
  }, [totalSlides, setTotalSlides]);

  return (
    <div className="carousel-inner" role="listbox">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          pause,
          unPause,
          direction,
          isActive: index === activeIndex,
          'data-testid': `slide-${index}`,
        })
      )}
    </div>
  );
}
