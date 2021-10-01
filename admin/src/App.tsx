import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'shared/navigation';
import { theme } from 'shared/themes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </Router>
    </>
  );
};

export default App;
