import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
import './App.css'


function App() {
  return (
    <div className="App">

    <FullName /> 
    <Address />
    <ProfilePhoto/> 
    
    </div>
  );
}

export default App;
