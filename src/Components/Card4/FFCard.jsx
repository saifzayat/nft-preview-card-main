import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./FFCard.module.css";

export default function FFCard() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Complete online JavaScript course", completed: true },
    { id: "2", text: "Jog around the park 3x", completed: false },
    { id: "3", text: "10 minutes meditation", completed: false },
  ]);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? styles.dark : styles.light;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    const [movedTask] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, movedTask);

    setTasks(newTasks);
  };

  return (
    <div
      className={`${styles.background} ${
        darkMode ? styles.backgroundD : styles.backgroundL
      }`}
    >
      <div
        className={`${styles.bgImage} ${
          darkMode ? styles.bgImageD : styles.bgImageL
        }`}
      >
        <div
          className={`${styles.container} ${
            darkMode ? styles.dark : styles.light
          }`}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>TODO</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={styles.themeToggle}
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>

          <div className={styles.todoAdd}>
            <input
              type="text"
              placeholder="Create a new todo..."
              className={styles.input}
            />
          </div>
          <div className={styles.todoWrapper}>
            <br></br>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="tasks">
                {(provided) => (
                  <ul
                    className={styles.taskList}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
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
                            className={`${styles.taskItem} ${
                              task.completed ? styles.completed : ""
                            }`}
                            onClick={() => toggleTask(task.id)}
                          >
                            <span className={styles.checkbox}>
                              {task.completed && (
                                <span className={styles.checkmark}>✔</span>
                              )}
                            </span>
                            {task.text}
                            <span className={styles.delete}>✖</span>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            <div className={styles.footer}>
              <span>{tasks.length} items left</span>
              <div className={styles.filters}>
                <button className={styles.active}>All</button>
                <button>Active</button>
                <button>Completed</button>
              </div>
              <button className={styles.clear}>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
