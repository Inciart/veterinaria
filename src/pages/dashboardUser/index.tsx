import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleRout = () => {
    navigate("/citasvet"); // Regresa al dashboard del usuario
  };
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9fafb",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        minHeight: "80vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "30px",
          fontWeight: "700",
        }}
      >
        Dashboard Veterinario
      </Typography>

      {/* Sección: Citas */}
      <Box
        sx={{
          marginBottom: "30px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: "15px",
            color: "#34495e",
            fontWeight: "600",
          }}
        >
          Citas
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRout}
          >
            Crear
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Consultar
          </Button>
        </Stack>
      </Box>

      {/* Sección: Historial */}
      <Box
        sx={{
          marginBottom: "30px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: "15px",
            color: "#34495e",
            fontWeight: "600",
          }}
        >
          Historial
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Ver Historial
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
