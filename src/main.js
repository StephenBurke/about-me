const multiply = (x, y, z) => {
  return x * y * z;
};

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`);
  const isValid = event.target.checkValidity();
  if (isValid) {
    event.target.nextElementSibling.innerHTML = "";
  } else {
    event.target.nextElementSibling.innerHTML = "Invalid input";
    event.target.focus();
  }
};

const updateWithAdd = async (event) => {
  try {
    document.querySelector("#result").innerHTML = "";
    if (
      document.querySelector("#length").checkValidity() &&
      document.querySelector("#width").checkValidity() &&
      document.querySelector("#height").checkValidity()
    ) {
      const regex = /[0-9]/g;
      const s = document.querySelector("#guest").value.replace(regex, "");
      const i = parseInt(document.querySelector("#firstNumber").value);
      const j = parseInt(document.querySelector("#secondNumber").value);
      const j = parseInt(document.querySelector("#secondNumber").value);
      const ans = `${s}, your sum is ${add(i, j)}.`;
      document.querySelector("#result").innerHTML = ans;
    }
  } catch (error) {
    console.error(error);
  }
};

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up
document.addEventListener("focusout", (event) => {
  if (
    (event.target && event.target.id === "length") ||
    (event.target && event.target.id === "width") ||
    (event.target && event.target.id === "height")
  ) {
    validate(event);
  }
});

document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "addButton") {
    updateWithAdd(event);
  }
});
