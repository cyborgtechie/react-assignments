import React from "react";

function Footer(props) {
  return (
    <div>
      <footer>
        this is the footer for my {props.title} {props.mario}
      </footer>
      ;<div>{props.children}</div>
    </div>
  );
}

export default Footer;
