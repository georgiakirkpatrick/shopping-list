function shoppingListForm() {
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        $('ul .shopping-list').append(
            '<li>'
                '<span class="shopping-item">$(event.currentTarget).find(input[name="shopping-list-entry").val()) </span>'
                    '<div class="shopping-item-controls">'
                        '<button class="shopping-item-toggle">'
                             '<span class="button-label">check</span>'
                        '</button>'
                        '<button class="shopping-item-delete">'
                            '<span class="button-label">delete</span>'
                        '</button>'
                    '</div>'
            '</li>'
    })
        


}

$(shoppingListForm)