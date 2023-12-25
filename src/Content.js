import React from "react";
import ItemsList from "./ItemsList";
// import { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  // const [items, setItem] = useState([
  //   { id: 1, checked: true, item: "Practise coding" },
  //   { id: 2, checked: false, item: "Learn React coding" },
  //   { id: 3, checked: false, item: "Learn Node coding" },
  // ]);

  //   const [name,setName] = useState("Earn")
  // function handleNameChange(){
  //     const names = ["Earn","Grow","Give"]
  //     const int = Math.floor(Math.random()*3)
  //     console.log("int",int);
  //     setName( names[int])
  //   }

  // const [count, setCount] = useState(99);
  // const [name, setName] = useState(() => namee());
  // const [name, setName] = useState();
  // const handleClick = (e) => {
  //   console.log(e.target.innerText);
  // }

  // const handleClick2 = (name) => {
  //   console.log(`thanks for support ${name}`);
  // }

  // function namee () {
  //   return console.log("hi");
  // }

  //   function decrementFunction(){
  //     setCount((prevCount) =>{return prevCount - 1} )

  // }

  //   function incrementFunction(){
  //       setCount((prevCount) =>{return prevCount + 1} )

  //   }

  // const number = [-2,-1,0,1,2]
  // const items =  number.map(n => ({number:n}))
  // console.log("items",items);

  // const handleCheck = (id) => {
  //   // console.log(`id: ${id}`);
  //   const listItem = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setItem(listItem);
  //   localStorage.setItem("todo_list",JSON.stringify(listItem))
  // };

  // const handleDelete = (id) => {
  //    const listItems =  items.filter((item) =>
  //     //  console.log("/clicked")
  //     item.id!==id )
  //   setItem(listItems);
  //   localStorage.setItem("todo_list",JSON.stringify(listItems))

  // }

  return (
    // <main>
    <>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        // <ul>
        //   {items.map((item) => (
        //     <li className="item" key={item.id}>
        //       <input
        //         type="checkbox"
        //         onChange={() => handleCheck(item.id)}
        //         checked={item.checked}
        //       />
        //       <label
        //       style={(item.checked) ?
        //         {textDecoration : 'line-through'} : null}
        //       onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
        //       <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)}/>
        //       {/* <button>
        //          Delete
        //       </button> */}
        //     </li>
        //   ))}
        // </ul>
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}

      {/* <p >Lets {name} money</p>
        <button onClick={handleNameChange}>Subcribe</button> */}
      {/* <button onClick={decrementFunction}>-</button> */}
      {/* <span>{count}</span> */}
      {/* <button onClick={ incrementFunction}>+</button> */}
      {/* <button  onClick={(e) => handleClick(e)}>Subcribe</button> */}
    {/* // </main> */}
    </>
  );
};

export default Content;
