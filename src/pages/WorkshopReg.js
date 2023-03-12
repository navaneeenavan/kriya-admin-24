import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchEvents } from "../API/calls";
import Dropdown from "../components/Dropdown";
import Layout from "../components/Layout";
import Row from "../components/Row";
import Inputfield from "../components/TextInput";

const WorkshopReg = () => {
  const [events, setEvents] = useState([]);
  const [eventChoice, setEventChoice] = useState("");

  const [formData, setFormData] = useState({
    eventName: "",
    category: "",
    one_line_desc: "",
    description: "",
    round_title_1: "",
    round_desc_1: "",
    round_title_2: "",
    round_desc_2: "",
    round_title_3: "",
    round_desc_3: "",
    round_title_4: "",
    round_desc_4: "",
    eventId: "",
    contact_name_1: "",
    contact_mobile_1: "",
    contact_name_2: "",
    contact_mobile_2: "",
    hall: "",
    eventRules: "",
    teamSize: "",
    date: "",
    timing: "",
  });

  useEffect(() => {
    toast.promise(fetchEvents(), {
      loading: "Fetching events",
      success: (res) => {
        setEvents(res.data.events);
        return "Successfully fetched events";
      },
      error: (err) => {
        console.log(err);
        return "Error fetching events";
      },
    });
  }, []);

  useEffect(() => {
    if (eventChoice.length <= 0) return;
    setFormData({
      ...formData,
      ...events.find((e) => e.eventName === eventChoice),
    });
  }, [eventChoice]);

  return (
    <Layout title={"Workshop Registrations"}>
      <Dropdown
        title="Choose an event to edit"
        options={events.map((e) => e.eventName)}
        valueState={[eventChoice, setEventChoice]}
        placeholder="Select an event"
      />
      <div className="w-full my-8 h-1 border-b-2 border-b-gray-200" />
      {eventChoice.length <= 0 ? (
        <div className="w-full font-semibold text-5xl text-gray-300 p-16 flex items-center justify-center">
          Select an event to edit
        </div>
      ) : (
        <div className="w-full h-fit space-y-6">
          <Row>
            <Inputfield
              title="Event Name"
              valueState={[
                formData.eventName,
                (val) => setFormData({ ...formData, eventName: val }),
              ]}
            />
            <Inputfield
              title="Event Id"
              isDisabled
              valueState={[
                formData.eventId,
                (val) => setFormData({ ...formData, eventId: val }),
              ]}
            />
          </Row>
          <Row>
            <Inputfield
              title="Category"
              valueState={[
                formData.category,
                (val) => setFormData({ ...formData, category: val }),
              ]}
            />
            <Inputfield title="One Line Description" />
          </Row>
        </div>
      )}
    </Layout>
  );
};

export default WorkshopReg;
