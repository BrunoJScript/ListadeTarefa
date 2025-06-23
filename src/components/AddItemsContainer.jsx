const AddItemsContainer = ({ addToList }) => {
  let newTask = "";
  return (
    <div className="adicionarTarefa">
      <input
        type="text"
        onChange={(evt) => {
          newTask = evt.target.value;
        }}
      />
      <button
        onClick={() => {
          if (newTask !== "") addToList(newTask);
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;
