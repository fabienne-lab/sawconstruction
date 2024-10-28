import { Typography, Box, useTheme } from "@mui/material";
//import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        //color="white"
        //background-color="#007bff"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" 
        color = "#007fe8"
        fontWeight="bold"
        >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;