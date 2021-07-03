import React from "react";
import s from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import CreateTaskContainer from "./components/createTask/CreateTaskContainer.jsx";
import EditTaskContainer from "./components/editTask/EditTaskContainer.jsx";
import ListTaskContainer from "./components/listTask/ListTaskContainer.jsx";
import { Route } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <div className={s.appWrapper}>

        <Navbar />

        <div>
          <Route path="/createTask" render={() => <CreateTaskContainer />} />
          <Route path="/editTask" render={() => <EditTaskContainer />} />
        </div>

        <div>
          <Route path="/listTask" render={() => <ListTaskContainer />} />  
        </div>

      </div>
    );
  }
}

export default App;
