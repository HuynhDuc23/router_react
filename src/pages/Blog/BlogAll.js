import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function BlogAll() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    let api = "https://dummyjson.com/posts";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setPost(data.posts);
      });
  }, []);

  return (
    <>
      BlogAll...
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <NavLink to={"/blog/" + item.id}>{item.title}</NavLink>
          </li>
          //   NO RETURN
        ))}
      </ul>
    </>
  );
}
export default BlogAll;
