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

    let homeLBtn = document.getElementById("home-btn");
    let contactLBtn = document.getElementById("contact-btn");

    // Set "Home" as the default active button
    homeLBtn.classList.add("active");
    document.body.classList.add("home-active");

    homeLBtn.addEventListener("click", function () {
        homeLBtn.classList.add("active");
        contactLBtn.classList.remove("active");
        document.body.classList.add("home-active");
        document.body.classList.remove("contact-active");
    });

    contactLBtn.addEventListener("click", function () {
        contactLBtn.classList.add("active");
        homeLBtn.classList.remove("active");
        document.body.classList.add("contact-active");
        document.body.classList.remove("home-active");
    });

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
    var phonenumber = getElementVal("phonenumber");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, phonenumber, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, phonenumber, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phonenumber: phonenumber,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
