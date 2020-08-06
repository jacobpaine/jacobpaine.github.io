function createText(className, text) {
  let div = document.createElement("div");
  div.className = className;
  let textEl = document.createTextNode(text);
  div.appendChild(textEl);

  return div;
}

function createNavLink(direction, link) {
  let a = document.createElement("a");
  a.className = direction;
  a.setAttribute("href", "../" + link);
  return a;
}

function portfolioNavigation(currentPage, projectName, json) {
  const thisProject = json[projectName];
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  console.log(body);
  let pageInfo = thisProject.filter((page) => page.filename === currentPage);
  pageInfo = pageInfo[0];
  let navBody = createText("portfolio-nav-body", pageInfo.body);
  let heading = createText("portfolio-nav-heading", pageInfo.header);
  let forward = createNavLink("forward", pageInfo.next);
  let backward = createNavLink("previous", pageInfo.prev);

  body.appendChild(forward);
  body.appendChild(backward);
  nav.appendChild(heading);
  nav.appendChild(navBody);
}

export { portfolioNavigation };
