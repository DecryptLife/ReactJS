import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "mario";
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);
  // const [name, setName] = useState("Benson");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);

  // set new value of blogs as newBlogs
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);

          if (!res.ok) {
            throw Error("could not fetch the data for that result");
          }

          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

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
