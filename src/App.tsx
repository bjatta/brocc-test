import React, {useState} from 'react';
import './App.css';
import Body from "./Example";
import Counter from "./Counter";
import {QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from "styled-components";
import theme from "./appearance/Theme";
import StyledApp from "./appearance/StyledApp";

const queryClient = new QueryClient()

function App() {
    const [index, setIndex] = useState(0);
  return (
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
              <StyledApp className="App">
                <Counter counter={index} setCounter = {setIndex}/>
                <Body index={index}/>
              </StyledApp>
          </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;
