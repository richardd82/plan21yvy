import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBack = (e) => {
  const navigate = useNavigate();
  const navigateBack = () => {
        navigate(-1, { state: { e } })
  };

  return (
    <div>
        <Link onClick={navigateBack}>Volver</Link>
    </div>
  );
};

export default NavigationBack;
