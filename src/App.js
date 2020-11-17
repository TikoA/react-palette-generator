import { Box, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import Palette from './components/Palettegen'

function App() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(Math.floor(Math.random() * 199))
  }, [])

  function handleKeyPress() {
    setIndex(Math.floor(Math.random() * 199))
  }

  return (
    <div className="App">
      <Box>
        <Box 
          width="100%" 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          height="20vh"
          backgroundColor="gray.700"
        >
          <Button colorScheme="blue" onClick={handleKeyPress}>Generate new</Button>
        </Box>
        <Palette index={index}/>
      </Box>
    </div>
  );
}

export default App;
