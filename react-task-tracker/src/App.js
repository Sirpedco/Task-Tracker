// import React from "react";
import { useState, useEffect } from "react"
import Header from "./Components/Header"  
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"


const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ ])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => 
  {
    const res = await fetch ('http://localhost:3000/tasks')
    const data = await res.json()
    
    return data
  }



  //Add Task
  const addTask =(task)=>{
     const id=Math.floor(Math.random() * 10000) + 1 
     const newTask = {id, ...task}
     setTasks([ ...tasks, newTask])
  }


  //Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id)=>{
    setTasks(tasks.map((task) => task.id === id ?{ ...task, reminder: !task.reminder}: task ))
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}></Header>
      {showAddTask ? /*&&*/ <AddTask onAdd={addTask}></AddTask>: " "}
      {tasks.length>0 ? <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
 :"No Tasks To Show"}
      
    </div>
  )
} 

export default App

// class App extends React.Component {
//   render () {
//     return <h1>Hello from a class</h1>
//   }
// 