
import { db, set, ref } from "./utils/firebase";
import { uid } from "uid";
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState('');

  const writeToDatabase = 
  ref(db, "users/" + userId);
  reference, {

  }

  return (
    <h1 className="text-3xl font-bold underline text-center ">
      Hello world!
    </h1>
  );
}

export default App;
