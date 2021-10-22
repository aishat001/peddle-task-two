import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const Users = (props) => {
  console.log(props);
  const params = useParams();
  const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;

  const [state, setState] = useState({
    count: undefined,
    limit: undefined,
    next: "",
    previous: "",
    start: undefined,
    results: []
  });

  useEffect(() => {
    const limit = 5;
    axios
      .get(
        `http://127.0.0.1:5000/User/page?start=${
          1 + limit * (pageNumber - 1)
        }&limit=${limit}`
      )
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        setState({
          next: "not blank" //just so I can test with invalid API results
        });
      });
  }, [pageNumber]); //useEffect is hook equivalent of componentDidMount

  const hasPrevious = pageNumber > 1;
  const hasNext = !!state.next;

  return (
    <div>
      <div>showing page #{pageNumber}</div>
      {hasPrevious && (
        <Link to={`/users/page/${pageNumber - 1}`}>Previous</Link>
      )}
      {hasNext && <Link to={`/users/page/${pageNumber + 1}`}>Next</Link>}
    </div>
  );
};



