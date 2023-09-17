export const useTruncateText = () => {
  const truncateText = (text: string, truncateLength: number) =>
    text.length > truncateLength ? `${text.substring(0, truncateLength)}...` : text;

  return [truncateText];
};
