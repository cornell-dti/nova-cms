<template>
  <div class="profile">
    <h1 class="profile-header-main">{{`Website Profile`}}</h1>
    <select
      v-if="getUserInfo('isLead') === true"
      name="user"
      v-model="idValue"
      @change="changeUser(idValue)"
      class="profile-input profile-input--small"
    >
      <option
        :class="profile-option"
        v-for="(user, index) in getAllUsersNames()"
        :key="index"
        :value="user.netid"
      >{{user.name}}</option>
    </select>
    <h2 class="profile-header-sub">{{`Edit Profile`}}</h2>
    <div class="profile-image-wrapper">
      <div class="profile-upload-wrapper">
        <a class="profile-upload" @click="toggleShow">{{`Upload a New Picture`}}</a>
      </div>
      <my-upload
        langType="en"
        :noRotate="false"
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        url="/upload"
        :params="params"
        :headers="headers"
        img-format="png"
      ></my-upload>
      <img class="profile-image" :src="imgDataUrl">
    </div>
    <form class="profile-form">
      <div class="profile-section">
        <label for="name" class="profile-label">{{`First & Last Name`}}</label>
        <input type="text" name="name" class="profile-input" v-model="userName">
      </div>

      <div class="profile-section">
        <label for="netid" class="profile-label">{{`NetID`}}</label>
        <input type="text" name="netid" class="profile-input profile-input--small" v-model="netID">
      </div>

      <div class="profile-section">
        <label for="role" class="profile-label">{{`Role`}}</label>
        <select name="role" class="profile-input profile-input--medium" v-model="roleDescription">
          <option
            :class="profile-option"
            v-for="(role, index) in getProfileFormData('roles')"
            :key="index"
            :value="role.toLowerCase()"
          >{{role}}</option>
        </select>
      </div>

      <div class="profile-section">
        <label for="lead" class="profile-label profile-label-header">{{`Are you a lead?`}}</label>
        <div>
          <input v-model="isLead" type="radio" name="lead" class="profile-radio" value="true">
          <div class="profile-lead">{{`Yes`}}</div>
        </div>
        <div>
          <input v-model="isLead" type="radio" name="lead" class="profile-radio" value="false">
          <div class="profile-lead">{{`No`}}</div>
        </div>
      </div>

      <label
        class="profile-label profile-label-header"
      >{{`When is your projected graduation date?`}}</label>
      <div class="profile-two-column">
        <div class="profile-section">
          <select name="month" class="profile-input profile-input--medium" v-model="vMonth">
            <option
              :class="profile-option"
              v-for="(month, index) in getMonths()"
              :key="index"
              :value="month"
            >{{month}}</option>
          </select>
        </div>
        <div class="profile-section">
          <select name="year" class="profile-input profile-input--small" v-model="vYear">
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
        <input type="text" name="major" class="profile-input" v-model="major">
      </div>

      <div class="profile-section">
        <label for="secondary-major" class="profile-label">{{`Secondary Major`}}</label>
        <input type="text" name="secondary-major" class="profile-input" v-model="doubleMajor">
      </div>

      <div class="profile-section">
        <label for="minor" class="profile-label">{{`Minor`}}</label>
        <input type="text" name="minor" class="profile-input" v-model="minor">
      </div>

      <div class="profile-two-column">
        <div class="profile-section">
          <label for="state" class="profile-label">{{`State`}}</label>
          <select name="state" class="profile-input profile-input--medium" v-model="vState">
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
          <select name="country" class="profile-input profile-input--medium" v-model="vCountry">
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
        <input v-model="hometown" type="text" name="hometown" class="profile-input">
      </div>

      <div class="profile-section">
        <label for="about" class="profile-label">{{`About Me blurb`}}</label>
        <textarea name="about" class="profile-input profile-textarea" v-model="about"></textarea>
      </div>

      <div class="profile-section">
        <label for="subteam" class="profile-label">{{`Current Subteam`}}</label>
        <select name="subteam" class="profile-input profile-input--medium" v-model="vSubteam">
          <option
            :class="profile-option"
            v-for="(subteam, index) in getProfileFormData('subteams')"
            :key="index"
            :value="subteam.toLowerCase()"
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
            <input
              v-model="subteamModels[subteam]"
              class="profile-checkbox"
              type="checkbox"
              name="other-subteams"
              :value="subteam"
            >
            {{subteam}}
          </div>
        </div>
      </div>

      <div class="profile-section">
        <label for="portfolio" class="profile-label">{{`Portfolio Link`}}</label>
        <input type="text" name="portfolio" class="profile-input" v-model="website">
      </div>

      <div class="profile-section">
        <label for="github" class="profile-label">{{`Github Profile`}}</label>
        <input type="text" name="github" class="profile-input" v-model="github">
      </div>

      <div class="profile-section">
        <label for="linkedin" class="profile-label">{{`Linkedin Profile`}}</label>
        <input type="text" name="linkedin" class="profile-input" v-model="linkedin">
      </div>

      <div class="profile-section profile-button-wrapper">
        <a class="profile-button" v-on:click="constructAndPostJSON()">{{`Submit`}}</a>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 100%;
  margin: 4vh 10vw 4vh 10vw;
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
  margin-top: 20px;
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

