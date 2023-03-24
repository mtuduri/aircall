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

export const greatherOrEqual = (date1, date2) => {
  return moment(date1).diff(moment(date2)) >= 0;
};

export const greatherThan5min = (date1, date2) => {
  return moment(date1).diff(moment(date2), 'minutes') >= 5;
};
