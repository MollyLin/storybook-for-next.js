import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Ref: https://mui.com/material-ui/react-button/#cursor-not-allowed
const cursorNotAllowed = css({
  pointerEvents: 'visible',
  cursor: 'not-allowed',
});

const enhanceStyleButton = ({ isLoading }) => css`
  min-width: 100px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  ${ isLoading &&
   `align-items: center;`
  }
  &:disabled {
    ${cursorNotAllowed}
  }
`;

const PrefixIcon = styled.span`
  margin-right: 8px;
`;

const SuffixIcon = styled.span`
  margin-left: 8px;
`;

/**
 * Buttons
 */
export const MuiButton = ({
  variant = 'contained',
  size = 'medium',
  label,
  color = 'primary',
  isDisabled = false,
  isLoading = false,
  prefixIcon = null,
  suffixIcon = null,
  ...props
}) => {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      color={color}
      disabled={isDisabled}
      css={enhanceStyleButton({isLoading})}
      {...props}
    >
      {isLoading && (
        <CircularProgress
          sx={{
            mr: 1,
            color: variant === 'contained' ? 'white' : color,
          }}
          size={16}
        />
      )}
      {prefixIcon && <PrefixIcon>{prefixIcon}</PrefixIcon>}
      <span>{label}</span>
      {suffixIcon && <SuffixIcon>{suffixIcon}</SuffixIcon>}
    </Button>
  )
};

MuiButton.propTypes = {
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
  prefixIcon: PropTypes.element,
  /** 設置按鈕文字後方圖示 */
  suffixIcon: PropTypes.element,
}