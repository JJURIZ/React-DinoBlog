
import './App.css';

function App(props) {

  return (
    <div className="App">
      <h1 className="main_header">{props.post.title}</h1>
      <h3 className="sub_header" >{props.post.author}</h3>
      <p className="standard_paragraph">{props.post.body}</p>
      <h4 className="comments">Comments:</h4>
      <p className="standard_paragraph">{props.post.comments[0]}</p>
    </div>
  );
}

export default App;
