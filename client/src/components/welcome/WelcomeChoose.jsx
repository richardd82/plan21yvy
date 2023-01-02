import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logoYvY from "../../assets/Logo-final-color-212x300.png";
// import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, useLocation } from "react-router-dom";
import { InputLabel, MenuItem } from "@mui/material";
// import NavigationBack from "../navigation/NavigationBack";

const WelcomeChoose = (e) => {
  const [option, setOption] = useState("");
  const location = useLocation();
//   const navigate = useNavigate();
  const type = location.state;
//   const handleClick = () => navigate(-1, { state: { type } });
  const handleChange = (e) => {
    setOption(e.target.value);
  };

  let cooperativas = [
    {
      name: "coperativa 1",
    },
    {
      name: "coperativa 2",
    },
    {
      name: "coperativa 3",
    },
  ];
  let organizaciones = [
    {
      name: "organización 1",
    },
    {
      name: "organización 2",
    },
    {
      name: "organización 3",
    },
  ];

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
          marginTop: "5%",
        }}
      >
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
          <h2>
            {console.log(type.e.toString())}
            {type.e.toString() === "admin"
              ? "Indicanos a que cooperativa perteneces :"
              : "Indicanos a que organización perteneces :"}
          </h2>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth className="formChoose">
              <InputLabel id={type.e.toString() === "admin" ? "labelCoop" : "labelOrg"}>
                {type.e.toString() === "admin"
                  ? "Elige Cooperativa"
                  : "Elige Organización"}
              </InputLabel>
              <Select
                id={type.e.toString() === "admin" ? "selectCooperative" : "selectOrganization"}
                value={option}
                label="option"
                onChange={(e) => handleChange(e)}
              >
                {type.e.toString() === "admin"
                  ? cooperativas.map((c) => (
                      <MenuItem key={c.name} value={c.name}>
                        {c.name}
                      </MenuItem>
                    ))
                  : organizaciones.map((c) => (
                      <MenuItem key={c.name} value={c.name}>
                        {c.name}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Grid>
      {/* <Link onClick={handleClick}>Volver</Link> */}
    </>
  );
};

export default WelcomeChoose;
