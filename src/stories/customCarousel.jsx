
import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const CarouselWrapper = styled.div`
  position: relative;
  width: ${ props => props.width}px;
  height: 400px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: black;
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  left: ${props => props.left}px;
  transition: all 0.4s ease;
  object-fit: cover;
`;

const ControlButtonGroup = styled.div`
  color: white;
  position: absolute;
  z-index: 10;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  & > svg {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;

const imageSource = [
  {
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=600&h=400&q=60',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=600&h=400&q=60',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&h=400',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=600&h=400&q=60',
  },
];

export const Carousel = ({}) => {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(600);

  // initial 調整畫面
  const handleUpdateCarouselWidth = () => {
    const carouselWidth = carouselRef.current.clientWidth;
    setImageWidth(carouselWidth);
  };

  // 目前圖片左方的值 = 即將進場的 image 與目前的 image 距離 * 圖片的寬度(預設600)
  const setLeftPosition = ({ itemIndex }) => (itemIndex - currentIndex) * imageWidth;

  const getIndexes = useCallback(() => {
    const prevIndex = currentIndex - 1 < 0 ? imageSource.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % imageSource.length;
    return {
      prevIndex, nextIndex,
    };
  }, [currentIndex]);

  const handlePrev = () => {
    const { prevIndex } = getIndexes();
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const { nextIndex } = getIndexes();
    setCurrentIndex(nextIndex);
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
        <ImageWrapper>
          {
            imageSource.map((image, index) => (
              <Image
                key={index}
                src={image.imgPath}
                alt=""
                left={setLeftPosition({ itemIndex: index })}
              />
            ))
          }
        </ImageWrapper>
        <ControlButtonGroup>
          <KeyboardArrowLeft onClick={handlePrev} />
          <KeyboardArrowRight onClick={handleNext} />
        </ControlButtonGroup>
      </CarouselWrapper>
    );
};

Carousel.propTypes = {};
