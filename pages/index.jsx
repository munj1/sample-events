import { getFeaturedEvents } from "../dummy-data";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Find from "../components/Find";

//show featured events

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log("featured events", featuredEvents);

  return (
    <>
      <NavBar />
      <Find />
      {featuredEvents.map((event) => (
        <Card {...event} key={event.id} />
      ))}
    </>
  );
}

export default HomePage;
