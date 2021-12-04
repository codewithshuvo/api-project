import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Shuvo></Shuvo>
    </div>
  );
}

function Shuvo() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h2>This is api project:{posts.length}</h2>
      {
        posts.map(post => <Mypost userid={post.userid} id={post.id} title={post.title} body={post.body}></Mypost>)
      }
    </div>
  )
}
function Mypost(props) {
  return (
    <div className="post-api">
      <h1>{props.userid}</h1>
      <h2>{props.id}</h2>
      <h2>{props.titel}</h2>
      <h3>{props.body}</h3>
    </div>
  )
}

export default App;
