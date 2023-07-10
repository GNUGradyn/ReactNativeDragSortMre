/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createRef } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { AnySizeDragSortableView } from 'react-native-drag-sort'


function ExampleElement({text}) {
  console.log("Rendering " + text);
  return (
    <View>
      <Text style={{color: "#000000"}}>{text}</Text>
    </View>
  )
}

function App(): JSX.Element {

  const backgroundStyle = {
    backgroundColor: "#FFFFFF",
  };

  const exampleData = [
    {
      id: 1,
      text: "this"
    },
    {
      id: 2,
      text: "is"
    },
    {
      id: 3,
      text: "an"
    },
    {
      id: 4,
      text: "example"
    },
  ]

  const sortableViewRef = createRef();

  function renderItem(item) {
    return (<ExampleElement text={item.text}/>)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={{"color": "#000000"}}>There should be 4 draggable texts below this</Text>
      <AnySizeDragSortableView
          ref={sortableViewRef}
          dataSource={exampleData}
          keyExtractor={(item) => item.id} // 1、isRequired
          renderItem={renderItem}
          style={{height: "100%", width: "100%"}}
          onDataChange={(data, callback)=> {
          
          }} 
      />
    </SafeAreaView>
  );
}

export default App;
