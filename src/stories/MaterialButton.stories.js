import { muiButton } from './MaterialButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default {
  title: 'Example/MaterialButton',
  component: muiButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export const Contained = {
  args: {
    contained: true,
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
  }
};

export const StartIcon = {
  args: {
    variant: 'outlined',
    label: '刪除',
    startIcon: <DeleteIcon />,
  }
}

export const EndIcon = {
  args: {
    variant: 'outlined',
    label: '分享',
    endIcon: <SendIcon />,
  }
}