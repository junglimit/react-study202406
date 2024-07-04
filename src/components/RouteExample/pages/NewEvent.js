import React from "react";
import EventForm from "../components/EventForm";

const NewEvent = () => {
    return <EventForm method='post' event />;
};

export default NewEvent;