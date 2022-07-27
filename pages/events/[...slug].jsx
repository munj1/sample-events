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
      <div className="flex justify-start ml-12 mt-5 mb-3 items-center gap-10 ">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Events in {dateFilter.year} {dateFilter.month}
        </h3>
        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => router.push(`/events`)}
        >
          Show All Events
        </button>
      </div>

      {filteredEvents.map((event) => (
        <Card {...event} key={event.id} />
      ))}
    </>
  );
};

export default FilteredEvents;
