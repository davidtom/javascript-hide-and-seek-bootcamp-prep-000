function getFirstSelector (selector) {
  return document.querySelector(selector);
};

function nestedTarget () {
  return document.getElementById('nested').querySelectorAll("div.target")[0]
};

function increaseRankBy(n) {
  var ranked = document.getElementById('app').querySelectorAll("ul.ranked-list li")

  for (var i = 0, l = ranked.length; i<l; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
};

function deepestChild () {
  var grandNode = document.getElementById("grand-node");
  var currentNode = grandNode.children;
  var nextNode = null;

  while (currentNode.length > 0){
    nextNode = currentNode[0].children

    if (nextNode.length === 0) {
      return currentNode[0];
    } else {
      currentNode = nextNode;
    }
  }
};
