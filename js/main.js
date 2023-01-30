const selectList = document.getElementById('my-select');
const optionSelected = document.getElementById('option-selected');



selectList.addEventListener("change", (e) => {
  optionSelected.innerHTML = "Sie haben ausgewählt " + e.target.value;
})

// ODER

/* selectList.addEventListener("change", () => optionSelected.innerHTML = "Sie haben ausgewählt " + selectList.value); */