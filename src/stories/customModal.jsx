import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const hideMask = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const showMask = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 遮罩
const Mask = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
`;