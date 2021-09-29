import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import NotFound from "./components/NotFound/NotFound";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/user/:UserId'>
            <UserDetails></UserDetails>
          </Route>
          <Route path='/users'>
            <Users></Users>
          </Route>
          <Route path='/post/:postId'>
            <PostDetails></PostDetails>
          </Route>
          <Route path='/posts'>
            <Posts></Posts>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
