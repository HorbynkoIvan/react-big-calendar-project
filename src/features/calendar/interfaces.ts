export type EventsType = {
  id?: number;
  image: string;
  date: string;
  title: string;
  isBadge: boolean;
};

export type EventItemType = {
  id: number;
  img: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  status: string;
  site: null | string;
};
