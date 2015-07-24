var mainTrigger = document.getElementById('mainTrigger');
var mainList = document.getElementById('mainList');
var allListItems = document.getElementsByTagName('li');

for(var i = 0; i < allListItems.length; i++){
  if(allListItems[i].className === 'mainListItem'){
    allListItems[i].onmouseover = function(){
      var current = this.getElementsByTagName('ul')[0];
      current.className = 'subList';
    };
    allListItems[i].onmouseout = function(){
      var current = this.getElementsByTagName('ul')[0];
      current.className = 'subList hide';
    };
  };
};

mainTrigger.onmouseover = function () {
  mainList.className = 'mainList';
};

mainTrigger.onmouseout = function () {
  mainList.className = 'mainList hide';
};
