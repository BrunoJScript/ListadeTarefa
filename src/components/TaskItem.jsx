const TaskItem = ({ task, removeFromList }) => {
  return (
    <div className="taskItem">
      <p>{task}</p>
      <button onClick={() => removeFromList(task)}>Remover</button>
    </div>
  );
};

export default TaskItem;
