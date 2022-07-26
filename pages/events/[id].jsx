import React from "react";
import Detail from "../../components/Detail";
import { getEventById } from "../../dummy-data";
import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";

function EventDetail({ item }) {
  const router = useRouter();
  const queryId = router.query.id;
  if (!queryId) {
    return <p>loading...</p>;
  }

  const event = getEventById(queryId);
  return (
    <>
      <NavBar />
      <Detail {...event} />
    </>
  );
}

export default EventDetail;
