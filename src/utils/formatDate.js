export const formatDate = (dateString, localeString = "en-gb") => {
  return new Date(dateString).toLocaleDateString(localeString);
};
