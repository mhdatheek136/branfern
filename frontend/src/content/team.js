const image = (src, alt) => ({ src, alt });

export const teamMembers = [
  {
    _id: "team-1",
    name: "Amani Fayad",
    role: "Creative Director",
    instagramUrl: "https://instagram.com/branfern",
    image: image("/content/team/team-1.svg", "Amani Fayad portrait placeholder"),
  },
  {
    _id: "team-2",
    name: "Rizwan Kareem",
    role: "Brand Strategist",
    instagramUrl: "https://instagram.com/branfern",
    image: image("/content/team/team-2.svg", "Rizwan Kareem portrait placeholder"),
  },
  {
    _id: "team-3",
    name: "Mina Joseph",
    role: "Digital Designer",
    instagramUrl: "https://instagram.com/branfern",
    image: image("/content/team/team-3.svg", "Mina Joseph portrait placeholder"),
  },
];
