import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import logoYvY from "../../assets/Logo-final-color-212x300.png";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://plan21.org/yvy-agricultura-regenerativa/"
        target="_blank"
      >
        Fundación Plan21
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    console.log(e.target[0].value)
    navigate("/welcome", {state:{name}});
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Box
          sx={{
            height: "50%",
            width: "0%",
          }}
        >
          <Grid item>
            <Box className="registerText">
              Regístrate y comienza a disfrutar de los beneficios de{" "}
              <strong>YvY</strong>
            </Box>
          </Grid>
        </Box>
        <Grid
          style={{ background: "linear-gradient(#CCCCCC, #65CA9B, #65CBCA)" }}
          item
          xs={false}
          sm={false}
          md={6}
        />
        <img
          className="logoYvY"
          component="img"
          height="300,"
          width="212"
          src={logoYvY}
          alt="YvY App."
        />

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          component={Paper}
          elevation={20}
          border={0}
        >
          <Box
            onSubmit={(e) => handleSubmit(e)}
            component="form"
            className="formRegister"
            noValidate
            // border={2}
          >
            <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
              <TextField
                className="inputMargin"
                margin="normal"
                required
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                autoFocus
                sx={{ marginRight: "15px" }}
              />
              <TextField
                margin="normal"
                required
                name="lastName"
                label="Apellido"
                id="lastName"
                autoComplete="lastName"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
              <TextField
                className="inputMargin"
                margin="normal"
                required
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                sx={{ marginRight: "15px" }}
              />
              <TextField
                margin="normal"
                required
                name="country"
                label="País"
                id="country"
                autoComplete="country"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
              <TextField
                className="inputMargin"
                margin="normal"
                required
                id="phone"
                label="Teléfono"
                name="phone"
                autoComplete="phone"
                sx={{ marginRight: "15px" }}
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Contraseña"
                id="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={6}>
              <TextField
                className="inputMargin"
                margin="normal"
                required
                id="confirmPassword"
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                autoComplete="confirmPassword"
                sx={{ marginRight: "15px" }}
              />
            </Grid>
            <Divider />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Mantener la sesión"
            />
            <Divider />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#65CA93",
                "&:hover": { background: "#20b931" },
              }}
            >
              Crear cuenta
            </Button>

            <Grid container>
              <Grid item xs={12} sm={11.5} md={11} lg={11.5} xl={11.5}>
                <Link href="#" variant="body2" sx={{ marginRight: "5%" }}>
                  ¿Olvidaste tu contraseña?
                </Link>
                <Link href="#" variant="body2">
                  Inicia Sesión
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
