import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';

const App = () => {
  return (
    <NavigationContainer>       
        <Home/>
    </NavigationContainer>
  );
};

export default App;
