import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";

function App() {
  return (
    <main>
      <Header title="aaaaaaaaa" image={{src: goalsImg, alt: 'a list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
      >
        <p>Learn react framework.</p>
      </CourseGoal>
    </main>
  );
}

export default App;
