import React from "react";
import ReactDOM from "react-dom/client";

// Create React Element ---> JavaScript Object -->Javascript varible holds

// Modern way to create element JSX

// JSX is conventions that more likely html and you can even in this html syntax you can run javascirpt as well

// JSX   ---> transpile by babel --->  Create React Element ---> JavaScript Object -->Javascript varible holds

// Note: JSX is not understandble by the Javascript engine (browser)
// It is babel job that handles the JSX to React Element convertion means JS Object

// JSX Elements :  JavaScript varible that holds contains right side html kind of syntax --> react element --> javascript object
const firstJSX = <p>First JSX Element !!</p>;

const secondJSX = (
  <p>
    Second JSX with {1+1+1}
  </p>
);

console.log("firstJSX",firstJSX);
console.log("secondJSX",secondJSX);

// JSX Componet (function component) --> JS function that return JSX that called Function Component

const FirstComponent = () => {
    return (
        <div>
            <h1>Learn about the Function Compoent</h1>
            {firstJSX}
            {secondJSX}
        </div>
    );
}

const SecondComponent = () => {
    return (
        <div>
            {FirstComponent}
            <FirstComponent/>   // traditional way
            <FirstComponent></FirstComponent>
            {FirstComponent()}
            {<FirstComponent/>}
            { <FirstComponent></FirstComponent>}
        </div>
    );
};

// Note that in JSX if you write in the `{}` whatever in the `{}` it will executes as it is javascript
// even console.log works also you can check that also

// Function Object
console.log("First Component:",FirstComponent);
// Function Executes --> return JSX ---> means return React Element --> means JS Object
console.log("FirstComponent():",FirstComponent());
//Syntax of the Rendering the Component --> Function Executes --> return JSX ---> means return React Element --> means JS Object
console.log("<FirstComponent/>:",<FirstComponent/>);

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondComponent/>);
