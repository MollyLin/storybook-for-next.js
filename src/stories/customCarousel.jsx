
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const CarouselWrapper = styled.div`
  position: relative;
  width: ${ props => props.width}px;
  height: 400px;
`;

export const Carousel = ({}) => {
  const carouselRef = useRef();
  const [imageWidth, setImageWidth] = useState(600);

  const handleUpdateCarouselWidth = () => {
    const carouselWidth = carouselRef.current.clientWidth;
    setImageWidth(carouselWidth);
  };

  useEffect(() => {
    handleUpdateCarouselWidth();
    window.addEventListener('resize', handleUpdateCarouselWidth);
    return () => {
      window.removeEventListener('resize', handleUpdateCarouselWidth);
    };
  }, []);

  return (
    <CarouselWrapper
      ref={carouselRef}
      width={imageWidth}
    >
    </CarouselWrapper>
  );
};

Carousel.propTypes = {};
