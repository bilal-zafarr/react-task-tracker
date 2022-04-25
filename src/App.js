import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "Task 2",
      day: "Tuesday",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = ({ text, day, reminder }) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000) + 1,
      text,
      day,
      reminder,
    };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No Tasks To Show</p>
      )}
    </div>
  );
}

export default App;
