
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CreateAppointment = () => {
  const navigate = useNavigate(); // Hook para la navegación programática

  const handleCancel = () => {
    navigate("/dashboardUser"); // Regresa al dashboard del usuario
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f9fafb",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "20px",
          fontWeight: "700",
        }}
      >
        Gestión de Citas
      </Typography>

      {/* Formulario */}
      <Stack spacing={3} component="form">
        {/* Campo: Fecha de la cita */}
        <TextField
          label="Fecha de la Cita"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
        />

        {/* Campo: Hora de la cita */}
        <TextField
          label="Hora de la Cita"
          variant="outlined"
          type="time"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
        />

        {/* Campo: Nombre de la mascota */}
        <TextField
          label="Nombre de la Mascota"
          variant="outlined"
          fullWidth
          required
        />

        {/* Campo: Motivo de la cita */}
        <TextField
          label="Motivo de la Cita"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />

        {/* Botones */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* Botón: Registrar Cita */}
          <Button variant="contained" color="primary" fullWidth>
            Registrar Cita
          </Button>

          {/* Botón: Actualizar Cita */}
          <Button variant="contained" color="secondary" fullWidth>
            Actualizar Cita
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};