import "./app.css";
import MainCard from "./components/MainCard";

function App() {
  return (
    <main>
      <p>The quick brown fox jumps over the lazy dog</p>
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <em>The quick brown fox jumps over the lazy dog</em>
      <br />
      <i>The quick brown fox jumps over the lazy dog</i>
      <div className="cardsContainer">
        <MainCard title="test1">test</MainCard>
        <MainCard title="test1">test</MainCard>
        <MainCard title="test1">test</MainCard>
        <MainCard title="test1">test</MainCard>
        <MainCard title="test1">test</MainCard>
      </div>
    </main>
  );
}

export default App;
