import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import loading1 from "../../components/assets/img/loiding.svg"
import OrganizationsList from './OrganizationsList';

const  Organizations = () => {
    const organization_url = "http://3.38.98.134/organizations"
    const  { data, loading } = useFetch({
        url:organization_url
      })
      console.log(data, 'organization');
      
      if (loading) {
        return <div className='loading'style={{
            display:'flex',alignItems:'center',justifyContent:"center"
        }}><img src={loading1} alt="img" /></div>;
      }
    return (
        <div id='organizations'>
            <div className="organizations">
            {data &&
                  data.map((el: any, index: number) => {
                    return (
                      <OrganizationsList
                        key={index}
                        name={el.name}
                        icon={el.icon}
                        events_count ={el.events_count}
                        jobs_count={el.jobs_count}
                        meetups_count={el.meetups_count}
                       
                        
                      />
                    );
                  })}
            </div>
           
     
               
             
                                      
                
        </div>
        
    );
};

export default Organizations;