import { username, profession } from "../utils/constants.js";

export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = nameSelector;
    this._job = jobSelector;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo() {
    username.textContent = this._name.value;
    profession.textContent = this._job.value;
  }
}
