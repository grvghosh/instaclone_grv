import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Pagination from "../components/Pagination";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    async function fun() {
      //let data1 = await fetch(process.env.REACT_APP_API + "/post");
      let data1 = await fetch("http://localhost:3004/api/post");
      // let data1 = await fetch("https://grv-insta-server.herokuapp.com/api/post");
      
      let data = await data1.json();
      setUsers([...data.user]);
    }

    fun();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;
  
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);
  
     
  return (
    <div className="site-container">
      <Navbar />
      <div className="container">
        {/* {users.length
          ? users.map((obj, idx) => {
              return <Card key={idx} obj={obj} />;
            })
          : ""} */}
          

          {currentPosts.length
          ? currentPosts.map((obj, idx) => {
              return <Card key={idx} obj={obj} />;
            })
          : ""}
          <Pagination
          totalPosts={users.length}
          postsPerPage={postsPerPage}
          setCurrentPage = {setCurrentPage}
          currentPage = {currentPage}
          />
      </div>
    </div>
  );
};

export default LandingPage;
