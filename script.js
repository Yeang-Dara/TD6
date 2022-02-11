//settime out for 1 seconds due to faster loading data
const loader = document.querySelector(".loading_container");
const table = document.querySelector("table");
const tableRow = document.querySelector(".table_row");

let name, userName, email, address, phone, website, company;
setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      console.log("Data is loaded");

      result.forEach((e) => {
        name = e.name;
        userName = e.username;
        email = e.email;
        address = `${e.address.suite} ${e.address.city}`;
        phone = e.phone;
        website = e.website;
        company = e.company.name;
        console.log(name, userName, email, address, phone, website, company);
        renderHTML(name, userName, email, address);
      });

      loader.classList.add("hide");
      table.classList.remove("hide");
      for (let i = 1; i < result.length; i += 2) {
        document.querySelectorAll("tr")[i].style.backgroundColor = "#32948f";
      }
      //   document.body.style.backgroundColor = "#fff";
    })
    .catch((err) => {
      console.log(err);
      renderError();
    });
}, 2000);
function renderHTML() {
  table.innerHTML += `
         <tr>
            <td>${name}</td>
            <td>${userName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${phone}</td>
            <td>${website}</td>
            <td>${company}</td>
        </tr>
    `;
  //   table.insertAdjacentHTML("beforeend", html);
}
function renderError() {
  const errMsg = document.querySelector(".error_message");
  errMsg.classList.toggle("hide");
  loader.classList.toggle("hide");
  errMsg.insertAdjacentHTML(
    "beforeend",
    `<div>Somthing went wrong! </div>
    <div>Please check your internet connection</div> `
  );

  ///
}
