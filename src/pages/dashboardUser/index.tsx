
import { Box, Button, Stack, Typography } from "@mui/material";

export const Dashboard = () => {
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
          <Button variant="contained" color="primary" fullWidth>
            Crear
          </Button>
          <Button variant="contained" color="secondary" fullWidth>
            Actualizar
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

      {/* Sección: Atención de Mascotas */}
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
          Atención de Mascotas
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Atender Mascota
        </Button>
      </Box>

      {/* Sección: Agendar Citas */}
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
          Agendar Citas
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Agendar
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;