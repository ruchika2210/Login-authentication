import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <Link className="nav-link" to={"/sign-in"}>
        <button>Logout</button>
      </Link>
    </div>
  );
};

export default Logout;
