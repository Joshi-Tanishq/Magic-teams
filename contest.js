function goBack()
{
    window.history.back();
}

function selectMenuItem(item, contentId)
{
    var menuItems = document.querySelectorAll('.content-list span');
    var contents = document.querySelectorAll('.content');

  menuItems.forEach(function(menuItem) {
    menuItem.classList.remove('selected');
    menuItem.style.color = '';
  });

  contents.forEach(function(content){
    content.classList.remove('active');
  });
  item.classList.add('selected');
  item.style.color = "orangered";

  var  content = document.getElementById(contentId);

  content.classList.add('active');
  
}


    var firstMenuItem = document.querySelector('.content-list span:first-child');
    selectMenuItem(firstMenuItem, 'content1'); 