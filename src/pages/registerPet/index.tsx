
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterPet = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    Swal.fire({
      title: "Perfecto!",
      text: "Mascota registrada correctamente.",
      icon: "success",
    });
  };
  const handleCancel = () => {
    navigate("/dashboard");
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
        Registro de Mascotas
      </Typography>

      {/* Formulario */}
      <Stack spacing={3} component="form">
        {/* Campo: Nombre de la mascota */}
        <TextField
          label="Nombre de la Mascota"
          variant="outlined"
          fullWidth
          required
        />

        <TextField
          label="Especie (Perro, Gato, etc.)"
          variant="outlined"
          fullWidth
          required
        />

        <TextField label="Raza" variant="outlined" fullWidth />

        <TextField
          label="Edad (en años)"
          variant="outlined"
          type="number"
          fullWidth
          required
        />

        <TextField
          label="Nombre del Propietario"
          variant="outlined"
          fullWidth
          required
        />

        <TextField
          label="Teléfono de Contacto"
          variant="outlined"
          type="tel"
          fullWidth
          required
        />

        <Stack direction="row" spacing={2} justifyContent="center">
          {/* Botón: Registrar */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Registrar
          </Button>

          <Button
            onSubmit={handleSubmit}
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