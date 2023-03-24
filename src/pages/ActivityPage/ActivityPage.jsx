import React, { useEffect } from 'react';
import ActivityList from '../../components/ActivityList/ActivityList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import useActivityApi from '../../hooks/activitiesHook.jsx';

const Activitypage = () => {
  const { groupedActivities, loadingGroupedActivities, getAll, archiveAll } = useActivityApi();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <React.Fragment>
      {loadingGroupedActivities && <Loader />}
      {!loadingGroupedActivities && groupedActivities && (
        <ActivityList
          activities={groupedActivities}
          archiveFn={archiveAll}
          archiveText="Archive all calls"></ActivityList>
      )}
    </React.Fragment>
  );
};
export default Activitypage;
