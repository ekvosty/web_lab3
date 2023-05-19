import './css/style.css';
import './js/main.js';


import axios from 'axios';

let worksearch = document.getElementById("worksearch");
let searchresult = document.getElementById("searchresult");

worksearch.onsubmit = function()
{
    let formData = new FormData(worksearch);
    searchresult.innerHTML = "";
    axios.get('https://api.hh.ru/vacancies?text=' + formData.get("searchstring"))
  .then(function (response) {
    // handle success
    response.data.items.forEach(element => {
       let workblock = document.createElement("div");
       let workheader = document.createElement("h2");
       let workemployer = document.createElement("p");
       workemployer.innerText = "Работодатель: " + element.employer.name;
       let worksalary = document.createElement("p");
       worksalary.innerText = (element.salary == null ? "Не указана" : "Оплата: от " + element.salary.from + " до " + (element.salary.to == null ? element.salary.from : element.salary.to));
       let worklink = document.createElement("a");
       worklink.setAttribute('href',element.alternate_url);
       worklink.innerText = "Открыть вакансию";

       workheader.innerText = element.name;
       workblock.appendChild(workheader);
       workblock.appendChild(workemployer);
       workblock.appendChild(worksalary);
       workblock.appendChild(worklink);
       workblock.classList.add("workblock");
       searchresult.appendChild(workblock);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  return false;
}