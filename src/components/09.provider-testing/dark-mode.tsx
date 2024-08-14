import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const DarkMode = () => {
  const theme = useTheme();

  return <Typography variant="h3">{theme.palette.mode} mode</Typography>;
};
