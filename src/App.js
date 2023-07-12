import './App.css';
import { useState } from 'react';
import {Button, Container, FormGroup, List, ListItemButton, ListItemText, TextField, Typography, ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * store a task
 */
class Task {
  constructor(name) {
    this.name = name;
  }
}


function App() {
  const [tasks, setTasks] = useState(Array(0));
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    if(newTask !== "") {
      setTasks(tasks.concat([new Task(newTask)])); 
      setNewTask("")
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container id="app">      
        <Typography variant="h1">to-do list</Typography>

        <FormGroup id="entry">
          <TextField autoComplete={false} label="Task" value={newTask} onChange={(event) => setNewTask(event.target.value)}/> 
          <Button type="submit" variant="contained" onClick={handleClick}>
            Add
          </Button>
        </FormGroup>

        <Typography variant="body1">Tasks remaining (click to remove):</Typography>

        <List>
          {tasks.map(task => 
            <ListItemButton onClick={() => setTasks(tasks.filter(item => !Object.is(item, task)))}>
              <ListItemText class="task" primary={task.name} />
            </ListItemButton>
          )}
        </List>
      </Container>
    </ThemeProvider>
  );
}

export default App;
