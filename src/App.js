// import './App.css';
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import SearchItems from "./SearchItems";
import apiRequest from "./apiRequest";
function App() {
  // const name = "ansary";

  // function handleNameChange(){
  //   const names = ["Earn","Grow","Give"]
  //   const int = Math.floor(Math.random()*3)
  //   console.log("int",int);
  //   return names[int]
  // }
  // const [items, setItem] = useState([
  //   { id: 1, checked: true, item: "Practise coding" },
  //   { id: 2, checked: false, item: "Learn React coding" },
  //   { id: 3, checked: false, item: "Learn Node coding" },
  // ]);
  // const [items, setItem] = useState(JSON.parse(localStorage.getItem('todo_list')));
  const [items, setItem] = useState([]);

  const [search, setSearch] = useState("");

  const [fetchError, setFetchError] = useState(null);

  const [isLoading,setIsLoading] = useState(true)

  const API_URL = "http://localhost:3500/items";

  // console.log("before useEffect");
  useEffect(() => {
    // console.log("load item");
    // JSON.parse(localStorage.getItem('todo_list'))
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        console.log(response);
        const listItems = await response.json();
        console.log(listItems);
        setItem(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        //  console.log(err.stack);
      }finally{
         setIsLoading(false)
      }
    };
    setTimeout(() => {
      (async () => fetchItems())();
    },2000 );
    
  }, []);

  // console.log("after useEffect");

  const handleCheck = async (id) => {
    // console.log(`id: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
    const myItem = listItems.filter((item) => item.id === id)
    const updateOptions = {
      method : 'PATCH',
      headers : {
        'Content-Type':"application/json"
      },
      body : JSON.stringify({checked:myItem[0].checked})
    }
    const requestUrl = `${API_URL}/${id}`
    const result = await apiRequest(requestUrl,updateOptions)
    if(result) setFetchError(result)
    // localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = async(id) => {
    const listItems = items.filter(
      (item) =>
        //  console.log("/clicked")
        item.id !== id
    );
    setItem(listItems);
    
    // localStorage.setItem("todo_list", JSON.stringify(listItems));
    const deleteOptions =  {method :'DELETE'}

    
    const requestUrl = `${API_URL}/${id}`
    const result = await apiRequest(requestUrl,deleteOptions)
    if(result) setFetchError(result)
  };

  const [newItem, setNewItem] = useState("");

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItem(listItems);
    // localStorage.setItem("todo_list", JSON.stringify(listItems));
    //to update in server data
    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type':"application/json"
      },
      body : JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (!newItem) return;
    console.log(newItem);
    //add
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title={"Course List"} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
        {!isLoading && !fetchError&&<Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>

      {/* <Content 
       items = {items}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
      /> */}
      <Footer length={items.length} />
    </div>
    // <div className="App">
    //    Subcribe to ansary
    //    <p>Lets {handleNameChange()} money</p>
    // </div>
  );
}

export default App;
