import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Repos from "./Repos";

export default function Pagination() {
    const params = useParams();
    
    const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 6) : 1;
    
    const [state, setState] = useState([]);

      const baseURL = "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc";
      
      useEffect(() => {
        axios
        .get(`${baseURL}&page=${pageNumber}`)
        .then((response) => {
          setState( Object.values(response.data.items).map(i => i));
          console.log( Object.values(response.data.items).map(i => i))
          })
        .catch(err => {
                   setState({
          next: "not blank" //just so I can test with invalid API results
        });
      })
      }, [pageNumber]); //useEffect is hook equivalent of componentDidMount

      const hasPrevious = pageNumber > 1;
      const hasNext = !state.next;

     

    return (
        <div>
            <Repos repos={state}/>
        <div className="flex items-center space-x-1 p-10">
        <div className="text-2xl">Page {pageNumber}</div>
        {hasPrevious && (
          <Link to={`/repos/page/${pageNumber - 1}`} className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">Previous</Link>
        )}
        {
          pageNumber === 6 ?
          !hasNext 
          :
        hasNext && <Link to={`/github/repos/page/${pageNumber + 1}`} className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">Next</Link>}

    </div>
        </div>


    )
}
