import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
  short: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  //     event: MouseEvent<HTMLButtonElement, MouseEvent>
  function handlerAddGoal(): void {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it from the ground up",
        short: "Learn react framework.",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header
        title="aaaaaaaaa"
        image={{ src: goalsImg, alt: "a list of goals" }}
      >
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handlerAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal {...goal}>
              <p>{goal.short}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
