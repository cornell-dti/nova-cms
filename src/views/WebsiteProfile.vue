<template>
  <div class="profile">
    <h1 class="profile-header-main">{{`Website Profile`}}</h1>
    <h2 class="profile-header-sub">{{`Edit Profile`}}</h2>
    <div class="profile-image-wrapper">
      <img class="profile-image" src="https://www.cornelldti.org/static/members/ew469.jpg">
    </div>
    <form class="profile-form">
      <div class="profile-section">
        <label for="name" class="profile-label">{{`First & Last Name`}}</label>
        <input type="text" name="name" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="netid" class="profile-label">{{`NetID`}}</label>
        <input type="text" name="netid" class="profile-input profile-input--small">
      </div>

      <div class="profile-section">
        <label for="role" class="profile-label">{{`Role`}}</label>
        <select name="role" class="profile-input profile-input--medium">
          <option
            :class="profile-option"
            v-for="(role, index) in getProfileFormData('roles')"
            :key="index"
            :value="role"
          >{{role}}</option>
        </select>
      </div>

      <div class="profile-section">
        <label for="lead" class="profile-label profile-label-header">{{`Are you a lead?`}}</label>
        <div>
          <input type="radio" name="lead" class="profile-radio" value="yes">
          <div class="profile-lead">{{`Yes`}}</div>
        </div>
        <div>
          <input type="radio" name="lead" class="profile-radio" value="no">
          <div class="profile-lead">{{`No`}}</div>
        </div>
      </div>

      <label
        class="profile-label profile-label-header"
      >{{`When is your projected graduation date?`}}</label>
      <div class="profile-two-column">
        <div class="profile-section">
          <select name="month" class="profile-input profile-input--medium">
            <option
              :class="profile-option"
              v-for="(month, index) in months"
              :key="index"
              :value="month"
            >{{month}}</option>
          </select>
        </div>
        <div class="profile-section">
          <select name="year" class="profile-input profile-input--small">
            <option
              :class="profile-option"
              v-for="(year, index) in getProfileFormData('years')"
              :key="index"
              :value="year"
            >{{year}}</option>
          </select>
        </div>
      </div>

      <div class="profile-section">
        <label for="major" class="profile-label">{{`Major`}}</label>
        <input type="text" name="major" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="secondary-major" class="profile-label">{{`Secondary Major`}}</label>
        <input type="text" name="secondary-major" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="minor" class="profile-label">{{`Minor`}}</label>
        <input type="text" name="minor" class="profile-input">
      </div>

      <div class="profile-two-column">
        <div class="profile-section">
          <label for="state" class="profile-label">{{`State`}}</label>
          <select name="state" class="profile-input profile-input--medium">
            <option
              :class="profile-option"
              v-for="(state, index) in states"
              :key="index"
              :value="state"
            >{{state}}</option>
          </select>
        </div>

        <div class="profile-section">
          <label for="country" class="profile-label">{{`Country`}}</label>
          <select name="country" class="profile-input profile-input--medium">
            <option
              :class="profile-option"
              v-for="(country, index) in countries"
              :key="index"
              :value="country"
            >{{country}}</option>
          </select>
          <div class="profile-country-blurb">{{`Please only fill out if you are not from the US`}}</div>
        </div>
      </div>

      <div class="profile-section">
        <label for="hometown" class="profile-label">{{`Hometown`}}</label>
        <input type="text" name="hometown" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="about" class="profile-label">{{`About Me blurb`}}</label>
        <textarea name="about" class="profile-input profile-textarea"></textarea>
      </div>

      <div class="profile-section">
        <label for="subteam" class="profile-label">{{`Current Subteam`}}</label>
        <select name="subteam" class="profile-input profile-input--medium">
          <option
            :class="profile-option"
            v-for="(subteam, index) in getProfileFormData('subteams')"
            :key="index"
            :value="subteam"
          >{{subteam}}</option>
        </select>
      </div>

      <div class="profile-section">
        <label
          for="other-subteams"
          class="profile-label profile-label-header"
        >{{`What other subteams were you on?`}}</label>
        <div class="profile-checkbox-wrapper">
          <div
            class="profile-checkbox-single"
            v-for="(subteam, index) in getProfileFormData('subteams')"
            :key="index"
          >
            <input class="profile-checkbox" type="checkbox" name="other-subteams" :value="subteam">
            {{subteam}}
          </div>
        </div>
      </div>

      <div class="profile-section">
        <label for="portfolio" class="profile-label">{{`Portfolio Link`}}</label>
        <input type="text" name="portfolio" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="github" class="profile-label">{{`Github Profile`}}</label>
        <input type="text" name="github" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="linkedin" class="profile-label">{{`Linkedin Profile`}}</label>
        <input type="text" name="linkedin" class="profile-input">
      </div>

      <div class="profile-section profile-button-wrapper">
        <input type="submit" value="Submit" class="profile-button">
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.profile {
  margin-left: 20%;
  margin-right: 20%;
  font-size: 18px;
  font-weight: 500;
}

.profile-header {
  &-main {
    text-decoration-line: underline;
    font-weight: normal;
    font-size: 30px;
  }
  &-sub {
    font-size: 28px;
    font-weight: normal;
    text-align: left;
    margin-bottom: 0;
  }
}

.profile-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 220px;
  border-radius: 25px;
}

.profile-input {
  border: 1px solid #747474;
  box-sizing: border-box;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  min-height: 45px;
  width: 100%;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  color: #747474;

  &--small {
    width: 33%;
  }

  &--medium {
    width: 66%;
  }
}

.profile-lead {
  font-size: 18px;
  color: #747474;
  margin-left: 20px;
  display: inline;
}

.profile-textarea {
  min-height: 200px;
}

.profile-radio {
  margin-left: 10px;
  margin-bottom: 5px;
}

.profile-checkbox {
  &-wrapper {
    margin-left: 20px;
    font-size: 18px;
    color: #747474;
  }
  &-single {
    margin-bottom: 10px;
  }
}

.profile-two-column {
  display: flex;
}

.profile-country-blurb {
  color: #747474;
  font-size: 14px;
  margin-left: 5px;
}

.profile-form {
  text-align: left;
}

.profile-section {
  width: 100%;
  display: block;
}

.profile-label {
  margin: 20px 0 5px 15px;
  font-weight: normal;
  display: block;
  font-size: 20px;

  &-header {
    font-weight: 600;
    margin-bottom: 20px;
    margin-left: 0px;
  }
}

.profile-button {
  border-radius: 20px;
  background: #ff324a;
  color: white;
  font-size: 24px;
  min-height: 90px;
  min-width: 260px;
  margin-top: 50px;

  &-wrapper {
    text-align: center;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as backend from "@/views/backend";
// import MemberProfileModal from "@/views/MemberProfileModal.vue";

export default class WebsiteProfile extends Vue {
  getProfileFormData: Function = backend.getProfileFormData;
  // MemberProfileModal = MemberProfileModal;
  months: Array<String> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  states: Array<String> = [
    "Other",
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
  ];

  countries: Array<String> = [
    "United States",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
}
</script>
