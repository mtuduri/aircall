import React, { useState, useEffect } from 'react';
import ActivityList from '../../components/ActivityList/ActivityList.jsx';
import axios from 'axios';

const Activitypage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get('https://cerulean-marlin-wig.cyclic.app/activities')
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ActivityList activities={activities}></ActivityList>;
};
export default Activitypage;
