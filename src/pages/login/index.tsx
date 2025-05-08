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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    alert("test");
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
          height: 'auto',
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
      <Button component={RouterLink} to="/dasboard" variant="contained" type="submit">
        Iniciar Sesión
      </Button>
    </Stack>

  );
};
