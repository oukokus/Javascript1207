//バリデーションチェック
function check() {
  let getText = document.getElementById("text");
  let getMessage1 = document.getElementById("message1");
  let getPassword = document.getElementById("password");
  let getMessage2 = document.getElementById("message2");
  let textValue = getText.value;
  let passwordValue = getPassword.value;
  let str = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
  let trueFalse = true;

  if (str.test(textValue)) {
    getMessage1.textContent = "";
  } else {
    getMessage1.innerHTML = "IDへは半角英数字記号のみで記入して下さい";
    getText.style.border = "1px #e22 solid";
    trueFalse = false;
  }

  if (str.test(passwordValue)) {
    getMessage2.textContent = "";
  } else {
    getMessage2.innerHTML = "Passwordへは半角英数字記号のみで記入して下さい";
    getPassword.style.border = "1px #e22 solid";
    trueFalse = false;
  }

  if (textValue == "") {
    getMessage1.innerHTML = "IDが未入力です";
    trueFalse = false;
  }

  if (passwordValue == "") {
    getMessage2.innerHTML = "Passwordが未入力です";
    trueFalse = false;
  }

  return trueFalse;
}

//新規情報追加
let getEmployeeName = document.getElementById("employeeName");
let getRuby = document.getElementById("ruby");
let getBirthday = document.getElementById("birthday");
let getAge = document.getElementById("age");
let getCompany = document.getElementById("company");
let getAddress = document.getElementById("address");
let getTel = document.getElementById("tel");
let getDepartment = document.getElementById("department");
function buttonClick() {
  let getListMessage1 = document.getElementById("listMessage1");
  let getListMessage2 = document.getElementById("listMessage2");
  let getListMessage3 = document.getElementById("listMessage3");
  let getListMessage4 = document.getElementById("listMessage4");
  let getListMessage5 = document.getElementById("listMessage5");
  let getListMessage6 = document.getElementById("listMessage6");
  let getListMessage7 = document.getElementById("listMessage7");
  let getListMessage8 = document.getElementById("listMessage8");
  let trueFalse2 = true;

  //名前
  if (getEmployeeName.value == "") {
    getListMessage1.innerHTML = "社員名が未入力です";
    trueFalse2 = false;
  } else if (
    /[0-9!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g.test(getEmployeeName.value)
  ) {
    getEmployeeName.style.border = " 2px #e22 solid";
    getListMessage1.innerHTML = "記号、数字は入力できません。";
    trueFalse2 = false;
  } else {
    getListMessage1.textContent = "";
    getEmployeeName.style.border = "2px #333 solid";
  }
  //ふりがな
  if (getRuby.value == "") {
    getListMessage2.innerHTML = "ふりがなが未入力です";
    trueFalse2 = false;
  } else if (/^[ぁ-んー]*$/.test(getRuby.value)) {
    getListMessage2.textContent = "";
  } else {
    getListMessage2.innerHTML = "ふりがなは全角ひらがなで記入してください";
    getRuby.style.border = "2px #e22 solid";
    trueFalse2 = false;
  }
  //生年月日
  if (getBirthday.value == "") {
    getListMessage3.innerHTML = "生年月日が未入力です";
    trueFalse2 = false;
  }

  //年齢
  if (getAge.value == "") {
    getListMessage4.innerHTML = "年齢が未入力です";
    trueFalse2 = false;
  } else if (/^[0-9]+$/.test(getAge.value)) {
    getListMessage4.textContent = "";
  } else {
    getListMessage4.innerHTML = "年齢は半角数字で記入してください";
    getAge.style.border = "2px #e22 solid";
    trueFalse2 = false;
  }
  //入社日
  if (getCompany.value == "") {
    getListMessage5.innerHTML = "生年月日が未入力です";
    trueFalse2 = false;
  }
  //住所
  if (getAddress.value == "") {
    getListMessage6.innerHTML = "住所が未入力です";
    trueFalse2 = false;
  } else if (
    /[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g.test(getAddress.value)
  ) {
    getListMessage6.innerHTML = "記号は入力できません";
    getAddress.style.border = "2px #e22 solid";
    trueFalse2 = false;
  } else {
    getListMessage6.textContent = "";
    getAddress.style.border = "2px #333 solid";
  }
  //電話番号
  if (getTel.value == "") {
    getListMessage7.innerHTML = "電話番号が未入力です";
    trueFalse2 = false;
  } else if (/^[0-9]+$/.test(getTel.value)) {
    getListMessage7.textContent = "";
  } else {
    getListMessage7.innerHTML = "電話番号は半角数字で記入してください";
    getTel.style.border = "2px #e22 solid";
    trueFalse2 = false;
  }
  //所属部署
  if (getDepartment.value == "") {
    getListMessage8.innerHTML = "所属部署が未入力です";
    trueFalse2 = false;
  } else if (
    /[0-9!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g.test(getDepartment.value)
  ) {
    getListMessage8.innerHTML = "記号、数字は入力できません。";
    getDepartment.style.border = "2px #e22 solid";
    trueFalse2 = false;
  } else {
    getListMessage8.textContent = "";
    getDepartment.style.border = "2px #333 solid";
  }
  return trueFalse2;
}
//誕生日入力後、年齢を出力
birthday.addEventListener("input", function () {
  let getBirthday = document.getElementById("birthday").value;
  let today = new Date();
  let birthday = new Date(getBirthday);
  let diff = today.getTime() - birthday.getTime();
  let daysPast = Math.floor(diff / (1000 * 24 * 60 * 60));
  let age = Math.floor(daysPast / 365);
  document.getElementById("age").value = age;
});

//新しい情報を追加する

let getRegisterBtn = document.getElementById("registerBtn");
getRegisterBtn.addEventListener("click", function () {
  let list = document.getElementsByClassName("listMessage");

  if (buttonClick(false)) {
    let getTable = document.getElementById("table");
    let newRow = getTable.insertRow(-1);
    let tr = document.createElement("tr");
    getTable.appendChild(tr);
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let td9 = document.createElement("td");
    let td10 = document.createElement("td");
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(td5);
    newRow.appendChild(td6);
    newRow.appendChild(td7);
    newRow.appendChild(td8);
    newRow.appendChild(td9);
    newRow.appendChild(td10);

    //生年月日と入社日を一覧に追加する際に形式を〇〇年〇〇月〇〇日形式で表示
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    let now = new Date(getBirthday.value);
    let dateString = now.toLocaleDateString("ja-JP", options);
    let nows = new Date(company.value);
    let dateStringCompany = nows.toLocaleDateString("ja-JP", options);
    //
    let getCheckbox = document.getElementById("checkBox");
    let cloned = getCheckbox.cloneNode(false);
    td1.appendChild(cloned);
    td3.innerHTML = employeeName.value;
    td4.innerHTML = getRuby.value;
    td5.innerHTML = dateString;
    td6.innerHTML = age.value;
    td7.innerHTML = dateStringCompany;
    td8.innerHTML = address.value;
    td9.innerHTML = tel.value;
    td10.innerHTML = department.value;


   
  }
});
