const doms = [
  document.getElementById("content"),
  document.getElementById("loading"),
  document.getElementById("error"),
];

let previous = undefined;
mlp.onStatusChange((status) => {
  if (status == previous) return;
  if (previous == undefined)
    doms.forEach((val) => (val.style.display = "none"));
  else doms[previous].style.display = "none";
  doms[status].style.display = "";
  previous = status;
}, true);

/**为github page设置github仓库链接 */
function genGithubLink() {
  if (/^[^.]+\.github\.io$/.test(location.host)) {
    const githubLink = document.getElementById("github-link");
    const split = location.host.split(".");
    if (split.length != 3) return;
    const linkUrl = `https://github.com/${split[0]}${location.pathname}`;
    githubLink.addEventListener("click", () => {
      open(linkUrl, "_blank");
    });
    githubLink.style.display = "";
  }
}

genGithubLink();
