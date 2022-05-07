import React from "react";
import ReactDOM from "react-dom/client";

let year = new Date().getFullYear()

function Footer() {
    return <footer><p className="">Copyright © {year}</p></footer>
};

export default Footer;