document.getElementById("ministry").onclick=function(){
    location.href="admin/dashboard.html";
};

document.getElementById("school").onclick=function(){
    alert("قريباً");
};

document.getElementById("teacher").onclick=function(){
    alert("قريباً");
};

document.getElementById("student").onclick=function(){
    alert("قريباً");
};

document.getElementById("parent").onclick=function(){
    alert("قريباً");
};

document.getElementById("result").onclick=function(){
    alert("قريباً");
};

document.getElementById("top").onclick=function(){
    alert("قريباً");
};
function saveSchool(){

let schools = JSON.parse(localStorage.getItem("schools")) || [];

let school = {

id: Date.now(),

name: document.getElementById("name").value,

city: document.getElementById("city").value,

manager: document.getElementById("manager").value,

phone: document.getElementById("phone").value,

email: document.getElementById("email").value

};

schools.push(school);

localStorage.setItem("schools", JSON.stringify(schools));

alert("تم حفظ المدرسة بنجاح");

location.href="schools.html";

}