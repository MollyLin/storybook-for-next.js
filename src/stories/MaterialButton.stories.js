import { MuiButton } from './MaterialButton';
import { action } from '@storybook/addon-actions';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default {
  title: 'Material/Button',
  component: MuiButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked button event' },
  },
};

export const Contained = {
  args: {
    contained: 'contained',
    label: '點我購買',
  },
};

export const Disabled = {
  args: {
    label: '貨到通知',
    isDisabled: true,
  },
};

export const Loading = {
  args: {
    label: '載入中...',
    isLoading: true,
  },
};

export const PrefixIcon = {
  args: {
    variant: 'outlined',
    label: '刪除',
    prefixIcon: <DeleteIcon />,
  },
};

export const SuffixIcon = {
  args: {
    variant: 'outlined',
    label: '分享',
    suffixIcon: <SendIcon />,
  },
};

export const CustomizeButton = {
  args: {
    label: '自訂按鈕',
    endIcon: <SendIcon />,
    style: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 50,
    },
  },
};
