import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cursorNotAllowed = css({
  pointerEvents: 'visible',
  cursor: 'not-allowed',
});

const disabledStyle = css({
  '&:disabled': cursorNotAllowed,
});

const styleLoading = ({ isLoading }) => css`
  ${isLoading &&
  `
    margin-right: 8px;
    color: #fff;
  `}
`;

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
export const muiButton = ({
  variant,
  label,
  color,
  isDisabled,
  isLoading,
  ...props
}) => {
  return (
    <Button
      type="button"
      variant={variant}
      color={color}
      disabled={isDisabled}
      css={disabledStyle}
      {...props}
    >
      {isLoading && (
      <CircularProgress
        css={styleLoading({ isLoading })}
        size={24}
      />
    )}
      <span>{label}</span>
    </Button>
  )
};

muiButton.propTypes = {
  /** 設置按鈕類型 */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** 配色 */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  /** 禁用狀態 */
  disabled: PropTypes.bool,
  /** 載入狀態 */
  isLoading: PropTypes.bool,
}

muiButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  isDisabled: false,
  isLoading: false,
};