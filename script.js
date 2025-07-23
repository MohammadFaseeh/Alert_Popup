function showStatus(message, isError = false) {
  const popup = document.getElementById("statusPopup");
  const icon = document.getElementById("statusIcon");
  const text = document.getElementById("statusText");

  icon.className = "fas";
  popup.classList.remove("error");

  if (isError) {
    icon.classList.add("fa-times-circle");
    popup.classList.add("error");
    popup.style.borderLeftColor = "red";
  } else {
    icon.classList.add("fa-check-circle");
    popup.style.borderLeftColor = "green";
  }

  text.textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}

document.querySelector(".add_account").addEventListener("click", (e) => {
  e.preventDefault();
  showStatus("Your account added successfully!");
});

document.querySelector(".delete_account").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("confirmPopup").classList.add("active");
});

document.getElementById("cancelDelete").addEventListener("click", () => {
  document.getElementById("confirmPopup").classList.remove("active");
});

document.getElementById("confirmDelete").addEventListener("click", () => {
  document.getElementById("confirmPopup").classList.remove("active");
  showStatus("Your account deleted successfully!", true);
});