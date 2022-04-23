const options={weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currendate").textContent = new Date().toLocaleDateString("en-US", options);