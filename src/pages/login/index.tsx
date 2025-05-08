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

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "andres@test.co",
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
      minHeight={"100vh"}
      bgcolor="#fff"
      gap={2}
      p={5}
      //borderRadius="16px"
      >
    <Stack
      display="flex"
      
      minHeight={"100vh"}
      bgcolor="#fff"
      gap={2}
      p={5}
      //borderRadius="16px"
      component="form"
      onSubmit={handleSubmit}
    >
      <Box component="img" src={logo} alt="Logo" sx={
        {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          maxWidth: "100px",
          margin: "0 auto",
          
        } as SxProps<Theme>
      }/>
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
        Sing In
      </Button>
    </Stack>
    </Stack>

  );
};
