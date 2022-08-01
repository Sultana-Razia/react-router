import './App.css';
import Header from './components/Friend/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail />}></Route>
        <Route path='/posts' element={<Posts />}>
          <Route path=':postId' element={<PostDetail />}></Route>
        </Route>
        <Route path='/countries' element={<Countries />}></Route>
        <Route path='/country/:countryName' element={<CountryDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
