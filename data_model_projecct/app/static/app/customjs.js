$(document).ready(function () {
    // Check the URL to determine which scenario you are in
    var currentUrl = window.location.pathname;

    // so this condition checks which url is visited now in the browser 
    //when it knows we are trying to access the page with name and age 
    //it will create a datatable with data got from the view function as a json response
    //using ajax and you have to specify which datas to show in columns
    if (currentUrl === '/name_with_age/') {
        // DataTable initialization for the first scenario
        $('#myTable2').DataTable({
            ajax: '/get_name_with_age/', // URL to your Django view

            columns: [   //which datas to show
                { data: 'name' },  
                { data: 'age' }
            ],

        });

    } else if (currentUrl === '/') { //check root url there is a button to delete the object

         //console.log('vannu');

         var table = $('#myTable1').DataTable({
            ajax: '/get_data/', // URL to your Django view

            columns: [
                { data: 'name' },

// data: null tells DataTables that this column doesn't directly map to any data from the server. Instead, it's used to generate custom content for each cell in this column.

// render: function (data, type, row) is a function that defines how the content for each cell in this column should be generated.

// Inside the render function, it's creating an HTML button element with the class "btn btn-primary" and a custom data attribute "data-id" which stores the value of row.id. This button is created dynamically for each row in the DataTable.

// The purpose of this configuration is to display a "Delete" button in each row of the DataTable. When the user clicks this button, the code you previously provided handles the click event and redirects the user to a URL for deleting the corresponding data item based on the data.id value.


                { data: null, render: function (data, type, row) {     
                    return '<button class="btn btn-primary view-button" data-id="' + row.id + '">Delete</button>';
                } },
            ],

        });
    
// Handle button clicks
        
// is an event handler in jQuery that listens for a click event on elements with the class .view-button within the tbody of the table with the ID myTable1. When a button with this class is clicked, the following actions occur:

// var data = table.row($(this).parents('tr')).data();: This line of code is extracting the data associated with the row where the clicked button resides. Here's what each part does:

// $(this) refers to the clicked button.
// .parents('tr') traverses up the DOM to find the nearest <tr> element, which is the table row containing the button.
// table.row(...) is part of DataTables and is used to access the row data.
// .data() retrieves the data associated with that row.
// window.location.href = '/delete/' + data.id + '/';: This line constructs a URL for redirecting the user. It uses the data.id value from the row data to create the URL. The user will be redirected to a URL like /delete/123/, where 123 is the data.id value of the clicked row.
        

$('#myTable1 tbody').on('click', '.view-button', function () {
            var data = table.row($(this).parents('tr')).data();
            // Redirect to the URL with the object ID (data.id)
            window.location.href = '/delete/' + data.id + '/';
        });

    
    }
});


//applying a bootstrap class to a div by using setTimeout 
//waiting to apply the class to the div
document.addEventListener('DOMContentLoaded', function () {
    // Delay the execution of the code for 1 second (1000 milliseconds)
    setTimeout(function () {
        var main_div = document.getElementById('myTable_wrapper');
        console.log(main_div);

        if (main_div) {
            main_div.classList.remove('no-footer');
            main_div.classList.add('dt-bootstrap5');
            console.log('added');
        }
    }, 1000); // Adjust the delay time as needed
});