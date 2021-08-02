import React, { FunctionComponent } from "react";

import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";

interface IEditTaskButton {
    setTaskId: (taskId: string) => any,
    task: any
}

const EditTaskButton: FunctionComponent<IEditTaskButton> = (props) => {
    const dispatch = useDispatch();
    const {setTaskId, task} = props;

    const onClick =  () => {
        setTaskId(task.id)
    }

    return (
        <div>
            <IconButton onClick={onClick} aria-label="edit" size="small">
                <EditIcon fontSize="inherit" />
            </IconButton>
        </div>
    );

}

export default EditTaskButton