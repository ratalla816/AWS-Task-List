import React, { useState } from 'react';
import { Dialog, Button, DialogTitle, TextField } from '@mui/material';
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { API_URL } from "../utils";

export const UpdateTaskForm = ({ fetchTasks, isDialogOpen, setIsDialogOpen, task }) => {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTaskName = async () => {

    try {
      await axios.put(API_URL, {
        id,
        name: taskName, 
        completed, 
      });

      await fetchTasks(); // refresh fetch data //

      setTaskName("");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open = { isDialogOpen }>
    <DialogTitle>Edit Task</DialogTitle>
    <div className="dialog">
    <TextField
    size="small"
    label="task"
    variant="outlined"
    onChange = {(e) => setTaskName(e.target.value)} />
    <Button variant = "contained" onClick = {async () => { await handleUpdateTaskName(); setIsDialogOpen(false) }}>
       <CheckIcon />
     </Button>
    </div>
   </Dialog>
   );
  };