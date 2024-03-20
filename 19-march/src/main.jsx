import React, { useState, useEffect } from 'react';

function Main() {
  function Home() {
    return <div>Welcome to the Home Page</div>;
  }
  
  function Users() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
  
    return (
      <div>
        <h2>Users Page</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
  
    return (
      <div>
        <h2>Posts Page</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Todos() {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data));
    }, []);
  
    return (
      <div>
        <h2>Todos Page</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }

}



export default Main;
