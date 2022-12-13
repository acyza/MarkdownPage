const doms = [document.getElementById("content"),
  document.getElementById("loading"),
  document.getElementById("error")
];

let previous = undefined;
mlp.onStatusChange((status) => {
  if (status == previous) return;
  if(previous == undefined) doms.forEach((val)=>val.style.display = 'none');
  else doms[previous].style.display = 'none';
  doms[status].style.display = '';
  previous = status;
}, true)
