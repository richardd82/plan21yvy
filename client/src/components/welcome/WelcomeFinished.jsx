import React from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logoYvY from "../../assets/Logo-final-color-212x300.png";
// import Button from "@mui/material/Button";
import greetnTick from "../../assets/greenTick.png";

const WelcomeFinished = () => {
  const location = useLocation();
  const option = location.state;
  const name = option.type.nameRegistered.name;
  console.log(option.type.nameRegistered.name, "Si pasé!!!!");
  return (
    <>
      <Grid container spacing={1}>
        <Link to="/">
          <img
            className="logoYvYWelcome"
            component="img"
            height="300,"
            width="212"
            src={logoYvY}
            alt="YvY App."
          />
        </Link>
      </Grid>

      <Grid
        className="textGridThanks"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        border={0}
        justify="center"
        alignItems="center"
        alignContent="center"
        sx={{
          width: "100%",
          marginTop: "5%",
        }}
      >
        <Box
          className="thanksText"
          border={2}
          sx={{
            textAlign: "center",
            width: "22%",
            border: "2px",
            marginLeft: "38%",
            marginTop: "5%",
          }}
        >
          <h1>¡Listo {name}!</h1>
          <br />
          <h3>
            Se ha registrado correctamente. Pronto recibirá a la casilla de mail
            con novedades para la validación de su cuenta
          </h3>
          <img src={greetnTick} alt="Register Ok" height="100," width="112" />
          <h3>Si usted no ha recibido el mail de confirmación, ingrese al siguiente <Link>link</Link> </h3>
        </Box>
      </Grid>
    </>
  );
};

export default WelcomeFinished;
