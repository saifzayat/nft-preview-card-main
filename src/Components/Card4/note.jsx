import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./FFCard.module.css";
import yas from "../../../assets/icon-check.svg";

export default function FFCard() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>TODO</h1>
        </div>

        <div className={styles.todoAdd}>
          <input
            type="text"
            placeholder="Create a new todo..."
            className={styles.input}
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
        </div>

        {tasks.length > 0 && (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <ul
                  className={styles.taskList}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={styles.taskItem}
                        >
                          <span className={styles.checkbox}>
                            {task.completed && (
                              <span className={styles.checkMark}>
                                <img src={yas} alt="Completed" />
                              </span>
                            )}
                          </span>
                          <div className={styles.content}>
                            <span>{task.text}</span>
                            <span
                              className={styles.delete}
                              onClick={() => deleteTask(task.id)}
                            >
                              ✖
                            </span>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  );
}
