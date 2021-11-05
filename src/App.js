import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Favourite from './Components/Favourite';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact render={(props)=>(//react apne aap match location history prop pass karta hai render methode mein
            <>
                <Banner {...props} />
                <Movies {...props}/>
            </>
          )}/>
             


          <Route path='/favourites' component={Favourite} />

        </Switch>

        {/* <Banner />
        <Movies />
        <Favourite /> */}
      </Router>
    </div>
  );
}

export default App;
