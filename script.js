document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 10;
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);

  const contactList = document.getElementById("contactList");
  const pagination = document.getElementById("pagination");
  const totalUsersDisplay = document.getElementById("total-users");

  let currentPage = 1;

  function displayUsers(page) {
    contactList.innerHTML = ""; // Clear existing list

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageUsers = users.slice(startIndex, endIndex);

    pageUsers.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.classList.add("contact-item", "cf");

      listItem.innerHTML = `
          <div class="contact-details">
            <img class="avatar" src="${user.image}">
            <h3>${user.name}</h3>
            <span class="email">${user.joined}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${user.joined}</span>
          </div>
        `;

      contactList.appendChild(listItem);
    });
  }

  function updatePaginationButtons() {
    pagination.innerHTML = ""; // Clear existing buttons

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", function () {
        currentPage = i;
        displayUsers(currentPage);
        updatePaginationButtons();
      });

      if (i === currentPage) {
        button.classList.add("active");
      }

      pagination.appendChild(button);
    }
  }

  // Initial display
  displayUsers(currentPage);
  updatePaginationButtons();
  totalUsersDisplay.textContent = `Total: ${totalUsers}`;
});
