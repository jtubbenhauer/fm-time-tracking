import data from "../data.json";
import ProfileCard from "./components/ProfileCard";

function App() {
  console.log(data);
  return (
    <div className={"flex items-center justify-center h-screen"}>
      <ProfileCard />
    </div>
  );
}

export default App;
