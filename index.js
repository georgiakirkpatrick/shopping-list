$( document ).ready(function() {
    //Add new items to the shopping list.

    // Define callback function.
    const addItemToShoppingList = function() {

        // Define the text entered in the 'Add item' field.
        const newItem = $('#shopping-list-entry').val()
  
        // If a there is text in 'Add item' field, append a new item to the shopping list when the form is submitted.
        if (newItem) {
          $('.shopping-list').append(`
          <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`)
  
          // Delete the text in the 'Add item' field after the form is submitted.
          $('#shopping-list-entry').val('')
        }
      }
  
      // When the shopping list form is submitted, call addItemToShoppingList
      $('#js-shopping-list-form').submit( function() {
      event.preventDefault()
      addItemToShoppingList()
      })
  
      // When the user clicks on the 'check' button, cross the item off.
      $('.shopping-item-toggle').on('click', function() {
        let listItem = $(this).closest('li').find('.shopping-item')
        listItem.toggleClass('shopping-item__checked')
      })
  
      // When the user clicks on the 'delete' button, delete the item's <li> section.
      $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
         $(this).closest('li').remove()
      })
});

