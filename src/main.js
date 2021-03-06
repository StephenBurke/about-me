// main skeleton logic referenced from https://github.com/profcase/js-gui-ajax

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

const updateWithMultiply = async (event) => {
  try {
    //document.querySelector("#result").innerHTML = "";
    if (
      document.querySelector("#length").checkValidity() &&
      document.querySelector("#width").checkValidity() &&
      document.querySelector("#height").checkValidity()
    ) {
      const regex = /[^0-9]/g;
      const a = document.querySelector("#length").value.replace(regex, "1");
      const b = document.querySelector("#width").value.replace(regex, "1");
      const c = document.querySelector("#height").value.replace(regex, "1");

      const i = parseInt(document.querySelector("#length").value);
      const j = parseInt(document.querySelector("#width").value);
      const k = parseInt(document.querySelector("#height").value);
      const ans = `Your volume is ${multiply(i, j, k)} units cubed.`;
      window.localStorage.setItem("answer", ans);
      document.querySelector("#result").innerHTML = window.localStorage.getItem(
        "answer"
      );
    }
  } catch (error) {
    const ans = `please enter a number`;
    document.querySelector("#result").innerHTML = ans;
  }
};

document.addEventListener("click", (event) => {
  if (event.target && event.target.id === "multiplyBtn") {
    updateWithMultiply(event);
  }
});
