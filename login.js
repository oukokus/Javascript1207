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
    //チェックボックスの複製
    let getCheckbox = document.getElementById("checkBox");
    let cloned = getCheckbox.cloneNode(false);
    td1.appendChild(cloned);
    td2.innerHTML = getTable.rows.length - 1;
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

//ソート機能

async function callApi() {
  const res = await fetch("db.json");
  const users = await res.json();
  return users;
}

async function api() {
  let call = await callApi();
  let getSelectValue = document.getElementById("selectValue");
  let valueSelect = getSelectValue.value;
  if (valueSelect == "nameTop") {
    //名前の昇順
    call.sort(function (a, b) {
      if (a.furigana > b.furigana) {
        return 1;
      } else if (a.furigana < b.furigana) {
        return -1;
      } else {
        return 0;
      }
    });
    //名前の降順
  } else if (valueSelect == "nameDown") {
    call.sort(function (a, b) {
      if (a.furigana < b.furigana) {
        return 1;
      } else if (a.furigana > b.furigana) {
        return -1;
      } else {
        return 0;
      }
    });
    //年齢の昇順
  } else if (valueSelect == "ageTop") {
    call.sort(function (a, b) {
      if (a.age > b.age) {
        return 1;
      } else if (a.age < b.age) {
        return -1;
      } else {
        return 0;
      }
    });
    //年齢の降順
  } else if (valueSelect == "ageDown") {
    call.sort(function (a, b) {
      if (a.age < b.age) {
        return 1;
      } else if (a.age > b.age) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  call.forEach((el, index) => {
    let getTable = document.getElementById("table");
    let tableRows = getTable.rows.length;
    let nemployee_name = el.employee_name;
    let furigana = el.furigana;
    let date_of_birth = el.date_of_birth;
    let ageRows = el.age;
    let hire_date = el.hire_date;
    let address = el.address;
    let phone_number = el.phone_number;
    let department = el.department;
    let ind = index + 1;
    let code =
      "<tr class='trClass' id='trId" +
      ind +
      "'>" +
      "<td class = 'ittext'>" +
      "<input type='checkbox' class='checkClass'>" +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " idName name1 name0' '>" +
      //"<td class='ime'> "+ind +"" +
      tableRows +
      "</td>" +
      "<td class='tdclass" +
      ind +
      "  nName name0  '>" +
      nemployee_name +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      furigana +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      date_of_birth +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      ageRows +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      hire_date +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      address +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      phone_number +
      "</td>" +
      "<td class='tdclass" +
      ind +
      " name0'>" +
      department +
      "</td>" +
      "<td class = 'ittext class='textClass'>" +
      "<input type='button' onclick='editclick(this.id)' id='number" +
      ind +
      "'  class='editButton' value='編集'>" +
      "</td>" +
      "</tr>";
    tbody.insertAdjacentHTML("beforeend", code);
  });
}
api();

function sortclick() {
  api();
  let lists = document.querySelector("#tbody");
  let items = document.querySelectorAll(".trClass");
  items.forEach(function (elements) {
    lists.removeChild(elements);
  });
}

//絞り込み機能
document.getElementById("filterButton").addEventListener("click", function () {
  let getFilterText = document.getElementById("filterText");
  let getTbody = document.getElementById("tbody");
  let rows = document.querySelectorAll("tr");
  let keyword = getFilterText.value.trim();
  for (i = 0; i < getTbody.rows.length; i++) {
    let emName = getTbody.rows[i].cells[2].textContent;
    if (emName.includes(keyword)) {
      rows[i + 1].style.display = "";
    } else {
      rows[i + 1].style.display = "none";
    }
  }
});

//②ボタンを押すとその行が全てテキストボックスに変わる。その際元々記述
//されてた内容がvalueとなる。
//③編集完了後編集ボタンをもう一度押すと元の状態に戻り、変更した内容が
//反映される。

//編集機能edit 0

let judgement = document.getElementById("tbody");

judgement.setAttribute("class", "boxs");

let firstClick = true;
function editclick(ind) {
  console.log(ind);
  let getTrclass = document.querySelectorAll(".trClass");
  console.log(getTrclass[0]);
  let getIdname = document.querySelectorAll(".idName");
  let geButton = document.querySelectorAll(".editButton");
  let getTbody = document.getElementById("tbody");
  let cells = document.querySelectorAll("tr");

  let dataCells = Array.from(cells).slice(1);
  console.log(getTbody.rows[0]);

  console.log(getIdname.item(1));
  console.log(cells.item(1));
  console.log();
  let tdElements = document.querySelectorAll("td:not(.ittext)");
  console.log(tdElements);

  //console.log(number1); //<input type="button" onclick="editclick()" id="number1" class="editButton" value="編集">
  console.log(getIdname.item(0).innerHTML);
  let abutton = getIdname.item(0).innerHTML; //ボタンの数字
  console.log("number" + getIdname.item(1).innerHTML);
  let getTdclass = document.getElementsByClassName("tdclass");
  console.log(getTdclass);
  let gtdclass = document.querySelectorAll(".tdclass");
  console.log(gtdclass);
  // getTbody.addEventListener("click", function (event) {
  // let gec = number1.closest(".trClass");
  // console.log(gec); //行の情報(1列目)
  console.log(event.target.id);
  console.log(abutton);

  //let ss = sas.textContent;
  //console.log(ss);
  let trid1 = document.getElementById("trId1");
  //if (event.target.id == ind) {
  event.target.id == ind;
  let cc = event.target.id;
  console.log(cc);

  console.log(number1);
  if (judgement.classList.contains("boxs")) {
    judgement.classList.remove("boxs");
    let cc = document.getElementsByClassName("idName");

    let codes =
      "<tr class='trClass' id='db'>" +
      "<td class = 'ittext'>" +
      "<input type='checkbox'  class='checkClass'>" +
      "</td>" +
      "<td class='idName'  'name1'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='nName' 'tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  value = ''>" +
      "</td>" +
      "<td class='tdclass'>" +
      "<input type='text' class='inputText'  >" +
      "</td>" +
      "<td class = 'ittext class='textClass'>" +
      "<input type='button' onclick='editclick(this.id)' id=" +
      ind +
      "  class='editButton' value='編集'>" +
      "</td>" +
      "</tr>";

    let gtrClass = document.getElementsByClassName("trClass");
    console.log(gtrClass.length);

    let tdclass1 = document.getElementsByClassName("tdclass1");
    let tdclass2 = document.getElementsByClassName("tdclass2");
    let name00 = document.getElementsByClassName("name0");
    console.log(tdclass1[0]);
    console.log(trId1.textContent);
    console.log(gtrClass);
    console.log(gtrClass);

    getTrclass[0].insertAdjacentHTML("afterend", codes);

    //trid1.insertAdjacentHTML("afterend", codes);
    let ginputText = document.querySelectorAll(".inputText");
    console.log(tdclass1.item(1).textContent);

    for (let f = 0; f < tdclass1.length; f++) {
      ginputText.item(f).value = tdclass1.item(f).textContent;
    }
    trid1.style.display = "none";
    console.log(ginputText.item(1).value);
  } else {
    judgement.classList.add("boxs");
    let ginputText = document.querySelectorAll(".inputText");
    let tdclass1 = document.querySelectorAll(".tdclass1");
    for (let f = 0; f < tdclass1.length; f++) {
      tdclass1.item(f).textContent = ginputText.item(f).value;
    }
    trid1.style.display = "";
    let db = document.getElementById("db");
    console.log(db);
    db.style.display = "none";
  }
}

//let git = ginputText.setAttribute("value", trId1.textContent)
//trId1.textContent = git;
//trId1.appendChild(ginputText)

//let sa = createInput.setAttribute("value", element1.textContent);
//    element1.textContent = sa;
//   element1.appendChild(createInput);
//    console.log(createInput.value);

//      let cccc = getTbody.rows[1]
//      console.log(cccc)
//      getTdclass.insertAdjacentHTML(`
//      <input type='text' class='inputText'>${ind.value};
//      `)

//<td class="tdclass">
//   <input type="text" class="inputText" value="たなか たろう">
//</td >

//    for (let c = 0; c < 9; c++) {
//      let element1 =  tdElements.item(c);
//      let createInput = document.createElement("input");
//      createInput.setAttribute("type", "text");
//      createInput.setAttribute("class", "inputText");
//      let sa = createInput.setAttribute("value", element1.textContent);
//      element1.textContent = sa;
//      element1.appendChild(createInput);
//      console.log(createInput.value);
//
//    }

//for (let c = 0; c < 9; c++) {
//  let element2 = tdElements.item(c);
//  let ipt = document.getElementsByClassName("inputText");
//  element2.removeAttribute("inputText");
//  console.log(element2);

//let idnumberlength = cells.item(1).textContent;
//console.log(idnumberlength);
//let getInputText = document.querySelectorAll("inputText");

// let itValue = getInputText.

//getInputText.classList.remove('inputText');
//  let create = document.createElement("td");
//  create.setAttribute("class", "tdclass");
//  getTrclass.appendChild(create);

//  getTbody.addEventListener("click", function (event) {
//    console.log("currentTarget :");
//    console.log(event.currentTarget);
//    console.log("target :");
//    console.log(event.target);
//
//    //   if (number2.id == "number" + getIdname.item(1).innerHTML) {
//    console.log(getIdname.item(1).innerHTML)
//    if (event.target == number2) {
//      for (let c = 9; c < 18; c++) {
//        let geg = number2.closest(".trClass");
//        console.log(geg);
//        let element2 = tdElements[c];
//        console.log(element2);
//        let idnumberlength = cells.item(2).textContent;
//        console.log(idnumberlength);
//        let input2 = document.createElement("input");
//        input2.setAttribute("type", "text");
//        input2.setAttribute("class", "inputText");
//        let sa2 = input2.setAttribute("value", element2.textContent);
//        element2.textContent = sa2;
//        element2.appendChild(input2);
//      }
//    }
//  });
//}
