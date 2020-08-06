function createText(className, text) {
  let div = document.createElement("div");
  div.className = className;
  let textEl = document.createTextNode(text);
  div.appendChild(textEl);
  return div;
}

function createNavLink(direction, link) {
  let a = document.createElement("a");
  let icon = document.createElement("i");
  if (direction && link !== "toggle" && link !== null) {
    a.className = direction;
    icon.innerText =
      direction === "forward" ? "arrow_forward" : "arrow_backward";
    icon.className = "material-icons";
    a.appendChild(icon);
    a.setAttribute("href", "../" + link);
  }

  if (link === "info-toggle") {
    icon.innerText = "search";
    icon.className = "material-icons";
    a.id = "info-toggle";
    a.appendChild(icon);
  }

  return a;
}

function createDiv(className) {
  let div = document.createElement("div");
  div.id = className;
  return div;
}

function portfolioNavigation(currentPage, projectName, json) {
  const thisProject = json[projectName];
  const body = document.querySelector("body");
  const infoBox = createDiv("info");
  const navBox = createDiv("nav-box");
  body.appendChild(infoBox);
  body.appendChild(navBox);

  const info = document.getElementById("info");

  function showMenu() {
    info.style.width = "250px";
    info.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function hideMenu() {
    info.style.width = "0";
    info.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  function navHandler(event) {
    let target = event.target.id;
    let dataHref = event.target.getAttribute("data-href");
    if (event.target.innerText === "search") {
      showMenu();
    }

    // Click anywhere but the search to close the info box
    if (event.target.innerText !== "search") {
      hideMenu();
    }
  }

  let pageInfo = thisProject.filter((page) => page.filename === currentPage);
  pageInfo = pageInfo[0];
  let infoBody = createText("portfolio-info-body", pageInfo.body);
  let heading = createText("portfolio-info-heading", pageInfo.header);
  let toggle = createNavLink("", "info-toggle");
  let backward = createNavLink("previous", pageInfo.prev);
  let forward = createNavLink("forward", pageInfo.next);

  navBox.appendChild(backward);
  navBox.appendChild(toggle);
  navBox.appendChild(forward);
  body.appendChild(navBox);
  info.appendChild(heading);
  info.appendChild(infoBody);

  document.addEventListener("click", navHandler, false);
}

export { portfolioNavigation };
