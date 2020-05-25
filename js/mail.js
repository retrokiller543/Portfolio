var form = document.forms["contact"];
const inputName = document.querySelector(".name-text");
const inputSubject = document.querySelector(".subject-text");
const inputPhone = document.querySelector(".phone-text");
const inputMessage = document.querySelector(".message-text");
form.addEventListener("submit", contact_submit, false);

function contact_submit(e) {
  e.preventDefault();

  var target = e.target || e.srcElement;
  var to = "emil.schutt@gmail.com";
  var uri = "mailto:" + to;
  var body = "";

  var name = target.elements["name"].value;
  var subject = target.elements["subject"].value;
  var phone = target.elements["phone"].value;
  var message = target.elements["message"].value;

  body += message + "\r\n\r\n";
  body += "Name: " + name + "\r\n";
  body += "Phone Number: " + phone + "\r\n";

  uri += "?subject=" + encodeURIComponent(subject);
  uri += "&body=" + encodeURIComponent(body);

  inputName.value = "";
  inputSubject.value = "";
  inputPhone.value = "";
  inputMessage.value = "";

  window.open(uri, "_blank");
}
