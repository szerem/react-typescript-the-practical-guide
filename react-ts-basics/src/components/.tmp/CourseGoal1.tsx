// import { type PropsWithChildren } from "react";
// // import { type ReactNode } from "react";

// // type CourseGoalProps = {
// //   title: string;
// //   description: string;
// // };

// // interface CourseGoalProps {
// //   title: string;
// //   description: string;
// //   children: ReactNode;
// // }

// // function CourseGoal({ title, description }: CourseGoalProps) {
// // const CourseGoal = ({ title, description, children }: CourseGoalProps) => {
// type CourseGoalProps = PropsWithChildren<{
//   title: string;
//   description: string;
// }>;
// const CourseGoal = ({ title, description, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
