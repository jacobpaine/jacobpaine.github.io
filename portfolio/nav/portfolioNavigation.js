function createText(className, text) {
  let div = document.createElement("div");
  div.className = className;
  let textEl = document.createTextNode(text);
  div.appendChild(textEl);
  return div;
}

function createNavLink(direction, link, details) {
  let a = document.createElement("a");
  let icon = document.createElement("i");
  if (direction && link !== "toggle" && link) {
    a.className = direction;
    icon.innerText =
      direction === "forward"
        ? "arrow_forward"
        : direction === "previous"
        ? "arrow_backward"
        : "";
    icon.className = "material-icons";
    a.appendChild(icon);
    a.setAttribute("href", "../" + link);
  }

  if (link === "info-toggle" && details) {
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
    info.style.width = "50%";
    info.style.marginLeft = "25%";
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

  let div1class = pageInfo.div1class
    ? pageInfo.div1class
    : "portfolio-info-body";
  let div2class = pageInfo.div2class
    ? pageInfo.div2class
    : "portfolio-info-body";
  let div3class = pageInfo.div3class
    ? pageInfo.div3class
    : "portfolio-info-body";

  let infoBody1 = createText(div1class, pageInfo.div1);
  let infoBody2 = createText(div2class, pageInfo.div2);
  let infoBody3 = createText(div3class, pageInfo.div3);

  let heading = createText("portfolio-info-heading", pageInfo.header);
  let toggle = createNavLink("", "info-toggle", pageInfo.details);
  let backward = createNavLink("previous", pageInfo.prev);
  let forward = createNavLink("forward", pageInfo.next);

  navBox.appendChild(backward);
  navBox.appendChild(toggle);
  navBox.appendChild(forward);
  body.appendChild(navBox);
  info.appendChild(heading);
  info.appendChild(infoBody1);
  info.appendChild(infoBody2);
  info.appendChild(infoBody3);

  document.addEventListener("click", navHandler, false);
}

export { portfolioNavigation };
