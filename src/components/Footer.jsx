import React from "react";

let year = new Date().getFullYear()

function Footer() {
    return <footer><p className="">Copyright © {year}</p></footer>
};

export default Footer;