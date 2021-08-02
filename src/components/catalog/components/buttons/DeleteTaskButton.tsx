import React, { FunctionComponent } from "react";

import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

interface IDeleteTaskButton {
    task:any
}

const DeleteTaskButton: FunctionComponent<IDeleteTaskButton> = (props) => {
    const dispatch = useDispatch();
    const {task} = props;

    const onClick =  () => {
        // dispatch(isFetching())
        // toDoApi.removeTask(task).then(() => dispatch(removeTodoItem(task)))
    }

    return (
        <div>
            <IconButton onClick={onClick} aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
    );

}

export default DeleteTaskButton