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
  ],
  members: [
    {
      name: "Evan Welsh",
      email: "3/24/19",
      type: "Admin",
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
    },
    {
      name: "LinkedIn Profile",
      email: "3/24/19",
      type: "Admin",
      edits: []
    },
    {
      name: "LinkedIn Profile",
      email: "3/24/19",
      type: "Admin",
      edits: []
    }
  ],
  products: [
    {
      name: "Shout",
      color: "#C4C4C4"
    },
    {
      name: "CUE",
      color: "#D187FF"
    },
    {
      name: "Samwise",
      color: "#C4C4C4"
    },
    {
      name: "Queue Me In",
      color: "#9BD5FF"
    },
    {
      name: "Flux",
      color: "#F5EE4C"
    },
    {
      name: "Course Reviews",
      color: "#C4C4C4"
    },
    {
      name: "Research Connect",
      color: "#FE8484"
    }
  ],
  pages: [
    {
      name: "Sponsorship"
    },
    {
      name: "Initatives"
    },
    {
      name: "Team"
    }
  ]
};

export function getProfileFormData(field: any) {
  return (data as any) [field];
}

export function getEditsFromName(name:  any) {
  data.members.forEach(function(member) {
    console.log(member);
    if (member.name === name) {
      return member.edits;
    }
  });
}

// export function getAllEdits() {
//   let list: [];

//   data.members.forEach(function(member) {
//     member.edits.forEach(function(edit) {
//       edit[name] = member.name;
//        // @ts-ignore
//       list.push(edit);
//     });
//   });
//  // @ts-ignore
//   return list;
// }
import axios from 'axios';
let userInfoJSON: any = null;

export function initUser(userID: any) {
  const base = 'https://dti-nova-cms-api.herokuapp.com/';
  return axios.get(`${base}member/${userID}`)
  .then(response => {
    userInfoJSON = response.data;
  });
}

export function getUserInfo(field: any) {
  return userInfoJSON[field];
}
