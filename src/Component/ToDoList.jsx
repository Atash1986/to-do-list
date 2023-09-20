import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  // const [isDone, setIsDone] = useState("false");
  const options = [
    { id: "10", value: "Select On", label: "Select On" },
    { id: "11", value: "Emad", label: "Emad Armoun" },
    { id: "12", value: "Atefeh", label: "Atefeh Ashourzadeh" },
    { id: "13", value: "Mahdiar", label: "Mahdiar Armoun" },
    { id: "14", value: "Arian", label: "Arian Armoun" },
    { id: "15", value: "Niloo", label: "Niloo Armoun" }
  ];

  const [selectedOption, setSelectedOption] = useState({ id: "", value: "" });

  const [currentItem, setCurrentItem] = useState({
    title: "",

    dateAndTime: "2023",
    isDone: false,
    author: "0"
  });
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setCurrentItem((prevInputText) => ({
      ...prevInputText,
      [name]: value
    }));
  }

  function handleCheck2(selectIndex) {
    // clone the items list into a new array (copy)
    const newItems = [...items];
    const preIsDone = items[selectIndex].isDone;
    newItems[selectIndex].isDone = !preIsDone;

    setItems(newItems);
  }
  function handleSelect(event) {
    // const { key, lable } = event.taget;

    //  const idSelect=event.target[event.target.selectedIndex].id;
    const idSelect = event.target.selectedIndex;

    //return  prevItems.find((item,index) => index !==selectIndex)

    const valueSelect = options[event.target.selectedIndex].label;
    //console.log("target" + );
    setCurrentItem((prevCurrentItem) => ({
      ...prevCurrentItem,
      //id :idSelect,
      author: idSelect
    }));
  }

  function handleCheck(selectIndex) {
    // console.log("selectIndex received = ", selectIndex);
    setItems((prevItems) => {
      return prevItems.map((item, index) => {
        // console.log("check item with selectIndex=", index);
        if (index === selectIndex) {
          // console.log("item.selectIndex === selectIndex -> for selectIndex=", selectIndex);
          // Create a new object to avoselectIndex mutating the original item
          //  setCurrentItem({ ...item, isDone: !item.isDone });
          //return prevItems.filter((item, index));
          return { ...item, isDone: !item.isDone };
        }

        return item; // Return unchanged items
      });
    });
  }
  /*function deleteItem(selectIndex) {
    // console.log("checked");
    setItems(prevItems=>{
    return  prevItems.filter((item,index) => index !==selectIndex)
   
    });
  }*/

  function reset() {
    //setSelectedOption("0");
    setCurrentItem((prevCurrentItem) => ({
      ...prevCurrentItem,

      title: "",
      dateAndTime: "",
      author: "0"
    }));
  }
  function addItem(event) {
    // event.defaultPrevented();
    //  console.log(items);
    const currentDT = new Date();
    const dateTime = currentDT.toLocaleString();

    setItems((prevItems) => {
      // ????? setCurrentItem( { ...currentItem, dateAndTime: dateTime });
      const newItem = { ...currentItem, dateAndTime: dateTime };

      // console.log("currentItem " + currentItem.dateAndTime);
      return [...prevItems, newItem];
    });
    reset();
  }
  //  console.log("Date&Time in TodoList=", currentItem.dateAndTime);

  return (
    <div>
      <label for="title">Title</label>
      <input
        type="text"
        name="title"
        value={currentItem.title}
        onChange={handleChange}
      />
      <br />
      <label for="author">Author</label>
      <select
        type="text"
        name="author"
        value={options[currentItem.author].value}
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option id={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <br />
      <button onClick={(event) => addItem(event)}>Add</button>
      <br />
      <ul>
        <h1>To Do List</h1>
        {items
          .filter((item) => item.isDone === false)
          .map((item, index) => {
            console.log(item.isDone);
            // if(item.isDone===false)
            // {

            console.log("IsDone :" + item.isDone);
            return (
              <ToDoItem
                key={index}
                index={index}
                title={item.title}
                author={options[item.author].label}
                isDone={item.isDone}
                dateAndTime={item.dateAndTime}
                onChecked={handleCheck}
                // author={}
                // item={item}
                // onChecked={handleCheck2}
              />
            );
            // }
            //{alert()}
          })}
        <h1> The Work Done</h1>
        {items.map((item, index) => {
          console.log(item.isDone);
          if (item.isDone === true) {
            console.log("IsDone :" + item.isDone);
            return (
              <ToDoItem
                key={index}
                index={index}
                title={item.title}
                author={options[item.author].label}
                isDone={item.isDone}
                dateAndTime={item.dateAndTime}
                onChecked={handleCheck}
                // author={}
                // item={item}
                // onChecked={handleCheck2}
              />
            );

            //{alert()}
          }
        })}
      </ul>
    </div>
  );
}
export default ToDoList;
