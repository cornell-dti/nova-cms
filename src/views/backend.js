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
  ],
  edits: [
    {
      name: "LinkedIn Profile",
      date: "3/24/19",
      content: "https://www.linkedin.com/in/evan-welsh-291577141/",
      status: "Pending"
    },
    {
      name: "Current Subteam",
      date: "3/20/19",
      content: "Flux",
      status: "Rejected"
    },
    {
      name: "First & Last Name",
      date: "3/14/19",
      content: "Evan Welsh",
      status: "Approved"
    }
  ]
};

function getProfileFormData(field) {
  return data[field];
}

export default getProfileFormData;
