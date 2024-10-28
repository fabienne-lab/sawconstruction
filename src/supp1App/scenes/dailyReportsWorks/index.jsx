import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTask } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";

const DailyReportsWorks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedRow, setSelectedRow] = useState(null); // État pour la ligne sélectionnée
  const columns = [
    { field: "id", headerName: "ID_Tache" },
    {
      field: "Date",
      headerName: "Date",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "N_du_Prix",
      headerName: "N du Prix",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "Désignation_de_la_tache",
      headerName: "Désignation_de_la_tache",
      flex: 2,
    },
    {
      field: "Quantité",
      headerName: "Quantité",
      flex: 1,
    },
    {
      field: "PK_Debut",
      headerName: "PK_Debut",
      flex: 1,
    },
    {
      field: "PK_Fin",
      headerName: "PK_Fin",
      flex: 1,
    },
  ];

  const handleRowClick = (params) => {
    setSelectedRow(params.row);// Lorsque tu cliques sur une ligne, elle est définie comme la ligne sélectionnée
  }

  return (
    <Box m="20px">
      <Header title="RAPPORT DES TRAVAUX" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
         {/* Tableau avec gestion du clic sur les lignes */}
         <Box flex={selectedRow ? 0.7 : 1} transition="flex 0.3s ease" style={{height: "500px"}}>
          <DataGrid
            checkboxSelection
            rows={mockDataTask}
            columns={columns}
            onRowClick={handleRowClick} // Gérer le clic sur la ligne
          />
        </Box>

        {/* Détails de la ligne sélectionnée */}
        {selectedRow && (
          <Box>
            <Typography variant="h4" color="textPrimary"
              backgroundColor={colors.primary[700]}
              padding="10px"
              borderRadius="10px"
              /*width="700px"*/
              fontWeight="bold"
            >
              Détails de la tâche sélectionnée
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
            >
              <Box
            flex={0.8}
            p="20px"
            bgcolor={colors.primary[500]}
            backgroundColor={colors.primary[400]}
            transition="flex 0.3s ease"
          >
            <Typography variant="h4" color="textPrimary"
              backgroundColor={colors.primary[500]}
              padding="10px"
              borderRadius="10px"
              width="400px"
              fontWeight="bold"
            >
              Tâche
            </Typography>
            <Typography>ID:<strong> {selectedRow.id}</strong></Typography>
            <Typography>Désignation: {selectedRow.Désignation_de_la_tache}</Typography>
            <Typography>Quantité: {selectedRow.Quantité}</Typography>
            <Typography>PK Début: {selectedRow.PK_Debut}</Typography>
            <Typography>PK Fin: {selectedRow.PK_Fin}</Typography>
          </Box>
            <Box
            flex={0.8}
            p="20px"
            bgcolor={colors.primary[500]}
            backgroundColor={colors.primary[400]}
            transition="flex 0.3s ease"
          >
            <Typography variant="h4" color="textPrimary"
              backgroundColor={colors.primary[500]}
              padding="10px"
              borderRadius="10px"
              width="400px"
              fontWeight="bold"
            >
              Ressources attachées
            </Typography>
            <Typography>ID:<strong> {selectedRow.id}</strong></Typography>
            <Typography>Désignation: {selectedRow.Désignation_de_la_tache}</Typography>
            <Typography>Quantité: {selectedRow.Quantité}</Typography>
            <Typography>PK Début: {selectedRow.PK_Debut}</Typography>
            <Typography>PK Fin: {selectedRow.PK_Fin}</Typography>
          </Box>
            </Box>
            
          </Box>
          
        )}

        
      </Box>
    </Box>
  );
};

export default DailyReportsWorks;
