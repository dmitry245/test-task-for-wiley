import React from "react";
import { connect } from "react-redux";
import { sendTaskActionCreater, setTaskIsDoneActionCreater, setTaskRemoveActionCreater } from "../../redux/reducers/CreateTaskReducer";
import CreateTask from "./CreateTask";

class CreateTaskContainer extends React.Component {
    render(){
        return <CreateTask {...this.props} />
    }
};

const mapStateToProps = (state) => {
    return{
        tasks: state.taskPage.tasksData
    }
};

const mapDispatchToProps = {
    sendTask: sendTaskActionCreater,
    setTaskIsDoneOrActive: setTaskIsDoneActionCreater,
    setTaskRemove: setTaskRemoveActionCreater
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer);