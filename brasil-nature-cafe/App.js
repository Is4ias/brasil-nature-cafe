import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Routes from './Router';

// import { TrendingFoods } from './src/componentes/trending';


export default function App() {
  // <TrendingFoods/>
 
  
  return (
    <>
    {/* se eu adicionar esse PRE aparece o json da api */}
    {/* <pre>
      {JSON.stringify(data, null, 2)}
    </pre> */}
      <StatusBar style="light" backgroundColor="#0C0F14" translucent={true}/>
      <Routes/>
      
    </>
  );
}



