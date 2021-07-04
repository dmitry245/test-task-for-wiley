import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return{
        tasks: state.taskPage.tasksData
    }
};

const mapDispatchToProps = {};

const WithCreateTasksRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            const Tasks = this.props.tasks.length;

            if(Tasks === 0) return <Redirect to={"/createTask"} />
            
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);
};

export default WithCreateTasksRedirect;