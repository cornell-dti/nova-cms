let data = {
  roles: [
    "Developer",
    "Designer",
    "Product Manager",
    "Business Analyst",
    "Design Lead",
    "Mobile Platforms Lead",
    "Web Platforms Lead",
    "Business Lead"
  ],
  years: ["2019", "2020", "2021", "2022"],
  subteams: [
    "Business",
    "Course Reviews",
    "CUE",
    "Flux",
    "O-Week",
    "Queue Me In",
    "Research Connect",
    "Samewise",
    "Shout",
    "Rescuer",
    "Website"
  ]
};

function getProfileFormData(field) {
  return data[field];
}

export default getProfileFormData;
