import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  //const person = { name: 'yoshi', age:30 };

  return (
    <div className="content">
      <h1> {title}</h1>
      <p>Liked: {likes} times</p>
      {/*{person} */}

      <p>{10}</p>
      <p>{"hello, people"}</p>
      <p>{ [1,2,3,4,5]}</p>
    <p>{ Math.random() * 18}</p>

    <a href={link}>Google Site</a>

    </div>
  );
}

export default App;
