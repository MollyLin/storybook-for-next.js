import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const cursorNotAllowed = css({
  pointerEvents: 'visible',
  cursor: 'not-allowed',
});

const disabledStyle = css({
  '&:disabled': cursorNotAllowed,
});

// 參考寫法: https://stackoverflow.com/a/62518924
const styleLoading = ({ isLoading }) => css`
  ${isLoading &&
  `
    margin-right: 8px;
    color: #fff;
  `}
`;

const StartIcon = styled.span`
  margin-right: 8px;
`;

const EndIcon = styled.span`
  margin-left: 8px;
`;

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
export const muiButton = ({
  variant,
  size,
  label,
  color,
  isDisabled,
  isLoading,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      color={color}
      disabled={isDisabled}
      css={disabledStyle}
      {...props}
    >
      {isLoading && (
      <CircularProgress
        css={styleLoading({ isLoading })}
        size={16}
      />
    )}
      {startIcon && <StartIcon size={16}>{startIcon}</StartIcon>}
      <span>{label}</span>
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </Button>
  )
};

muiButton.propTypes = {
  /** 設置按鈕類型 */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** Sizes */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** 配色 */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  /** 禁用狀態 */
  disabled: PropTypes.bool,
  /** 載入狀態 */
  isLoading: PropTypes.bool,
  /** 設置按鈕文字前方圖示 */
  startIcon: PropTypes.element,
  /** 設置按鈕文字後方圖示 */
  endIcon: PropTypes.element,
}

muiButton.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  isDisabled: false,
  isLoading: false,
  startIcon: null,
  endIcon: null,
};