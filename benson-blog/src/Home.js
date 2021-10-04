import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "mario";
  const [blogs, setBlogs] = useState([
    {
      tilte: "My new website!",
      body: "lorem ipsum ...",
      author: "Benson",
      id: 1,
    },
    {
      tilte: "Welcome Party!",
      body: "lorem ipsum ...",
      author: "Thomas",
      id: 2,
    },
    {
      tilte: "Web dec top tips",
      body: "lorem ipsum ...",
      author: "Beena",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Benson");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    // set new value of blogs as newBlogs
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect run", blogs);
    console.log(name);
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Benson")}
        title="Benson's Blogs"
      /> */}
      <button onClick={() => setName("Thomas")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
