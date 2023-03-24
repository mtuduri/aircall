import axios from 'axios';
import { useState } from 'react';
import { formatDate } from '../utils/DateUtils.jsx';

const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app/';

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
      a1.from === a2.from && a1.to === a2.to && a1.via === a2.via && a1.direction === a2.direction
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
    const archivedGroup = groupActivities(archived);
    setGroupedActivities(archivedGroup);
    const unarchivedGroup = groupActivities(unarchived);
    setGroupedArchivedActivities(unarchivedGroup);
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
      .catch((err) => console.log(err))
      .finally(() => setLoadingActivity(false));
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
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const archiveAll = () => {
    archive(unarchived, true);
    getAll();
  };

  const unArchiveAll = () => {
    archive(archived, false);
    getAll();
  };

  return {
    loadingGroupedActivities,
    groupedActivities,
    groupedArchivedActivities,
    activity,
    loadingActivity,
    getAll,
    getActivity,
    archiveAll,
    unArchiveAll
  };
};

export default useActivityApi;
