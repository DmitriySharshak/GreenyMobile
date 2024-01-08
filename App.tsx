import React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {
  return (  
    <SafeAreaProvider>
      <Navigation/>
      
      {/* <SafeAreaView>
        <Text>caption</Text>
      </SafeAreaView> */}
        
    </SafeAreaProvider>
  
  )
}

export default App;
