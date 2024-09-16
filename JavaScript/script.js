document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
  });
  
  document.getElementById('loginForm').addEventListener('click', function(event) {
    if (event.target === this) {
      this.classList.add('hidden');
    }
  });


  // JavaScript to handle sidebar toggle
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay=document.getElementById("overlay")
  const closeSidebar = document.getElementById("close-sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
    overlay.classList.remove("hidden")
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
    overlay.classList.add("hidden")
  });

    overlay.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
    overlay.classList.add("hidden")
  });

  document
    .getElementById("loginButton")
    .addEventListener("click", function () {
      document.getElementById("loginForm").classList.remove("hidden");
      overlay.classList.remove("hidden")
    });

  document
    .getElementById("loginForm")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        this.classList.add("hidden");
      }
      overlay.classList.add("hidden")
    });