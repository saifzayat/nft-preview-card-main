import { useState, useEffect } from "react";
import styles from "./FFCard.module.css";
import yas from "../../../assets/icon-check.svg";
import no from "../../../assets/icon-cross.svg";
import sun from "../../../assets/icon-sun.svg";
import moon from "../../../assets/icon-moon.svg";

export default function FFCard() {
  // ✅ تعريف الفلتر
  const [filter, setFilter] = useState("all");

  // Checkbox
  const CustomCheckbox = ({ id, label, checked, onChange }) => {
    return (
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id={id}
          className={styles.customCheckbox}
          checked={checked}
          onChange={onChange}
          src={yas}
        />
        <label htmlFor={id} className={styles.checkboxLabel}>
          {label}
        </label>
      </div>
    );
  };
  //dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // تحميل المهام من Local Storage عند فتح الصفحة
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState("");

  // تحديث Local Storage عند كل تعديل على المهام
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // ✅ تصفية المهام بناءً على الفلتر المحدد
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
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
    console.log(updatedTasks);
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
            <h1 className={styles.title}>T O D O</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={styles.themeToggle}
            >
              {darkMode ? (
                <span>
                  <img src={sun} />
                </span>
              ) : (
                <span>
                  <img src={moon} />
                </span>
              )}
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
            <ul className={styles.taskList}>
              {filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className={`${styles.taskItem} ${
                    task.completed ? styles.completed : ""
                  }`}
                >
                  <CustomCheckbox
                    id={`${task.id}-checkbox`}
                    checked={task.completed}
                    onChange={() => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id ? { ...t, completed: !t.completed } : t
                      );
                      setTasks(updatedTasks);
                    }}
                  />
                  <div className={styles.content}>
                    <span
                      className={`${""} ${
                        task.completed ? styles.completedText : ""
                      }`}
                    >
                      {task.text}
                    </span>
                    <span onClick={() => deleteTask(task.id)}>
                      <img src={no} className={styles.delete} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.footer}>
              <span>
                {tasks.filter((task) => !task.completed).length} items left
              </span>
              <div className={styles.filters}>
                <button
                  className={`${filter === "all" ? styles.activeFilter : ""}`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  className={`${
                    filter === "active" ? styles.activeFilter : ""
                  }`}
                  onClick={() => setFilter("active")}
                >
                  Active
                </button>
                <button
                  className={`${
                    filter === "completed" ? styles.activeFilter : ""
                  }`}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </button>
              </div>
              <button className={styles.clear} onClick={() => setTasks([])}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
