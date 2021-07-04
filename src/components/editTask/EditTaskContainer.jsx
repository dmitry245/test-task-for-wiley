import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import WithCreateTasksRedirect from "../../hoc/WithCreateTasksRedirect";
import { setTaskRemoveActionCreater, setTaskUpdateActionCreater } from "../../redux/reducers/CreateTaskReducer";
import EditTask from "./EditTask";

class EditTaskContainer extends React.Component {
    render(){
        return <EditTask {...this.props} />
    }
};

const mapStateToProps = (state) => {
    return{
        tasks: state.taskPage.tasksData
    }
};

const mapDispatchToProps = {
    setTaskRemove: setTaskRemoveActionCreater,
    setTaskUpdate: setTaskUpdateActionCreater
};

export default compose(connect(mapStateToProps, mapDispatchToProps), WithCreateTasksRedirect)(EditTaskContainer);