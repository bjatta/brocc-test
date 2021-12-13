import React, {useState} from 'react';
import './App.css';
import Body from "./Example";
import Counter from "./Counter";
import {QueryClient, QueryClientProvider} from "react-query";
const queryClient = new QueryClient()

function App() {
    const [index, setIndex] = useState(0);
  return (
      <QueryClientProvider client={queryClient}>
      <div className="App">
      <Counter counter={index} setCounter = {setIndex}/>
      <Body index={index}/>
    </div>
      </QueryClientProvider>
  );
}

export default App;
