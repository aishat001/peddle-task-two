import React from 'react';
import './App.css';
import Layout from './component/Layout';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
// import { Users } from "../src/component/Users";
import Pagination from "./component/Pagination";


function App() {


  return (
    <div className="App">
        <Layout>
            <BrowserRouter>
      <Switch>
        <Route path="/github/repos/page/:pageNumber" component={Pagination} />
        <Route path="/github/repos/page/1" component={Pagination} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
        </Layout>
    </div>
  );
}
const Home = () => <div className="w-60 h-40 mt-40 flex justify-center items-center m-auto"><Link to="/github/repos/page/1" className="w-80 h-40 border p-10 bg-black text-white flex items-center cursor-pointer">Click to check trendy Github Repositories</Link></div>;

export default App;
