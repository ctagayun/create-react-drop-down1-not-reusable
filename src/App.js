import * as React from "react";
import "./App.css";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  /* The dropdown's menu should float above the other HTML elements. 
  What's missing are event handlers for each button in the dropdown's menu. 
  For each event handler, you can perform something specific like opening a 
  dialog for example, while the handler also has to close the dropdown menu eventually:*/
  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown">
      {/* When clicking the dropdown button, you can see the list of buttons showing up. 
      However, the menu pushes the "Is Open"/"Is Closed" text further to the bottom. 
      In contrast, a real dropdown menu should float above the other HTML elements.

      The dropdown needs to be positioned absolutely to its container so we need the CSS
      shown in App.css
       */}
      <button onClick={handleOpen}>Dropdown</button>

       /
      {open ? (
        //if useState called "open" is true do this.
        //Since a dropdown features a menu that appears when the dropdown is clicked 
        //and disappears when closed, we will render this dropdown menu as a 
        //list of buttons.
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleMenuOne}>Menu 1</button>
          </li>
          <li className="menu-item">
          <button onClick={handleMenuTwo}>Menu 2</button>
          </li>
        </ul>
      ) : null}

      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};

export default App;
