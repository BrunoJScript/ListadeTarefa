import { useState } from "react";
import ItemContainer from "./components/ItemContainer";
import Image from "./assets/BrunoSuppa Transparent Logo.png";
import "./App.css";
import AddItemsContainer from "./components/AddItemsContainer";

function App() {
  const [taskList, setTaskList] = useState([
    "Arroz",
    "Feijão",
    "Açucar",
    "Café",
  ]);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    if (itemIndex > -1) {
      newList.splice(itemIndex, 1); // ✅ splice actually removes the item
      setTaskList(newList);
    }
  };

  const addToList = (item) => {
    // const newList = [...taskList];
    // newList.push(item);
    // setTaskList(newList);

    setTaskList([...taskList, item]);
  };

  return (
    <>
      <div>
        <img src={Image} alt="" />

        <h1>Lista de Tarefa</h1>
      </div>

      <AddItemsContainer addToList={addToList} />
      <ItemContainer taskList={taskList} removeFromList={removeFromList} />
    </>
  );
}

export default App;
