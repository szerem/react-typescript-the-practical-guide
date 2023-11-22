import { FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
