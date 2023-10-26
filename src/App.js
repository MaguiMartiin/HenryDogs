import {Home, Landing, Detail, Form} from './views/componentIndex'
import {Route, useLocation} from 'react-router-dom'
import NavBar from './component/NavBar'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={Detail}/>
      <Route path="/create" component={Form}/>
    </div>
  );
}

export default App;
