// Use this to handle form submission with recaptcha

// const siteKey = import.meta.env.PUBLIC_SITE_KEY;

// export default function setupForm(formId) {
//     const formEl = document.getElementById(formId);
//     const toast = document.getElementById("toast-success");

//     let submitted = false;
//     let tokenCreated = false;

//     formEl?.addEventListener("submit", async function (e) {
//         e.preventDefault();
//         console.log("submitted");
//         if (!tokenCreated) {
//             e.preventDefault();

//             if (!submitted) {
//                 submitted = true;

//                 grecaptcha.ready(function () {
//                     grecaptcha.execute(siteKey, { action: "submit" }).then(async function (token) {
//                         // add token to form
//                         var input = document.createElement("input");
//                         input.type = "hidden";
//                         input.name = "g-recaptcha-response";
//                         input.value = token;
//                         formEl.appendChild(input);

//                         // resubmit the form
//                         tokenCreated = true;

//                         var request = new XMLHttpRequest();
//                         request.open(formEl.method, formEl.action);
//                         request.setRequestHeader(
//                             "Content-Type",
//                             "application/x-www-form-urlencoded",
//                         );
//                         request.send(getFormDataString(formEl));
//                         const formData = getFormDataObject(formEl);
//                         console.log(formData);
//                         try {
//                             if (formData.formType == "contact") {
//                                 const res = await fetch(
//                                     `${import.meta.env.PUBLIC_EMAIL_API}/form/contact`,
//                                     {
//                                         method: "POST",
//                                         body: JSON.stringify({
//                                             firstName: formData.firstName,
//                                             lastName: formData.lastName,
//                                             email: formData.email,
//                                             phoneNumber: formData.phoneNumber,
//                                             message: formData.message,
//                                             subject: formData.subject,
//                                         }),
//                                     },
//                                 );
//                             } else if (formData.formType == "subscription") {
//                                 const res = await fetch(
//                                     `${import.meta.env.PUBLIC_EMAIL_API}/form/newsletter`,
//                                     {
//                                         method: "POST",
//                                         body: JSON.stringify({
//                                             email: data.email,
//                                             subject: data.subject,
//                                         }),
//                                     },
//                                 );
//                             }

//                             toast.classList.remove("hidden");
//                             toast.classList.add("toast");
//                             setTimeout(() => {
//                                 toast.classList.remove("toast");
//                                 toast.classList.add("hidden");
//                             }, 3000);
//                             formEl.reset();
//                         } catch (error) {
//                             console.error("Failed to send data to API", error);
//                         }
//                     });
//                 });
//             }
//         }
//     });

//     function getFormDataString(formEl) {
//         var formData = new FormData(formEl),
//             data = [];

//         for (var keyValue of formData) {
//             data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
//         }

//         return data.join("&");
//     }
//     function getFormDataObject(formEl) {
//         var formData = new FormData(formEl);
//         var data = {};

//         for (var keyValue of formData) {
//             data[keyValue[0]] = keyValue[1];
//         }

//         return data;
//     }
// }
