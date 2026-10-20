export interface NearbyCity {
  /** URL path, e.g. /pickleball-westerville-oh */
  path: string;
  city: string;
  /** e.g. "Westerville, OH" */
  cityState: string;
  /** Approximate drive time / direction from the club */
  drive: string;
  /** City-specific opening paragraph (unique per page) */
  lede: string;
  /** Landmarks / neighborhoods used in copy */
  landmarks: string[];
  /** Zip codes served, used in FAQ copy */
  zips: string;
  /** Why local players choose Match Point (city-specific angle) */
  localAngle: string;
}

export const NEARBY_CITIES: NearbyCity[] = [
  {
    path: "/pickleball-gahanna-oh",
    city: "Gahanna",
    cityState: "Gahanna, OH",
    drive: "about 10 minutes from downtown Gahanna",
    lede:
      "Gahanna players have the shortest drive to Columbus's largest indoor pickleball facility. Match Point sits just off I-270 at 350 McCormick Blvd, roughly ten minutes from Creekside and the Gahanna–Jefferson schools, with 38 climate-controlled courts, leagues, lessons, and daily open play.",
    landmarks: ["Creekside", "Big Walnut Trail", "Gahanna–Jefferson", "Academy Park"],
    zips: "43016, 43219, 43230 and 43004",
    localAngle:
      "Outdoor courts around Gahanna fill up fast in summer and disappear in winter. Match Point runs the same schedule in January as it does in July.",
  },
  {
    path: "/pickleball-reynoldsburg-oh",
    city: "Reynoldsburg",
    cityState: "Reynoldsburg, OH",
    drive: "roughly 12 minutes northwest of Reynoldsburg",
    lede:
      "For Reynoldsburg players, Match Point is a straight shot up I-270 — about twelve minutes from Main Street. Instead of waiting for a free outdoor court at a city park, you can reserve one of 38 indoor courts by the hour, join a skill-based league, or book a lesson with a certified coach.",
    landmarks: ["Reynoldsburg Main Street", "Blacklick Woods", "Summit Road", "Taylor Road"],
    zips: "43068 and 43004",
    localAngle:
      "Reynoldsburg league nights, junior clinics, and drop-in sessions all run indoors, so nothing gets cancelled for weather.",
  },
  {
    path: "/pickleball-new-albany-oh",
    city: "New Albany",
    cityState: "New Albany, OH",
    drive: "about 15 minutes south of New Albany",
    lede:
      "New Albany pickleball players use Match Point as their year-round home court. It's about fifteen minutes down Route 62 and I-270 from the Village Center, and it offers something no outdoor court can: 38 indoor courts, certified coaching, PlaySight video review, and organized league play seven days a week.",
    landmarks: ["New Albany Village Center", "Rose Run Park", "Market Square", "Route 62"],
    zips: "43054 and 43230",
    localAngle:
      "Competitive New Albany players like the 3.5–4.5+ divisions and the on-court video review for breaking down third-shot drops and resets.",
  },
  {
    path: "/pickleball-westerville-oh",
    city: "Westerville",
    cityState: "Westerville, OH",
    drive: "about 20 minutes southeast of Uptown Westerville",
    lede:
      "Westerville has a deep pickleball community and not nearly enough indoor court time. Match Point adds 38 indoor courts about twenty minutes from Uptown — reservable by the hour, with men's, women's, and mixed leagues, beginner clinics, and private lessons from certified coaches.",
    landmarks: ["Uptown Westerville", "Otterbein University", "Hoover Reservoir", "Alum Creek Trail"],
    zips: "43081, 43082 and 43085",
    localAngle:
      "Westerville groups often book two or three adjacent courts so a whole crew can rotate together — easy to arrange with 38 courts under one roof.",
  },
  {
    path: "/pickleball-pickerington-oh",
    city: "Pickerington",
    cityState: "Pickerington, OH",
    drive: "about 20 minutes north of Pickerington",
    lede:
      "Pickerington players are roughly twenty minutes from Match Point via I-70 and I-270. Whether you're learning the kitchen line for the first time or chasing a 4.0 rating, you'll find beginner classes, drop-in open play, and year-round leagues on 38 indoor courts at 350 McCormick Blvd.",
    landmarks: ["Olde Pickerington Village", "Sycamore Creek Park", "Refugee Road", "Pickerington Ponds"],
    zips: "43147 and 43110",
    localAngle:
      "Pickerington families take advantage of junior programming and the family membership, plus golf simulators and table tennis in the same building.",
  },
  {
    path: "/pickleball-dublin-oh",
    city: "Dublin",
    cityState: "Dublin, OH",
    drive: "about 30 minutes east of Dublin via I-270",
    lede:
      "Dublin players make the trip around I-270 for one reason: court availability. Match Point's 38 indoor courts mean you can reserve prime-time court time, enter a league that actually has an open division, or book a private lesson without a month-long wait list.",
    landmarks: ["Historic Dublin", "Bridge Park", "Scioto River trails", "Muirfield"],
    zips: "43016, 43017 and 43065",
    localAngle:
      "Dublin corporate groups and leagues book the club for tournaments and team events, with a café and pro shop on site.",
  },
];

export const findCityByPath = (path: string) =>
  NEARBY_CITIES.find((c) => c.path === path);
