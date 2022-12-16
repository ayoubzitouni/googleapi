import logo from './logo.svg';
import './App.css';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

function App() {
  const{isLoaded}=useLoadScript({googleMapsApiKey:process.env.Google_key})
  if(!isLoaded){
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Map/>
    </div>
  );
}
function Map() {
return <GoogleMap zoom={10} center={{lat:36,lng:10}} mapContainerClassName="maps"></GoogleMap>
}
export default App;
