"use strict";
window.onload = function() {

  document.querySelector(".add-button").addEventListener("click", add);



  // document.getElementById("name").value;



  class Contact {
    constructor(name, email, phone, realtion) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.realtion = realtion;
    }
  }

  class AddressBook {
    constructor() {
      this.contacts = [
        new Contact("Snoopy", "snoopy@cooldog.com", "111-222-3333", "my dog"),
        new Contact("Porkchop", "porkchop@doug.com", "333-555-9999", "a cool friend")
      ];
    }
    add(event) {
      event.preventDefault();
      let inputElements = document.querySelectorAll("input");

    }
    deleteAt(index) {
      this.contacts.splice(index, 1);
    }
    display() {
      for (let contacts of AddressBook) {
        const newEntry = document.createElement("div");
        el.innerHTML = `
                <p>Name: ${inputElements[0].name}</p>
                <p>Email: ${inputElements[1].email}</p>
                <p>Phone: ${inputElements[2].phone}</p>
                <p>Realtion: ${inputElements[3].realtion}</p>
                `;
      }
    }
  }
  const book = new AddressBook();



  // document.querySelector("submit").doc


};
