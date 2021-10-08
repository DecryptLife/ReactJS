// import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "mario";

  // const [name, setName] = useState("Benson");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);

  // set new value of blogs as newBlogs
  //   setBlogs(newBlogs);
  // };

  // data:blogs means to grab the data but call it blogs in this context
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Benson")}
        title="Benson's Blogs"
      /> */}
      {/* <button onClick={() => setName("Thomas")}>Change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
