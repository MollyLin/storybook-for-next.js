import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';



const disabledStyle = styled(Button)`
  &:disabled {
    pointer-events: visible;
    cursor: not-allowed;
  }
`;

/**
 * `Button` 元件代表一個可點擊的按鈕，在使用者點擊之後會觸發相對應的業務邏輯。
 */
export const muiButton = ({
  variant,
  label,
  color,
  isDisabled,
  ...props
}) => {
  const isDisabledStyle = isDisabled ? disabledStyle : null;
  return (
    <Button
      type="button"
      variant={variant}
      color={color}
      disabled={isDisabled}
      css={css(`
        &:disabled {
          pointer-events: visible;
          cursor: not-allowed;
        }
        `)}
      {...props}
    >
      {label}
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
}

muiButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  isDisabled: false,
};