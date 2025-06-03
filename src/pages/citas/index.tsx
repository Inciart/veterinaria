
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Citas = () => {
  const navigate = useNavigate(); 

  const handleCancel = () => {
    navigate("/dashboard"); 
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    swal.fire({
      title: "Excelente!",
      text: "Su cita ha sido agendada exitosamente.",
      icon: "success",
      confirmButtonText: "aceptar",
    });
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

      
      <Stack spacing={3} component="form">
        
        <TextField
          label="Fecha de la Cita"
          variant="outlined"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          required
        />

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
          {/* Botón: Agendar Cita */}
          <Button variant="contained" color="primary" fullWidth
          onClick={handleSubmit}>
            Agendar Cita
          </Button>

          {/* Botón: Cancelar */}
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