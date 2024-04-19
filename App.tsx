import React, { createContext } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Navigation from './src/navigation/Navigation';
import AuthProvider from './src/providers/AuthProvider';

function App(): JSX.Element {
  return (  
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </AuthProvider>
  )
}

export default App;