.profile-upload {
  margin-top: 20px;
  background: #747474;
  border-radius: 19px;
  width: 75%;
  display: flex;
  font-size: 18px;
  font-weight: normal;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;

  &-wrapper {
    color: white;
    display: flex;
    justify-content: center;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as backend from "@/views/backend";
// import MemberProfileModal from "@/views/MemberProfileModal.vue";
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";

Vue.component("my-upload", myUpload);

@Component
export default class WebsiteProfile extends Vue {
  subteamModels: any = this.constructSubteamModels();

  userName: String = this.getUserInfo("name");
  netID: String = this.getUserInfo("netid");
  roleDescription: String = this.getUserInfo("roleDescription");
  isLead: boolean = this.getUserInfo("isLead");

  months: any = this.getMonths();
  vMonth: String = this.months[
    parseInt(this.getUserInfo("graduation").substring(0, 2)) - 1
  ];

  vYear: String = this.getUserInfo("graduation").substring(3);
  major: String = this.getUserInfo("major");
  doubleMajor: String = this.getUserInfo("doubleMajor");
  minor: String = this.getUserInfo("minor");
  vState: String = this.getUserInfo("hometown").substring(
    this.getUserInfo("hometown").lastIndexOf(",") + 2
  );

  // vCountry: any = this.getUserInfo('country'); TODO - country not in dataset

  hometown: String = this.getUserInfo("hometown").substring(
    0,
    this.getUserInfo("hometown").lastIndexOf(",")
  );
  about: String = this.getUserInfo("about");
  vSubteam: String = this.getUserInfo("subteam");

  website: String = this.getUserInfo("website");
  github: String = this.getUserInfo("github");
  linkedin: String = this.getUserInfo("linkedin");

  constructAndPostJSON() {
    let json = {
      name: this.userName,
      netid: this.netID,
      roleDescription: this.roleDescription,
      isLead: this.isLead,
      month: this.vMonth,
      year: this.vYear,
      major: this.major,
      doubleMajor: this.doubleMajor,
      minor: this.minor,
      state: this.vState,
      hometown: this.hometown,
      about: this.about,
      subteam: this.vSubteam,
      website: this.website,
      linkedin: this.linkedin,
      github: this.github
    };
    // TODO - SEND POST REQUEST
    // backend.editable();
    // backend.postUpdate(this.netID, json);
  }

  profile: any = null;
  option: any = null;
  idValue: any = this.getUserInfo("netid");
  show: boolean = false;
  params: any = {
    token: "123456798",
    name: "avatar"
  };

  props: any = {
    langType: "en"
  };
  headers: any = {
    smail: "*_~"
  };
  imgDataUrl: String = ""; // the datebase64 url of created image

  toggleShow() {
    this.show = !this.show;
  }

  /**
   * crop success
   *
   * [param] imgDataUrl
   * [param] field
   */
  cropSuccess(imgDataUrl: any, field: any) {
    console.log("-------- crop success --------");
    this.imgDataUrl = imgDataUrl;
  }

  /**
   * upload success
   *
   * [param] jsonData  server api return data, already json encode
   * [param] field
   */
  cropUploadSuccess(jsonData: any, field: any) {
    console.log("-------- upload success --------");
    console.log(jsonData);
    console.log("field: " + field);
  }
  /**
   * upload fail
   *
   * [param] status    server api return error status, like 500
   * [param] field
   */
  cropUploadFail(status: any, field: any) {
    console.log("-------- upload fail --------");
    console.log(status);
    console.log("field: " + field);
  }

  // MemberProfileModal = MemberProfileModal;
  getProfileFormData(field: any) {
    return backend.getProfileFormData(field);
  }

  changeUser(netid: any) {
    backend.initUser(netid).then(response => {
      this.setFields();
    });
  }

  setFields() {
    this.subteamModels = this.constructSubteamModels();

    this.userName = this.getUserInfo("name");
    this.netID = this.getUserInfo("netid");
    this.idValue = this.getUserInfo("netid");

    this.roleDescription = this.getUserInfo("roleDescription");
    this.isLead = this.getUserInfo("isLead");

    this.vMonth = this.months[
      parseInt(this.getUserInfo("graduation").substring(0, 2)) - 1
    ];

    this.vYear = this.getUserInfo("graduation").substring(3);
    this.major = this.getUserInfo("major");
    this.doubleMajor = this.getUserInfo("doubleMajor");
    this.minor = this.getUserInfo("minor");
    this.vState = this.getUserInfo("hometown").substring(
      this.getUserInfo("hometown").lastIndexOf(",") + 2
    );
    //TODO does country exist in the data?
    // this.vCountry = this.getUserInfo('country');
    this.hometown = this.getUserInfo("hometown").substring(
      0,
      this.getUserInfo("hometown").lastIndexOf(",")
    );
    this.about = this.getUserInfo("about");
    this.vSubteam = this.getUserInfo("subteam");

    this.website = this.getUserInfo("website");
    this.github = this.getUserInfo("github");
    this.linkedin = this.getUserInfo("linkedin");
  }

  constructSubteamModels() {
    let subteams = this.getProfileFormData("subteams");
    let subteamModel = <any>{};
    let otherSubteams = this.getUserInfo("otherSubteams");
    subteams.forEach(function(subteam: any) {
      subteamModel[subteam] =
        otherSubteams && otherSubteams.includes(subteam.toLowerCase());
    });

    return subteamModel;
  }

  getUserInfo(field: any) {
    return backend.getUserInfo(field);
  }

  getAllUsersNames(field: any) {
    return backend.getAllUsersNames();
  }

  getMonths() {
    return backend.getMonths();
  }

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
