import "./App.css";
import { Task } from "./Component/Task";
import { Addtask } from "./Component/Addtask";
import { useState } from "react";
import { ListTask } from "./Component/ListTask";

function App() {

  return (
    <div className="background">
      <br></br> <br></br>
    <div className="box">
      <Addtask />
      <ListTask />
    </div>
    </div>
  );
}

export default App;
