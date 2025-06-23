import TaskItem from "./TaskItem";

const ItemContainer = ({ taskList, removeFromList }) => {
  return (
    <div>
      {taskList.map((t, index) => (
        <TaskItem
          task={t}
          removeFromList={removeFromList}
          key={`task-item-${index}`}
        />
      ))}
    </div>
  );
};

export default ItemContainer;
