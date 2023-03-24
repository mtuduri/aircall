import React, { useEffect } from 'react';
import ActivityList from '../../components/ActivityList/ActivityList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import useActivityApi from '../../hooks/activitiesHook.jsx';
import { NoActivity } from './ArchivedPage.styles.jsx';

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
      {!loadingGroupedActivities && !groupedArchivedActivities && (
        <NoActivity> There is no archived activity</NoActivity>
      )}
    </React.Fragment>
  );
};
export default ArchivedPage;
