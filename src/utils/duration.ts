export const formatMillis = (millis: number): string => {
  const seconds = Math.floor((millis % 60000) / 1000).toString();
  const minutes = Math.floor(millis / 60000).toString();
  return `${minutes.padStart(2, "0")}m:${seconds.padStart(2, "0")}s`;
};
