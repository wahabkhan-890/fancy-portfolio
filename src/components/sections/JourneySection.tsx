import JourneyGsapAnimations from "./JourneyGsapAnimations";

const journeyData = [
  {
    title: "2021",
    content:
      "Started programming with C and C++ basics. Built foundational understanding of programming logic and problem-solving.",
  },
  {
    title: "2022",
    content:
      "Explored Python basics. Learned fundamental concepts and wrote small scripts to understand how programming languages work.",
  },
  {
    title: "2023",
    content:
      "Started web development after matric. Learned HTML & CSS fundamentals and built small responsive projects.",
  },
  {
    title: "2023",
    content:
      "Explored JavaScript basics but faced difficulty understanding core concepts at that stage.",
  },
  {
    title: "2024",
    content:
      "Restarted JavaScript with a better approach. Covered core + advanced concepts with hands-on projects.",
  },
  {
    title: "2024",
    content:
      "Started learning React.js but paused due to difficulty in understanding deeper concepts.",
  },
  {
    title: "2024",
    content:
      "Joined SMIT Peshawar and started professional Full Stack Web Development under Sir Muhammad Osama.",
  },
  {
    title: "2025",
    content:
      "Mastered JavaScript, React.js, Git, GitHub, TypeScript and built multiple real-world projects.",
  },
  {
    title: "2025",
    content:
      "Learned Tailwind CSS, Supabase, Next.js and worked on advanced full-stack applications.",
  },
  {
    title: "2026",
    content:
      "Working as a full-stack developer building professional projects. Shipping production-ready applications with modern tech stack.",
  },
];

export function JourneySection() {
  return (
    <div className="relative w-full">
      <JourneyGsapAnimations data={journeyData} />
    </div>
  );
}