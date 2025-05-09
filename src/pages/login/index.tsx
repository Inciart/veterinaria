import {
  // Typography,
  Stack,
  TextField,
  SxProps,
  Theme,
  Button,
  Box,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import Swal from "sweetalert2";
/**
 * Typography
 *  p H1 H2 H3 H4 H5 H6
 */
const stylesInput: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#rgb(80, 190, 168)",
    },
    "&:hover fieldset": {
      borderColor: "#rgb(80, 190, 168))",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#rgb(80, 190, 168)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgb(80, 190, 168)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#rgb(80, 190, 168)",
  },
  "& .MuiInputBase-input": {
    color: "rgb(80, 190, 168))",
  },
};

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Aqui validamos el inicio de sesión, si el usuario no ha ingresado su email o password, se le muestra un mensaje de alerta.
  // Si el usuario ha ingresado su email y password, se le redirige a la página de dashboard.
  // mas adelante se ralcionaran con la base de datos para validar el inicio de sesión correspondientemente.

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    if (formData.email === "" || formData.password === "") {
      Swal.fire({
        title: "Error de inicio de sesión",
        text: "Por favor, ingrese su email y contraseña.",
        icon: "error",
      });
      return;
    }
    if (formData.password.length < 8) {
      Swal.fire({
        title: "Error de inicio de sesión",
        text: "La contraseña debe tener al menos 8 caracteres.",
        icon: "error",
      });
      return;
    } else {
      Swal.fire({
        title: "Inicio de sesión exitoso",
        icon: "success",
        draggable: true,
      }).then(() => {
        window.location.href = "/dasboard";
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      gap={2}
      p={5}
      alignItems="center"
    >
      <Box
        component="img"
        src={logo}
        alt="Descripción de la imagen"
        sx={{
          width: 60,
          height: "auto",
          borderRadius: 2,
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        sx={stylesInput}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        sx={stylesInput}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Link component={RouterLink} to="/register">
        Registro
      </Link>
      <Button variant="contained" type="submit">
        Iniciar Sesión
      </Button>
    </Stack>
  );
};
