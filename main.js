const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email =document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('#errorMessage');

const inputs = [email, phone, password, confirmPassword]

inputs.forEach((item) => {
    item.addEventListener("focusin", () => {
      errorMessage.textContent = "";
      item.classList.remove("error");
      if (item == password || item == confirmPassword) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
      }
    });
  });

  const submit = (e) => {
      e.preventDefault();
      if (password.value !== confirmPassword.value) {
          password.classList.add("error");
          confirmPassword.classList.add("error");
          errorMessage.textContent = "Passwords don't match";
          return;
      }
      if (
        !phone.value.match(
          /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
        )
      ) {
        phone.classList.add("error");
        errorMessage.textContent = "Phone number needs to be exactly 10 numbers";
        return;
      }
    };

  const form = document.querySelector("form");
  form.addEventListener("submit", submit);