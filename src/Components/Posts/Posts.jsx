import React from 'react'
import { useParams } from 'react-router-dom';
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

export const Posts = () => {
  const {userId} = useParams();

  const [posts, setPost] = React.useState({
    loading: true,
    error: false,
    post: [],
  });

  React.useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) =>
        setPost({
          ...posts,
          loading: false,
          post: data,
        })
      )
      .catch((err) =>
        setPost({
          error: err,
          loading: false,
        })
      );
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Posts</h1>

      {posts.loading && <Loading />}
      {posts.error && <Error />}

        <ul className='list-unstyled d-flex justify-content-around flex-wrap'>
          {posts.post.map((post) => (
            <li key={post.id} className='w-50 border rounded p-3 mb-3'>
              <h3>{post.title}</h3>
              <p>{post.body}</p> <br />
            </li>
          ))}
        </ul>

    </div>
  )
}

