import React, { useState } from "react";
import "./App.css";

function App() {
  let [newList, setnewList] = useState("");
  let [items, setItems] = useState([]);
  let [showEdit, setShowEdit] = useState(-1);
  let [updatedText, setNewText] = useState("");

  function addTodoList() {


    if (!newList)
    {
      alert(" Add items to-do-list !");
      return;
    }

    let item = {
      id: Math.floor(Math.random() * 1000),
      value: newList,
    };
  

    

    setItems((oldList) => [...oldList, item]);

    

    setnewList("");

  }



    function deleteFromList(id) {
    let newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  //Edit 


  function editItem(id, newText) {
    // Get the current item
    let currentItem = items.filter((item) => item.id === id);

    // new 

    let newList = {
      id: currentItem.id,
      value: newText,
    };

    deleteFromList(id);

    // Replace 

    setItems((oldList) => [...oldList, newList]);
    setNewText("");
    setShowEdit(-1);
  }

 
  return (
    <div className="app">
   
    <h1>To-Do-List-API</h1>
  
    <input
        type="text"
        placeholder="Type here items to-do-list "
        value={newList}
        onChange={(e) => setnewList(e.target.value)}
    />
  
    <button onClick={() => addTodoList()}>Add Item</button>
        <ul>
        {items.map((item) => {
        return (
    <div>
    <li key={item.id} onClick={() => setShowEdit(item.id)}>
    {item.value}
    <button
        className="delete-button"
        onClick={() => deleteFromList(item.id)}
        >
        X 
    </button>
    </li>
    
    {showEdit === item.id ? (
    <div>
    <input
        type="text"
        value={updatedText}
        onChange={(e) => setNewText(e.target.value)}
    />
    <button onClick={() => editItem(item.id, updatedText)}> Up-date item
    </button>
    </div>
    ) : null}
    </div>
    );})}
    </ul></div>
    );}

export default App;

