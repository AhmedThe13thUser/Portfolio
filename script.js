//? make navbar MARK: navbar
const navbar_doc = document.querySelector("Navbar");

navbar_doc.innerHTML = `
<nav
      class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      style="background-image: linear-gradient(to right, #216dcd, #54286f)"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#home" onclick="locationHashChanged()"
          >Ahmed</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto p-1">
            <a
              class="nav-link active"
              aria-current="page"
              onclick="locationHashChanged()"
              href="#home"
              >Home</a
            >
            <a class="nav-link" onclick="locationHashChanged()" href="#projects"
              >Projects</a
            >
            <a class="nav-link" onclick="locationHashChanged()" href="#contacts"
              >Contacts</a
            >
          </div>
        </div>
      </div>
    </nav>
`;

function locationHashChanged() {
  if (location.hash === "#home") {
    navbar_doc.innerHTML = `
<nav
      class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      style="background-image: linear-gradient(to right, #216dcd, #54286f)"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#home" onclick="locationHashChanged()"
          >Ahmed</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto p-1">
            <a
              class="nav-link active"
              aria-current="page"
              onclick="locationHashChanged()"
              href="#home"
              >Home</a
            >
            <a class="nav-link" onclick="locationHashChanged()" href="#projects"
              >Projects</a
            >
            <a class="nav-link" onclick="locationHashChanged()" href="#contacts"
              >Contacts</a
            >
          </div>
        </div>
      </div>
    </nav>
`;

    $("html").animate({ scrollTop: 0 }, 0);
  } else if (location.hash === "#projects") {
    navbar_doc.innerHTML = `
<nav
      class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      style="background-image: linear-gradient(to right, #216dcd, #54286f)"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#home" onclick="locationHashChanged()"
          >Ahmed</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto p-1">
            <a
              class="nav-link"
              aria-current="page"
              onclick="locationHashChanged()"
              href="#home"
              >Home</a
            >
            <a class="nav-link active" onclick="locationHashChanged()" href="#projects"
              >Projects</a
            >
            <a class="nav-link" onclick="locationHashChanged()" href="#contacts"
              >Contacts</a
            >
          </div>
        </div>
      </div>
    </nav>
`;
  } else if (location.hash === "#contacts") {
    navbar_doc.innerHTML = `
<nav
      class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      style="background-image: linear-gradient(to right, #216dcd, #54286f)"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#home" onclick="locationHashChanged()"
          >Ahmed</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto p-1">
            <a
              class="nav-link"
              aria-current="page"
              onclick="locationHashChanged()"
              href="#home"
              >Home</a
            >
            <a class="nav-link" onclick="locationHashChanged()" href="#projects"
              >Projects</a
            >
            <a class="nav-link active" onclick="locationHashChanged()" href="#contacts"
              >Contacts</a
            >
          </div>
        </div>
      </div>
    </nav>
`;
  }
}

window.onhashchange = locationHashChanged;

//? MARK: Navbar barrier

const con_body = document.getElementById("con-body");
const nav_barrier = document.getElementById("nav-barrier");
const navbar = document.getElementsByClassName("navbar navbar-expand-lg")[0];

nav_barrier.style.marginBottom = navbar.clientHeight + "px";

// ? glow follows mouse MARK:blob

const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

//? text hacking style MARK: Hovering On Text

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".Projects-title").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

//? Auto Change the Age in the first card

const Age = document.querySelector("InsertAge");

Age.innerHTML = `I\`ve been programming for over ${
  new Date().getFullYear() - 2019
}yrs.`;

//? Auto COPYRIGHT system MARK: auto copyright

document.getElementById("copyright-mumbo-jumbo").innerHTML = `
<h6><a href="mailto:Ahmed.abdalbaset@outlook.com"><img width="50px" height="50px" style="border-radius: 50%;" src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-mail-icon-vector-illustration-in-line-style-for-any-purpose-png-image_996816.jpg"/></a> Ahmad.abdalbaset@outlook.com</h6><br/>&COPY; 2024-${new Date().getFullYear()} by Ahmed Abdalbaset. All Rights Reserved to ${
  location.host
}. You know how this goes right? Copyright mumbo-jumbo
`;
