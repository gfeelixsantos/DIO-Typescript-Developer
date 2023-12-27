import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conta } from "./pages/Conta";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <>
    <BrowserRouter>
      <ChakraProvider>
         <Box  bgImage="url('https://s3-eu-central-1.amazonaws.com/cja-blogassets/wp-content/uploads/sites/3/2018/07/13141900/Conta-poupan%C3%A7a.jpg')" bgRepeat={'no-repeat'} bgSize={'cover'} height={'100vh'} >
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/conta/:id" element={<Conta/>}/>
            </Routes>
          </Box>
      </ChakraProvider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
