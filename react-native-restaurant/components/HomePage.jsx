import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Restaurant One',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Restaurant Two',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Restaurant Three',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FF4C52',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;



// import React from "react";
// import { StyleSheet, TextInput, Text, View, Alert, Image,Pressable } from 'react-native';import { StyleSheet, TextInput, Text, View, Alert, Image,Pressable } from 'react-native';

// export default function HomePage(){
//     return (
//         <View style={styles.app}>
//           <Row>
//           <Col numRows={2}>
//           <Image
//         source={require('../assets/images/food-plate.jpg')}
//         style={{ width: 350, height: 300, marginBottom: 35 , borderRadius:400/ 2}}
//       />
//           <Text>First column</Text>
//         </Col>
//         <Col numRows={2}>
//           <Text>Second column</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col numRows={1}>
//           <Text>First column</Text>
//         </Col>
//         <Col numRows={3}>
//           <Text>Second Column</Text>
//         </Col>
//           </Row>
//         </View>
//       );
// }


// const styles = {
//     app: {
//     flex: 4,
//     marginHorizontal: "auto",
//     width: 400,
//     backgroundColor: "red"
//   },
//   row: {
//     flexDirection: "row"
//   },
//   "1col":  {
//     backgroundColor:  "lightblue",
//     borderColor:  "#fff",
//     borderWidth:  1,
//     flex:  1
//   },
//   "2col":  {
//     backgroundColor:  "green",
//     borderColor:  "#fff",
//     borderWidth:  1,
//     flex:  2
//   },
//   "3col":  {
//     backgroundColor:  "orange",
//     borderColor:  "#fff",
//     borderWidth:  1,
//     flex:  3
//   },
//   "4col":  {
//     flex:  4
//   }
// };

// const Row = ({ children }) => (
//     <View style={styles.row}>{children}</View>
//   )