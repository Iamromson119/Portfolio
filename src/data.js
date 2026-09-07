export const projects = [
  {
    title: "Hiring Dashboard",
    signal: "Kanban-style candidate pipeline",
    description:
      "A recruitment tracker for moving candidates through five hiring stages, from applied to hired. Built the React frontend and the Express and MongoDB API from scratch, with server-side validation on every write.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "\ud83d\udcbc",
    github: "https://github.com/Iamromson119/hiring-dashboard"
  },
  {
    title: "Encore",
    signal: "Real payments, no double-booked seats",
    description:
      "Books a time slot for an event and takes a real payment through Razorpay in test mode. The core problem was concurrency: making sure two people can never both reserve the last seat.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    icon: "\ud83c\udfab",
    github: "https://github.com/Iamromson119/encore-booking-app"
  },
  {
    title: "Authentication System",
    signal: "JWT verified on an actual protected route",
    description:
      "Registration and login with bcrypt-hashed passwords, and a route that only responds if a valid JSON Web Token is attached, checked by custom Express middleware.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    icon: "\ud83d\udd10",
    github: "https://github.com/Iamromson119/Auth-User-System"
  },
  {
    title: "Meridian",
    signal: "Cart, checkout, and an admin dashboard",
    description:
      "A full-stack storefront with product catalog, persistent cart, and checkout, plus role-based access so admins can manage products and order status separately from customers.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    icon: "\ud83d\udecd\ufe0f",
    github: "https://github.com/Iamromson119/my-ecommerce"
  }
];

export const skillGroups = [
  { label: "Languages", items: ["C/C++", "Python", "JavaScript", "Java", "SQL"] },
  { label: "Web", items: ["React.js", "Node.js", "Express.js", "Flask", "REST APIs", "HTML/CSS"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
  { label: "ML & Data", items: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "OpenCV", "Scikit-Learn"] },
  { label: "Tools", items: ["Git", "GitHub", "Linux", "VS Code", "Postman"] }
];

export const education = {
  school: "Institute of Technology and Management",
  location: "Gorakhpur, UP",
  degree: "B.Tech in Artificial Intelligence and Machine Learning"
};

export const certification = {
  title: "Internship in Python Programming",
  issuer: "NIELIT, Gorakhpur",
  date: "July - August 2025",
  grade: "Grade S (80% and above)",
  url: "https://drive.google.com/file/d/1BsFfh4nWhNRgyH69MLDLpRobdKnQomAD/view?usp=sharing"
};

export const contact = {
  email: "romsonnathaniel123@gmail.com",
  github: "https://github.com/Iamromson119",
  linkedin: "https://www.linkedin.com/in/romson-nathaniel-340631338/"
};
