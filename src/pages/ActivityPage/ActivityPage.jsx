import React, { useEffect } from 'react';
import ActivityList from '../../components/ActivityList/ActivityList.jsx';
import useActivityApi from '../../hooks/activitiesHook.jsx';

const Activitypage = () => {
  const { groupedActivities, getAll, archiveAll } = useActivityApi();

  useEffect(() => {
    getAll();
  }, []);

  return <ActivityList activities={groupedActivities} archiveAll={archiveAll}></ActivityList>;
};
export default Activitypage;
