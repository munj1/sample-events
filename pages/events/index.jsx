import { getAllEvents } from "../../dummy-data";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Find from "../../components/Find";

function Events() {
  const allEvents = getAllEvents();
  console.log("allEvents", allEvents);

  return (
    <>
      <Find />
      {allEvents.map((event) => (
        <Card {...event} key={event.id} />
      ))}
    </>
  );
}

export default Events;
