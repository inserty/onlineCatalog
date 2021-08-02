import { Button, Checkbox, CircularProgress, makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFetching } from "../../../core/shared/store/actions/catalog/onlineCatalog.actions";
// import IProducts from "./shared/ProductsAPI";
import productsAPI from "../services/ProductsAPI";

const AddTask: FunctionComponent<any> = () => {
    const dispatch = useDispatch()
    const showForm = useSelector<any, any>(state => state?.ToDoTasks?.showAddForm || false);
    const isFetchingData = useSelector<any, any>(state => state?.ToDoTasks?.isFetching || false);

    const [checked, setChecked] = React.useState(false);
    const [task, setTask] = React.useState("");

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleTaskChange = event => {
        setTask(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // const data:IProducts = {task: task, is_completed: checked}
        dispatch(isFetching())
        // productsAPI.addTask(data).then(({data}) => {
        //     dispatch(addTodoItem(data))
        //     dispatch(showAddForm())
        //     setChecked(false)
        //     setTask("")
        // })
    }

    return (
        showForm ?
            <form className={`flex items-center justify-center w-1/2`} noValidate autoComplete="off" onSubmit={onSubmit}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    disabled={isFetchingData}
                />
                <TextField disabled={isFetchingData} size={"small"} id="task" label="Task" onChange={handleTaskChange} value={task} />
                {isFetchingData && <CircularProgress />}
                <Button disabled={isFetchingData} type="submit" variant="contained">Add task</Button>
            </form>
            : null
    );
}

export default AddTask