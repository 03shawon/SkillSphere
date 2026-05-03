import Hero from "./components/Hero";
import LearningTips from "./components/LearningTips";
import PopularCourses from "./components/PopularCourses";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
    </main>
  );
}
