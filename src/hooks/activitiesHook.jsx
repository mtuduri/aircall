import axios from 'axios';
import { useState } from 'react';
import { formatDate, greatherOrEqual, greatherThan5min } from '../utils/DateUtils.jsx';

const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app';

const useActivityApi = () => {
  const [archived, setArchived] = useState([]);
  const [unarchived, setUnarchived] = useState([]);
  const [loadingActivity, setLoadingActivity] = useState(false);
  const [activity, setActivity] = useState([]);
  const [loadingGroupedActivities, setLoadingGroupedActivities] = useState(false);
  const [groupedActivities, setGroupedActivities] = useState([]);
  const [groupedArchivedActivities, setGroupedArchivedActivities] = useState([]);

  const isActivityEqual = (a1, a2) => {
    return (
      a1.from === a2.from &&
      a1.to === a2.to &&
      a1.via === a2.via &&
      a1.direction === a2.direction &&
      a1.is_archived === a2.is_archived &&
      a1.call_type === a2.call_type &&
      !greatherThan5min(a1.created_at, a2.created_at)
    );
  };

  const divideByArchived = (list) => {
    const archived = [];
    const unarchived = [];
    for (let item of list) {
      if (item.is_archived) {
        archived.push(item);
      } else {
        unarchived.push(item);
      }
    }
    return { archived, unarchived };
  };

  const groupActivities = (list) => {
    if (list && list.length > 0) {
      const groupedList = list.reduce((acc, current) => {
        let foundIndex = acc.findIndex((x) => isActivityEqual(x, current));
        if (foundIndex > -1) {
          if (acc[foundIndex].count === undefined) {
            acc[foundIndex].count = 2;
          } else {
            acc[foundIndex].count = acc[foundIndex].count + 1;
          }
          if (greatherOrEqual(current.created_at, acc[foundIndex].created_at)) {
            acc[foundIndex].created_at = current.created_at;
          }
        } else {
          acc.push(current);
        }
        return acc;
      }, []);
      const groupByDate = groupedList.reduce((groups, current) => {
        const formatedDate = formatDate(current.created_at);
        if (!groups[formatedDate]) {
          groups[formatedDate] = [current];
        } else {
          groups[formatedDate].push(current);
        }
        return groups;
      }, {});
      return groupByDate;
    }
  };

  const processData = (list) => {
    const { archived, unarchived } = divideByArchived(list);
    const unarchivedGroup = groupActivities(unarchived);
    setGroupedActivities(unarchivedGroup);
    const archivedGroup = groupActivities(archived);
    setGroupedArchivedActivities(archivedGroup);
    setLoadingGroupedActivities(false);
    setArchived(archived);
    setUnarchived(unarchived);
  };

  const getAll = () => {
    setLoadingGroupedActivities(true);
    axios
      .get(`${BASE_URL}/activities`)
      .then((res) => {
        processData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong');
        setLoadingGroupedActivities(false);
      });
  };

  const getActivity = (id) => {
    setLoadingActivity(true);
    axios
      .get(`${BASE_URL}/activities/${id}`)
      .then((result) => {
        setActivity(result.data);
      })
      .catch((err) => {
        alert('Something went wrong');
        console.log(err);
      })
      .finally(() => setLoadingActivity(false));
  };

  const archiveActivity = (id, value) => {
    return axios
      .post(`${BASE_URL}/activities/${id}`, {
        is_archived: value
      })
      .catch((err) => {
        alert('Something went wrong');
        console.log(err);
      });
  };

  const archive = (arr, value) => {
    const promises = [];
    arr.forEach((a) => {
      const promise = axios.post(`${BASE_URL}/activities/${a.id}`, {
        is_archived: value
      });
      promises.push(promise);
    });
    Promise.all(promises)
      .then(() => {
        getAll();
      })
      .catch((err) => {
        alert('Something went wrong');
        console.log(err);
      });
  };

  const archiveAll = () => {
    archive(unarchived, true);
  };

  const unArchiveAll = () => {
    archive(archived, false);
  };

  return {
    loadingGroupedActivities,
    groupedActivities,
    groupedArchivedActivities,
    activity,
    loadingActivity,
    getAll,
    getActivity,
    archiveActivity,
    archiveAll,
    unArchiveAll
  };
};

export default useActivityApi;
