import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logoYvY from "../../assets/Logo-final-color-212x300.png";
import Button from "@mui/material/Button";
import "./welcome.css";

const Welcome = () => {
  let user = "{user}";

  return (
    <>
      <Grid container spacing={1}>
        <img
          className="logoYvYWelcome"
          component="img"
          height="300,"
          width="212"
          src={logoYvY}
          alt="YvY App."
        />
      </Grid>

      <Grid
        className="textGrid"
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
          marginTop: "15%"
        }}
      >
        <Box>
          <h1>¡Hola {user}!</h1>
        </Box>
        <Box
          className="rolText"
          border={2}
          sx={{
            textAlign: "center",
            width: "550px",
            border: "2px",
            marginLeft: "34%",
            marginTop: "5%",
          }}
        >
          <h2>Para una experiencia más personalizada, indicanos tu rol:</h2>
        </Box>

        <Button
          className="rolButton"
          sx={{
            mt: 10,
            mb: 2,
            color: "white",
            border: "none",
            backgroundColor: "#65CA93",
            "&:hover": { background: "#20b931" },
            marginRight: "20px",
            textTransform: "none",
            paddingTop: "0px",
            paddingBottom: "0px",
            width: "15%",
          }}
        >
          <h2>Soy Administrador/a</h2>
        </Button>
        <Button
          className="rolButton"
          sx={{
            mt: 10,
            mb: 2,
            color: "white",
            border: "none",
            backgroundColor: "#65CA93",
            "&:hover": { background: "#20b931" },
            textTransform: "none",
            paddingTop: "0px",
            paddingBottom: "0px",
            width: "15%",
          }}
        >
          <h2>Soy productor/a</h2>
        </Button>
      </Grid>
    </>
  );
};

export default Welcome;
