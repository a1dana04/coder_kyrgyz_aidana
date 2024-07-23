import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsList from "./EventsList";
import useFetch from "../../hooks/useFetch";

const Events = () => {

  const events_url = 'http://3.38.98.134/events'
  
  
  const  { data, loading } = useFetch({
    url:events_url
  })
  console.log(data, 'events');
  
  if (loading) {
    return <div>Loading</div>;
  }
  
  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        {data &&
                  data.map((el: any, index: number) => {
                    return (
                      <EventsList
                        key={index}
                        location={el.location}
                        name={el.name}
                        organization_name={el.organization_name}
                        date={el.date}
                        
                      />
                    );
                  })}

      </div>
    </div>
  );
};

export default Events;
