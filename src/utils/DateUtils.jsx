import moment from 'moment';

export const formatTime = (date) => {
  const momentDate = moment(date);
  return momentDate.format('hh:mm');
};

export const formatTimeType = (date) => {
  const momentDate = moment(date);
  return momentDate.format('A');
};

export const formatDate = (date) => {
  const momentDate = moment(date);
  return momentDate.format('LL');
};
