import {
  Typography,
  Stack,
  TextField,
  SxProps,
  Theme,
  Button,
  Box,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
/**
 * Typography
 *  p H1 H2 H3 H4 H5 H6
 */
const stylesInput: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#rgb(70, 130, 180)",
    },
    "&:hover fieldset": {
      borderColor: "#rgb(70, 130, 180)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#rgb(70, 130, 180)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgb(110, 216, 255)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#rgb(110, 216, 255)",
  },
  "& .MuiInputBase-input": {
    color: "rgb(110, 216, 255)",
  },
};

export const Register = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    if (
      formData.password === "" ||
      formData.email === "" ||
      formData.name === "" ||
      formData.lastname === "" ||
      formData.document === "" ||
      formData.confirmPassword === ""
    ) {
      alert("por favor llenar todos los campos");
    } else {
      alert("Registro exitoso");
      navigate("/login");
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    document: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (formData.password !== formData.confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const newData = {
      ...formData,
      [name]: value,
    };setFormData(newData);
    if (
      name === "confirmPassword" &&
      formData.password !== formData.confirmPassword
    ) {
      setError("las contraseñas no coinciden");
    } else {
      setError("");
    }
    
  };

  return (
    <Stack
      minHeight={"100vh"}
      justifyContent="center"
      bgcolor="#fff"
      gap={2}
      p={5}
      //borderRadius="16px"
      component="form"
      onSubmit={handleSubmit}
    >
      <Link component={RouterLink} to="/login">
        Back
      </Link>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        minWidth={200}
        mb={2}
        sx={
          {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            maxWidth: "100px",
            margin: "0 auto",
          } as SxProps<Theme>
        }
      />
      <Stack direction="row" gap={2}>
        <TextField
          sx={stylesInput}
          label="Name"
          name="name"
          required
          value={formData.name}
          autoComplete="off"
          onChange={handleChange}
        />
        <TextField
          sx={stylesInput}
          label="Lastname"
          name="lastname"
          autoComplete="off"
          required
          value={formData.lastname}
          onChange={handleChange}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <TextField
          sx={stylesInput}
          label="Document"
          name="document"
          autoComplete="off"
          required
          value={formData.document}
          onChange={handleChange}
        />
        <TextField
          sx={stylesInput}
          label="Email"
          name="email"
          autoComplete="off"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <TextField
          sx={stylesInput}
          label="Password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          sx={stylesInput}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </Stack>
      {error.length > 0 && <Typography color="error">{error}</Typography>}
      <Button variant="contained" type="submit" onClick={HandleClick}>
        Register
      </Button>
    </Stack>
  );
};
