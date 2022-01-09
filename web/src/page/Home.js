import React, { useState, useEffect } from "react";
import axios from "axios";
import Social from "../components/Social/Social";
import Posts from "../components/Post/Post";
import Pagination from "../components/Pagination/Pagination";
import Form from "../components/Form/Form";
import "./home.css";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    loadTripData();
  }, []);

  const loadTripData = async () => {
    setLoading(true);
    return await axios.get("http://localhost:9000/trips").then((res) => {
      if (res.data) {
        setData(res.data);
        setLoading(false);
      }
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log("data", currentPosts);
  return (
    <div className="condiv home">
      <h1 className="title">เที่ยวไหนดี</h1>
      <Form />
      <Posts data={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
      <Social />
    </div>
  );
}

export default Home;
