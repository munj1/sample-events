import { getFilteredEvents } from "../../dummy-data";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Find from "../../components/Find";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">loading...</p>;
  }

  // console.log("query", router.query.slug);
  const dateFilter = {
    year: parseInt(filteredData[0]),
    month: parseInt(filteredData[1]),
  };
  // console.log("dateFilter", dateFilter);

  const filteredEvents = getFilteredEvents(dateFilter);
  console.log("filtered events", filteredEvents);

  return (
    <>
      <NavBar />
      <Find date={dateFilter} />
      {filteredEvents.map((event) => (
        <Card {...event} key={event.id} />
      ))}
    </>
  );
};

export default FilteredEvents;
