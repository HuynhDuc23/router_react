/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const params = useParams();
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      {posts && (
        <ul>
          <li>{posts.title}</li>
        </ul>
      )}
    </>
  );
}
export default BlogDetail;
