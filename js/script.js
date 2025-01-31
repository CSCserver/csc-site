document.addEventListener("DOMContentLoaded", () => {

    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    // Mobile Menu Toggle
    if (menu) {
        menu.onclick = () => {
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("open");
        };
    }

    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) { // Change when scrolled down 50px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    
    // Contact button click event
    let contactBtn = document.getElementById("contactBtn");
    let homeBtn = document.getElementById("homeBtn");

    if (contactBtn) {
        contactBtn.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Redirecting to contact.html...");
            window.location.href = "contact.html";
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Redirecting to index.html...");
            window.location.href = "index.html";
        });
    }
});

const firebaseConfig = {
    apiKey: "AIzaSyDH8a0kq8TQG5DvPbIhx0TettNhtiw3Evs",
    authDomain: "csc-212f1.firebaseapp.com",
    databaseURL: "https://csc-212f1-default-rtdb.firebaseio.com",
    projectId: "csc-212f1",
    storageBucket: "csc-212f1.firebasestorage.app",
    messagingSenderId: "483932792927",
    appId: "1:483932792927:web:54fea42075b0abfab453ea",
    measurementId: "G-Q99VS3599W"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
