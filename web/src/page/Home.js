import React, { useState, useEffect } from "react";
import axios from "axios";
import Social from "../components/Social/Social";
import Posts from "../components/Post/Post";
import Pagination from "../components/Pagination/Pagination";
import "./home.css";

function Home() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

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

  async function Search(value) {
    setCurrentPage(1);
    setValue(value);

    await axios.get(`http://localhost:9000/trips?q=${value}`).then((res) => {
      setLoading(true);
      if (res.data) {
        setData(res.data);
        setLoading(false);
      }
    });
  }

  const handleReset = () => {
    // setValue("");
    loadTripData();
  };

  return (
    <div className="condiv home">
      <h1 className="title">เที่ยวไหนดี</h1>
      <form className="searchForm">
        <input
          className="searchInput"
          type="text"
          id="search"
          name="search"
          value={value}
          onChange={(e) => Search(e.target.value)}
          placeholder="หาที่เที่ยวแล้วไปกัน...."
        />
        <button className="btn resetBtn" onClick={() => handleReset()}>
          <i className="fa fa-times"></i>
        </button>
      </form>
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
