import React, { createContext } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Navigation from './src/navigation/Navigation';
import AuthProvider from './src/providers/AuthProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App(): JSX.Element {
  return (  
    <GestureHandlerRootView style={{flex:1}}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <Navigation/>
          </SafeAreaProvider>
        </AuthProvider>  
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
  )
}

export default App;
