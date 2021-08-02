import { Button, Checkbox, CircularProgress, makeStyles, TextField } from "@material-ui/core";
import { AnyARecord } from "node:dns";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFetching } from "../../../core/shared/store/actions/catalog/onlineCatalog.actions";

interface IEditTask {
    task:any,
    setTaskId: (taskId: string) => any
}

const EditTask: FunctionComponent<IEditTask> = (props) => {
    const {task,setTaskId} = props
    const dispatch = useDispatch()
    const showForm = useSelector<any, any>(state => state?.ToDoTasks?.showAddForm || false);
    const isFetchingData = useSelector<any, any>(state => state?.ToDoTasks?.isFetching || false);

    const [checked, setChecked] = React.useState(task.is_completed);
    const [taskName, setTaskName] = React.useState(task.task);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleTaskChange = event => {
        setTaskName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // const data:IToDoData = {id: task.id, task: taskName, is_completed: checked}
        dispatch(isFetching())
        // toDoApi.editTask(data).then(({data}) => {
        //     dispatch(editTodoItem(data))
        //     setChecked(false)
        //     setTaskName("")
        // })
    }

    return (
        <form className={`flex items-center justify-end w-full`} noValidate autoComplete="off" onSubmit={onSubmit}>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                disabled={isFetchingData}
            />
            <TextField disabled={isFetchingData} size={"small"} id="task" label="Task description" onChange={handleTaskChange} value={taskName} />
            {isFetchingData && <CircularProgress />}
            <Button disabled={isFetchingData} type="submit" variant="contained">Edit task</Button>
        </form>
    );
}

export default EditTask