import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

const Theme = createTheme({
    palette: {
      primary: {
        mode: "dark",
        main: amber[500]
      },
      secondary: {
        main: grey[50]
      },
    },
  });

  export default Theme;