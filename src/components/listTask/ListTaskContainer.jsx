import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import WithCreateTasksRedirect from "../../hoc/WithCreateTasksRedirect";
import { sendTaskActionCreater, setTaskIsDoneActionCreater, setTaskRemoveActionCreater } from "../../redux/reducers/CreateTaskReducer";
import ListTask from "./ListTask";

class ListTaskContainer extends React.Component {
    render(){
        return(
            <>
                <ListTask {...this.props} />
            </>
        )
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

export default compose(connect(mapStateToProps, mapDispatchToProps), WithCreateTasksRedirect)(ListTaskContainer);