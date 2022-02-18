// const username = document.getElementById('username');
// console.log(username);


// function othername() {
//     var input = document.getElementById("username").value;
//     return input;
// }

// console.log(othername());


// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const createAccountForm = document.querySelector("#createAccount");

//     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.add("form--hidden");
//         createAccountForm.classList.remove("form--hidden");
//     });

//     document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form--hidden");
//         createAccountForm.classList.add("form--hidden");
//     });

//     loginForm.addEventListener("submit", e => {
//         e.preventDefault();

//         Perform your AJAX/Fetch login

//         setFormMessage(loginForm, "error", "Invalid username/password combination");
//     });

//     document.querySelectorAll(".form__input").forEach(inputElement => {
//         inputElement.addEventListener("blur", e => {
//             if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//                 setInputError(inputElement, "Username must be at least 10 characters in length");
//             }
//         });

//         inputElement.addEventListener("input", e => {
//             clearInputError(inputElement);
//         });
//     });
// }); 



// $(document).ready(function() {
//     const APIKEY = "620f447934fd621565858784";
//     getUsername();

//     $(".form__button").on("click", function(e) {
//         e.preventDefault();

//         let userName = $(".form__input").val();

//         let jsondata = {
//             "Username": userName
//         };

//         let settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": "https://assignment2-816c.restdb.io/rest/test",
//             "method": "POST",
//             "headers": {
//                 "content-type": "application/json",
//                 "x-apikey": APIKEY,
//                 "cache-control": "no-cache"
//             },
//             "processData": false,
//             "data": JSON.stringify(jsondata),
//         };

//         $.ajax(settings).done(function (response) {
//             console.log(response);

//             $(".form__button").prop("disabled", false);
//         });
//     });

//     function getUsername(limit = 10, all = true) {
//         let settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": "https://assignment2-816c.restdb.io/rest/test",
//             "method": "GET",
//             "headers": {
//                 "content-type": "application/json",
//                 "x-apikey": APIKEY,
//                 "cache-control": "no-cache"
//             },
//         }

//         $.ajax(settings).done(function (response) {
//             let content = "";

//             for (var i = 0; i < response.length && i < limit; i++) {
//                 content += "<tr><td>" + response[i].userName + "</td></tr>";
//             }
//         })
//     }
// })