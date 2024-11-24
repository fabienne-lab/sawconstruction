import { useState } from "react";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [menuOpen, setMenuOpen] = useState(false); // État pour ouvrir/fermer le menu

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Inverse l'état du menu
  };

  const handleLogout = () => {
    // Ajoutez la logique pour déconnecter l'utilisateur
    alert("Déconnexion");
  };

  const handleManageAccount = () => {
    // Ajoutez la logique pour rediriger vers la gestion du compte
    alert("Gérer le compte");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* LOGO */}
      
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* Profile Icon and Menu */}
        <IconButton onClick={handleMenuToggle}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

      {/* Profile Menu */}
      {menuOpen && (
        <Box
          sx={{
            background: colors.primary[400],
            width: "250px",
            position: "absolute",
            top: "60px", // Ajuste la position par rapport à l'icône
            right: "10px",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
        <Box display="flex" flexDirection="column" alignItems="center">
            
       
            <img
              alt="profile-user"
              width="70px"
              height="70px"
              src={require("./../../../assets/user.png")}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
            <Typography variant="h6" color={colors.grey[100]} sx={{ mt: "10px" }}>
              Landry SAW.
            </Typography>
            <Typography variant="body2" color={colors.grey[300]}>
              RESPONSABLE OUVRAGES
            </Typography>
            <Typography variant="body2" color={colors.grey[300]}>
              landry.saw@sawcorps.com
            </Typography>
          </Box>

          {/* Menu options */}
          <Box sx={{ mt: "20px", display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant="body2"
        color={colors.grey[100]}
        sx={{ cursor: "pointer", mb: "10px" }}
        onClick={handleManageAccount}
      >
        Gérer le compte
      </Typography>

      <Typography
        variant="body2"
        color={colors.redAccent[500]}
        sx={{ cursor: "pointer", mb: "10px" }}
        onClick={handleLogout}
      >
        Se déconnecter
      </Typography>
    </Box>
        </Box>
      )}
    </Box>
  );
};

export default Topbar;
