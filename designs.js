// Make sure DOM is ready
$(document).ready(function() {
    
    $('#sizePicker').submit(function (event) {
        // Prevent submit event to reload page (default behavior)
        event.preventDefault()
        
        // Create and set values for size variables
        var rows = $('#inputHeight').val();
        var columns = $('#inputWidth').val();
        
        // Call grid function
        makeGrid(rows, columns)
    });
});

function makeGrid(rows, columns) {
    // Remove previous table
    $('tr').remove();

    // Make grid based on input from sizePicker
    for (var i = 1; i <= rows; i++) {
        $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
        for (var j = 1; j <= columns; j++) {
            $('#row' + i).append('<td></td>');
        }
    }

    // Change color of cell
    $('td').click(function addColor() {
        // Create and set color variable to input from colorPicker
        var color = $('#colorPicker').val();

        // Toggle color on and off
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color: '+ color);
        }
    })
};
