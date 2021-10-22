import axios from "axios";
import React, { useState } from 'react';
import './App.css';
import Layout from './component/Layout';
import Repos from './component/Repos';

function App() {
const [repos, setRepos] = useState([]);


const baseURL = "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc";
React.useEffect(() => {
  axios
  .get(baseURL).then((response) => {
    setRepos( Object.values(response.data.items).map(i => i));
    })
  .catch(err => console.log(err));
}, []);
console.log(repos.length);

  return (
    <div className="App">
        <Layout>
            <Repos repos={repos}/>
        </Layout>
    </div>
  );
}

export default App;
