function newItem() {

  //1. added a item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2. cross item 
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3. added the delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');

  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete')
  }
  // 4. reordering items
  $('#list').sortable();

}
