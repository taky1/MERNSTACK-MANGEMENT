import React from "react";
import "./App.css";
import Main from "./components/Grid/Main";
// import Items from "./test/Item";

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider, useDrag, useDrop } from "react-dnd";



const App = () => {
  return (
    <div className="App">
 <DndProvider backend={HTML5Backend}>
                 <>
      <Main />
       </>				</DndProvider>

    </div>
  );
};

export default App;
