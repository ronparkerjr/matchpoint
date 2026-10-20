import LocalLanding from "@/components/LocalLanding";

const PickleballLessonsColumbus = () => (
  <LocalLanding
    h1="Pickleball Lessons in Columbus, Ohio"
    subtitle="Private coaching, group clinics, and beginner classes on 38 indoor courts — year-round, rain or shine."
    intro={[
      "Looking for pickleball lessons in Columbus, OH? Match Point Pickleball Club is Columbus's largest indoor pickleball facility, with 38 climate-controlled courts at 350 McCormick Blvd. Our certified coaching staff — led by Head Pro Rachel McCreery — teaches everyone from first-time players to 4.5+ tournament competitors.",
      "Because every court is indoors, lessons run on schedule all year: no cancelled sessions for Ohio winters, summer heat, or rain. Book a private lesson, join a beginner clinic, or bring a group of friends for a semi-private session.",
    ]}
    highlightsTitle="Ways to Learn at Match Point"
    highlights={[
      {
        title: "Private Lessons",
        body: "One-on-one coaching tailored to your level and goals — serve mechanics, dinking, resets, third-shot drops, and match strategy.",
      },
      {
        title: "Group Clinics",
        body: "Skill-focused clinics for beginner, intermediate, and advanced players. Great value and a fast way to meet other Columbus players.",
      },
      {
        title: "Intro to Pickleball",
        body: "Never held a paddle? Our beginner class covers rules, scoring, and the kitchen — paddles provided, no experience needed.",
      },
    ]}
    bullets={[
      "38 indoor courts — lessons never get rained out",
      "Certified, experienced Columbus-area coaching staff",
      "Beginner-friendly: loaner paddles available",
      "Junior and adult programming",
      "PlaySight SmartCourt video review on select courts",
      "Free parking on Columbus's northeast side",
    ]}
    faqs={[
      {
        q: "How much do pickleball lessons cost in Columbus?",
        a: "Rates vary by coach and format — private lessons are priced per session, and group clinics are lower per player. Call 614-569-2556 or email support@matchpointpickleballclub.com for current pricing and coach availability.",
      },
      {
        q: "Do I need to be a member to take lessons?",
        a: "No. Lessons and clinics are open to both members and non-members, though Match Point members receive member pricing on programs and court time.",
      },
      {
        q: "Do I need my own paddle?",
        a: "No. Loaner paddles and balls are available for beginner lessons and clinics. Wear court shoes and comfortable athletic clothing.",
      },
      {
        q: "Where are the lessons held?",
        a: "All lessons take place indoors at Match Point Pickleball Club, 350 McCormick Blvd, Columbus, OH — open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM.",
      },
      {
        q: "Do you offer lessons for kids?",
        a: "Yes. We offer junior instruction and family-friendly programming. Contact us for current junior clinic schedules.",
      },
    ]}
    ctaTitle="Book Your First Lesson"
    ctaBody="Tell us your level and availability, and we'll match you with the right coach at Columbus's largest indoor pickleball club."
    primaryCta={{ label: "Meet Our Instructors", to: "/pickleball-instruction", conversion: "lesson_inquiry" }}
    secondaryCta={{ label: "Contact Us", to: "/contact-us", conversion: "lesson_inquiry" }}
    relatedLinks={[
      { label: "Pickleball Leagues in Columbus", to: "/pickleball-leagues-columbus" },
      { label: "Indoor Pickleball Court Booking", to: "/indoor-pickleball-courts-columbus" },
      { label: "Memberships", to: "/memberships" },
      { label: "Our Facility", to: "/our-facility" },
    ]}
  />
);

export default PickleballLessonsColumbus;
