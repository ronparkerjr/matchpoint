export type OpenPlaySession = { label: string; url: string };

export type OpenPlayGroup = {
  title: string;
  note?: string;
  sessions: OpenPlaySession[];
};

export const OPEN_PLAY_GROUPS: OpenPlayGroup[] = [
  {
    title: "Beginner Open Play",
    note: "New to pickleball — paddles provided.",
    sessions: [
      { label: "Every day, 9 AM – 12 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2193314" },
      { label: "Tue & Fri, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2228910" },
    ],
  },
  {
    title: "DUPR 2.75 – 3.25",
    sessions: [
      { label: "Weekdays, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2016652" },
      { label: "Sat, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2044762" },
      { label: "Sun, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2044828" },
      { label: "Sat, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045198" },
      { label: "Sun, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2048825" },
      { label: "Mon, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045847" },
      { label: "Wed, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045858" },
      { label: "Thu, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045878" },
    ],
  },
  {
    title: "DUPR 3.25 – 3.75",
    sessions: [
      { label: "Every day, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2189052" },
      { label: "Sat, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2073148" },
      { label: "Sun, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2073149" },
      { label: "Mon, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045930" },
      { label: "Wed, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045916" },
      { label: "Thu, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045878" },
    ],
  },
  {
    title: "DUPR 3.75+ (Vetted)",
    sessions: [
      { label: "Weekdays, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2230362" },
      { label: "Sat, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2019352" },
      { label: "Sun, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2019355" },
      { label: "Mon, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045945" },
      { label: "Wed, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045956" },
      { label: "Thu, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045970" },
    ],
  },
  {
    title: "DUPR 3.0 – 3.5",
    sessions: [
      { label: "Weekdays, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2206103" },
      { label: "Tue, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045852" },
      { label: "Fri, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2020175" },
    ],
  },
  {
    title: "DUPR 3.5 – 3.99",
    sessions: [
      { label: "Weekdays, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2206074" },
      { label: "Tue, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045926" },
      { label: "Fri, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2020170" },
    ],
  },
  {
    title: "DUPR 4.0+ (Vetted)",
    sessions: [
      { label: "Weekdays, 10 AM – 1 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2016797" },
      { label: "Sat, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2016675" },
      { label: "Sun, 7 – 10 AM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2016677" },
      { label: "Tue, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045947" },
      { label: "Fri, 6 – 10 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2016078" },
    ],
  },
  {
    title: "All Levels — Discounted Open Play",
    sessions: [
      { label: "Weekdays, 1 – 4 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2045792" },
    ],
  },
  {
    title: "Late Night Rally — All Levels ($10)",
    sessions: [
      { label: "Mon & Tue, 8:30 – 11 PM", url: "https://app.courtreserve.com/Online/Events/Public/17037/2230818" },
    ],
  },
];

export const UPCOMING_TOURNAMENTS = [
  { name: "MLP CRSP Showdown", dates: "Oct 7 – 11" },
  { name: "Ohio Super Regional", dates: "Oct 24 – 25" },
  { name: "One Year Anniversary Championship Tournament", dates: "Nov 6 – 8" },
  { name: "USLPL Championship", dates: "Jan 27 – 31" },
];
