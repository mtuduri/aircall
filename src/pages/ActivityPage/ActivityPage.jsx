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

  const archiveAll = () => {
    const promises = [];
    activities.forEach((a) => {
      const promise = axios.post(`https://aircall-job.herokuapp.com/activities/${a.id}`, {
        is_archived: true
      });
      promises.push(promise);
    });
    Promise.all(promises).then(() => {});
  };

  return <ActivityList activities={activities} archiveAll={archiveAll}></ActivityList>;
};
export default Activitypage;
