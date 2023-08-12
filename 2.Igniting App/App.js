

// import React from "react";
import React from "/node_modules/react";

import ReactDOM  from "react-dom/client";

const h1 = React.createElement(
    "h1",
    { id: "header", className: "headerClass" },
    ["Hello Duniya!!"]
  );
  const h2 = React.createElement(
    "h2",
    { id: "header2", class: "headerClass" },
    ["Child 2!!"]
  );
  const childchildDiv = React.createElement(
    "div",
    { id: "Child Child Div" },
    React.createElement("h3", { id: "header3", class: "headerClass" }, [
      "header 3!!",
    ])
  );
  const childDiv = React.createElement("div", { id: "childDiv" }, [
    h2,
    childchildDiv,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render([h1, childDiv]);