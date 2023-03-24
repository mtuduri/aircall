import axios from 'axios';
import { useState } from 'react';
import { formatDate } from '../utils/DateUtils.jsx';

const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app/';

const useActivityApi = () => {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState([]);
  const [groupedActivities, setGroupedActivities] = useState([]);

  const isActivityEqual = (a1, a2) => {
    return (
      a1.from === a2.from && a1.to === a2.to && a1.via === a2.via && a1.direction === a2.direction
    );
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
      setActivities(groupedList);
      const groupByDate = groupedList.reduce((groups, current) => {
        const formatedDate = formatDate(current.created_at);
        if (!groups[formatedDate]) {
          groups[formatedDate] = [current];
        } else {
          groups[formatedDate].push(current);
        }
        return groups;
      }, {});
      setGroupedActivities(groupByDate);
    }
  };

  const getAll = () => {
    axios
      .get(`${BASE_URL}/activities`)
      .then((res) => {
        groupActivities(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getActivity = (id) => {
    axios
      .get(`${BASE_URL}/activities/${id}`)
      .then((result) => {
        setActivity(result.data);
      })
      .catch((err) => console.log(err));
  };

  const archiveAll = () => {
    const promises = [];
    activities.forEach((a) => {
      const promise = axios.post(`${BASE_URL}/activities/${a.id}`, {
        is_archived: true
      });
      promises.push(promise);
    });
    Promise.all(promises)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return {
    groupedActivities,
    activity,
    getAll,
    getActivity,
    archiveAll
  };
};

export default useActivityApi;
