let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

let item=document.getElementsByClassName("item");

let patientprofile=document.querySelector(".patient_profile");
let prescriptionlist=document.querySelector(".patient_prescription_list");

item[0].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="flex";
    prescriptionlist.style.display="none";
}
item[1].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="block";
}
item[2].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
}
item[3].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
}
item[4].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
}
item[5].onclick = function(){
    removeactive();
    this.classList.add("active");
    patientprofile.style.display="none";
    prescriptionlist.style.display="none";
}

function removeactive(){
    for(b of item){
        b.classList.remove("active");
    }
}