import "./App.css";

function App(props) {
  const imgData = props.Data;
  return (
    <div>
      <h1>Kalvium gallary(App)</h1>
      <div className="row">
        {imgData.map((image) => {
          return (
            <div className="column" key={image.id}>
              <img src={image.img} alt="" />
            </div>
          );
          // code here
        })}
        ;
      </div>
    </div>
  );
}

export default App;
