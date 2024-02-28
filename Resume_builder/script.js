function addNewWeField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("WeField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let WeAddBtnOb = document.getElementById("WeAddBtn");

    weOb.insertBefore(newNode, WeAddBtnOb);
}

// add new education field
function addNewAqField() {
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("AqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let AqAddBtnOb = document.getElementById("AqAddBtn");

    aqOb.insertBefore(newNode, AqAddBtnOb);

}


// Add new project field
function addProjectField() {
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("PrField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let prOb = document.getElementById("pr");
    let PrAddBtnOb = document.getElementById("PrAddBtn");

    prOb.insertBefore(newNode, PrAddBtnOb);

}

// Add Internship Field
function addInternshipField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("IsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let isOb = document.getElementById("is");
    let InternAddBtnOb = document.getElementById("InternAddBtn");

    isOb.insertBefore(newNode, InternAddBtnOb);

}

// Add Certificater Field
function addCertificateField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("CtField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let cfOb = document.getElementById("cf");
    let CertiAddBtnOb = document.getElementById("CertiAddBtn");

    cfOb.insertBefore(newNode, CertiAddBtnOb);

}


function addSkillField() {
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("SkField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let skOb = document.getElementById("sk");
    let SkAddBtnOb = document.getElementById("skAddBtn");

    skOb.insertBefore(newNode, SkAddBtnOb);

}



// // generate resume

function createResume() {
    // console.log("generating resume");

    let FnameField = document.getElementById("FnameField").value;
    let LnameField = document.getElementById("LnameField").value;
    nameT.innerHTML = FnameField + " " + LnameField;

    // for contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("EmailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("LinkedInField").value;
    document.getElementById("gitT").innerHTML = document.getElementById("gitHubField").value;


    // for work experience
    let wes = document.getElementsByClassName("WeField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("WeT").innerHTML = str;


    // for academic qualification
    let aqs = document.getElementsByClassName("AqField");
    let stre = "";
    for (let e of aqs) {
        stre = stre + `<li> ${e.value}</li>`;
    }
    document.getElementById("AcT").innerHTML = stre;

    // for projects
    let ps = document.getElementsByClassName("PrField");
    let strp = "";
    for (let e of ps) {
        strp = strp + `<li> ${e.value}</li>`;
    }
    document.getElementById("projectT").innerHTML = strp;


    // for Internship
    let its = document.getElementsByClassName("IsField");
    let stri = "";
    for (let e of its) {
        stri = stri + `<li> ${e.value}</li>`;
    }
    document.getElementById("internshipT").innerHTML = stri;


    // for certificates
    let cfs = document.getElementsByClassName("CtField");
    let strc = "";
    for (let e of cfs) {
        strc = strc + `<li> ${e.value}</li>`;
    }
    document.getElementById("certificateT").innerHTML = strc;


    // for skills
    let sks = document.getElementsByClassName("SkField");
    let strs = "";
    for (let e of sks) {
        strs = strs + `<li> ${e.value}</li>`;
    }
    document.getElementById("skillT").innerHTML = strs;



    document.getElementById("resume-template").style.display = 'none';
    // setTimeout(function(){
    document.getElementById("resume-template").style.display = 'block';
    // }, 1000);


}


// Print resume
// function printResume() {
//     window.print();
// }
const printBtn = document.getElementById('printResume');
printBtn.addEventListener('click', function(){
    print();
})