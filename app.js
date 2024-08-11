
window.addEventListener("load", () => {
    console.log(localStorage.getItem("user"));
    if (!localStorage.getItem("user")) {
      window.location.replace("./login.html");
    }
  });
  
  import {
    addDoc,
    collection,
    db,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
  } from "./firebase.js";
  

    const logoutBtn = ()=> {
        localStorage.removeItem("user");
        localStorage.clear();
        window.location.replace("./login.html");
      }
      

 
  window.logoutBtn = logoutBtn;