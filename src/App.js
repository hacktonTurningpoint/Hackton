import image from "./images/world 1.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={image}></img>
      <button className="FindCenter">재난심리회복지원센터 찾기</button>
      <button className="CheckMenu">재난 메뉴얼 확인</button>
    </div>
  );
}

export default App;
