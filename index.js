function myFunction() {
    alert("Result will be uploaded Soon");
  }

  const myTimeout = setTimeout(trylater, 6000);

function trylater() {
  document.getElementById("btn").innerHTML = "Try Later"
}

function myStopFunction() {
  clearTimeout(myTimeout);
}