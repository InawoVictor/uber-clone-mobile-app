import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/AntDesign"
import HomeScreen from './screens/HomeScreen';
import DestinationSearch from './screens/DestinationSearch';

export default function App() {
  return (
    <>      
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </>
  );
}

