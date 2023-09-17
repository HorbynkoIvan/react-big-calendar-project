import { EventProps } from "../interfaces";

const now = new Date();

const eventsMock: EventProps[] = [
  {
    id: 0,
    title: "All Day Event very long title",
    start: new Date(2023, 8, 20),
    end: new Date(2023, 8, 20),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2023, 8, 17),
    end: new Date(2023, 8, 17),
  },
  {
    id: 2,
    title: "New Year",
    start: new Date(2023, 0, 1, 0, 0, 0),
    end: new Date(2023, 0, 1, 0, 0, 0),
  },
  {
    id: 3,
    title: "Still New Year",
    start: new Date(2023, 0, 2, 0, 0, 0),
    end: new Date(2023, 0, 2, 0, 0, 0),
  },
  {
    id: 4,
    title: "Some Event",
    start: new Date(2023, 8, 18, 0, 0, 0),
    end: new Date(2023, 8, 18, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2023, 8, 19),
    end: new Date(2023, 8, 19),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2023, 8, 19, 10, 120, 0, 0),
    end: new Date(2023, 8, 19, 11, 120, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2023, 8, 14, 11, 0, 0, 0),
    end: new Date(2023, 8, 14, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2023, 8, 22, 14, 0, 0, 0),
    end: new Date(2023, 8, 22, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2023, 8, 22, 17, 0, 0, 0),
    end: new Date(2023, 8, 22, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2023, 8, 22, 20, 0, 0, 0),
    end: new Date(2023, 8, 22, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: new Date(2023, 8, 23, 8, 0, 0),
    end: new Date(2023, 8, 23, 10, 30, 0),
  },
  {
    id: 12,
    title: "Inconvenient Conference Call",
    start: new Date(2023, 8, 18, 9, 30, 0),
    end: new Date(2023, 8, 18, 11, 0, 0),
  },
  {
    id: 13,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2023, 8, 19, 11, 30, 0),
    end: new Date(2023, 8, 19, 14, 0, 0),
  },
  {
    id: 14,
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2023, 8, 19, 15, 30, 0),
    end: new Date(2023, 8, 19, 16, 0, 0),
  },
  {
    id: 15,
    title: "Late Night Event",
    start: new Date(2023, 8, 19, 17, 30, 0),
    end: new Date(2023, 8, 19, 18, 0, 0),
  },
  {
    id: 16,
    title: "Late Same Night Event",
    start: new Date(2023, 8, 17, 19, 30, 0),
    end: new Date(2023, 8, 17, 23, 30, 0),
  },
  {
    id: 17,
    title: "Multi-day Event",
    start: new Date(2023, 8, 20, 19, 30, 0),
    end: new Date(2023, 8, 20, 20, 0, 0),
  },
  {
    id: 18,
    title: "Today",
    start: new Date(2023, 8, 20, 14, 30, 0),
    end: new Date(2023, 8, 20, 15, 0, 0),
  },
  {
    id: 19,
    title: "Today",
    start: now,
    end: now,
  },
  {
    id: 20,
    title: "Video Record",
    start: new Date(2023, 8, 14, 15, 30, 0),
    end: new Date(2023, 8, 14, 19, 0, 0),
  },
  {
    id: 21,
    title: "Dutch Song Producing",
    start: new Date(2023, 8, 14, 16, 30, 0),
    end: new Date(2023, 8, 14, 20, 0, 0),
  },
  {
    id: 22,
    title: "Itaewon Halloween Meeting",
    start: new Date(2023, 8, 14, 16, 30, 0),
    end: new Date(2023, 8, 14, 17, 30, 0),
  },
  {
    id: 23,
    title: "Online Coding Test",
    start: new Date(2023, 8, 14, 17, 30, 0),
    end: new Date(2023, 8, 14, 20, 30, 0),
  },
  {
    id: 24,
    title: "An overlapped Event",
    start: new Date(2023, 8, 14, 17, 0, 0),
    end: new Date(2023, 8, 14, 18, 30, 0),
  },
  {
    id: 25,
    title: "Phone Interview",
    start: new Date(2023, 8, 14, 17, 0, 0),
    end: new Date(2023, 8, 14, 18, 30, 0),
  },
  {
    id: 26,
    title: "Cooking Class",
    start: new Date(2023, 8, 14, 17, 30, 0),
    end: new Date(2023, 8, 14, 19, 0, 0),
  },
  {
    id: 27,
    title: "Go to the gym",
    start: new Date(2023, 8, 14, 18, 30, 0),
    end: new Date(2023, 8, 14, 20, 0, 0),
  },
];

export const useEventsMock = () => eventsMock;
