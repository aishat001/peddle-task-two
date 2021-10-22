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
        <Route path="/repos/page/:pageNumber" component={Pagination} />
        <Route path="/repos/page/1" component={Pagination} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
        </Layout>
    </div>
  );
}
const Home = () => <div className="w-60 h-40 flex justify-center items-center m-auto"><Link to="/repos/page/1" className="w-40 h-40 border p-10 mt-40 bg-black text-white">Click to check trendy Repositories</Link></div>;

export default App;
