import { useState } from "react";

const TaskItem = ({ task, removeFromList }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="taskItem" style={{ marginBottom: "10px" }}>
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        style={{
          marginLeft: "10px",
          textDecoration: isChecked ? "line-through" : "none",
          color: isChecked ? "gray" : "black",
        }}
      >
        {task}
      </span>
      <button
        onClick={() => removeFromList(task)}
        style={{ marginLeft: "10px" }}
      >
        Remover
      </button>
    </div>
  );
};

export default TaskItem;

// const TaskItem = ({ task, removeFromList }) => {
//   return (
//     <div className="taskItem">
//       <p>{task}</p>
//       <button onClick={() => removeFromList(task)}>Remover</button>
//     </div>
//   );
// };
