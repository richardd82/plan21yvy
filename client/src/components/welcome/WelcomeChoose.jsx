import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logoYvY from "../../assets/Logo-final-color-212x300.png";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InputLabel, MenuItem } from "@mui/material";
// import NavigationBack from "../navigation/NavigationBack";

const WelcomeChoose = () => {
  const [option, setOption] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state;
  //   const handleClick = () => navigate(-1, { state: { type } });
  console.log(option);
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault(); e.target.value) data.get({data: data.get("option")})
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const optionChoosed = data.get('option');
    console.log(optionChoosed, "Opción elegida");
    navigate("/welcome3", {state:{optionChoosed, type}});
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
          {type.e === "admin"
            ? "Indicanos a que cooperativa perteneces:"
            : "Indicanos a que organización perteneces:"}
          </h2>
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              fullWidth
              className="formChoose"
              component="form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <InputLabel id={type.e === "admin" ? "labelCoop" : "labelOrg"}>
                {type.e === "admin"
                  ? "Elige Cooperativa"
                  : "Elige Organización"}
              </InputLabel>
              <Select
                id={
                  type.e === "admin"
                    ? "selectCooperative"
                    : "selectOrganization"
                }
                name="option"
                value={option}
                label="option"
                onChange={(e) => handleChange(e)}
              >
                {type.e === "admin"
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
              <Button
                type="submit"
                className="btnChoose"
                style={{
                  backgroundColor: "#65CA93",
                  marginLeft: "101%",
                  marginTop: "-10%",
                  border: "none",
                  borderRadius: "50%",
                  padding: "15px",
                  transform: "scale(0.7)",
                }}
              >
                ✔️
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Grid>
      {/* <Link onClick={handleClick}>Volver</Link> */}
    </>
  );
};

export default WelcomeChoose;
