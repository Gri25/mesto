export default class Userinfo {
  constructor({ nameSelector, infoSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(infoSelector);
  }
  //Собрать
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    };
  }
  //Править
  setUserInfo({ fullName, profession }) {
    this._name.textContent = fullName;
    this._job.textContent = profession;
  }
}
