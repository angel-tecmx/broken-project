document.getElementById("loadData").addEventListener("click", () => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => {
      console.log(users); // intentional error
    });
});
