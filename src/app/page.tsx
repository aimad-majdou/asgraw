import TopicList from "./topics/_components/topic-list";
export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_18rem] gap-4 h-full min-h-0 ">
      {/* Ensure height is properly constrained */}
      <div className="min-h-0 h-full " />
      {/* Posts will take up the remaining space */}
      <TopicList /> {/* Sidebar 18rem width */}
    </div>
  );
}
