import React, { useEffect } from 'react';
import ActivityList from '../../components/ActivityList/ActivityList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import useActivityApi from '../../hooks/activitiesHook.jsx';

const ArchivedPage = () => {
  const { groupedArchivedActivities, loadingGroupedActivities, getAll, unArchiveAll } =
    useActivityApi();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <React.Fragment>
      {loadingGroupedActivities && <Loader />}
      {!loadingGroupedActivities && groupedArchivedActivities && (
        <ActivityList
          activities={groupedArchivedActivities}
          archiveFn={unArchiveAll}
          archiveText="Unarchive all calls"></ActivityList>
      )}
    </React.Fragment>
  );
};
export default ArchivedPage;
