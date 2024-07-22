import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsList from "./EventsList";

const Events = () => {

  const events_url = 'http://3.38.98.134/events'
  const useFetch = ({
    url
  } = {
    url: events_url,
  }) => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
  
    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            if(data.statusCode === 200) {
                setData(data.data);
            }
        } catch(error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    }
  
    useEffect(() =>{
        fetchData()
    }, [])
  
    return {data, loading}
  }
  
  const  { data, loading } = useFetch();
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
