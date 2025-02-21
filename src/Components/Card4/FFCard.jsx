import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./FFCard.module.css";
import yas from "../../../assets/icon-check.svg";

export default function FFCard() {
  //dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [tasks, setTasks] = useState(() => {
    // تحميل المهام من Local Storage عند فتح الصفحة
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState("");

  // تحديث Local Storage عند كل تعديل على المهام
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // إضافة مهمة جديدة
  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      text: taskInput,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // تحديث Local Storage مباشرة
    setTaskInput(""); // تصفير الإدخال بعد الإضافة
  };

  // حذف المهمة عند الضغط على ❌
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // تحديث Local Storage مباشرة
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
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
          </div>
          {/* if no tasks don't show todoWrapper */}
          <div className={styles.todoWrapper}>
            <DragDropContext>
              <ul className={styles.taskList}>
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className={`${styles.taskItem} ${
                      task.completed ? styles.completed : ""
                    }`}
                  >
                    <span className={styles.checkbox}>
                      {task.completed && (
                        <span className={styles.checkMark}>
                          <img src={yas} />
                        </span>
                      )}
                    </span>
                    <div className={styles.content}>
                      <span
                        className={`${""} ${
                          task.completed ? styles.completedText : ""
                        }`}
                      >
                        {task.text}
                      </span>
                      <span
                        className={styles.delete}
                        onClick={() => deleteTask(task.id)}
                      >
                        ✖
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
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
