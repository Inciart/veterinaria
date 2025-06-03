import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";
import EventIcon from "@mui/icons-material/Event";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const DashboardUser = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const HandleBack = () => {
    navigate("/citas");
  };
  const GotoRegister = () => {
    navigate("/registerpet");
  };
  // Función para alternar la apertura/cierre de la barra lateral en dispositivos móviles
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Contendo de la barra lateral o sidebar
  const drawer = (
    <div>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#1976d2",
          color: "white",
        }}
      >
        Veterinaria
      </Toolbar>
      <Divider />
      <List>
        {/* Opción: Registro de Mascotas */}
        <ListItem disablePadding>
          <ListItemButton onClick={GotoRegister}>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Registro de Mascotas" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton onClick={HandleBack}>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Apartado de Citas" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Barra superior (AppBar) */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {/* Botón para abrir/cerrar la barra lateral en dispositivos móviles */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título de la barra superior */}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard Usuario
          </Typography>

          {/* Enlace para volver al login */}
          <Button
            component={RouterLink}
            to="/login"
            sx={{ textDecoration: "none", color: "white" }}
          >
            Volver al Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Barra lateral (sidebar) */}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="menu de usuario"
      >
        {/* Barra lateral para dispositivos móviles */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejora el rendimiento en dispositivos móviles (Use IA aqui)
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Barra lateral para dispositivos de escritorio */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Bienvenido al Dashboard de Usuario
        </Typography>
        {/* Botón: Registro de Mascotas */}

        <Button
          onClick={GotoRegister}
          variant="contained"
          color="primary"
          startIcon={<PetsIcon />}
          sx={{ marginBottom: 2 }}
          fullWidth
        >
          Registro de Mascotas
        </Button>
        {/* Botón: Apartado de Citas */}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<EventIcon />}
          fullWidth
          onClick={HandleBack}
        >
          Apartado de Citas
        </Button>
      </Box>
    </Box>
  );
};
