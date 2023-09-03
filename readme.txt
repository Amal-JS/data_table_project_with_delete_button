This project we are going to use the bootstarp data table,
    with data table we can show the objects in table with pagination and easy searching feature


we have used the cdn links to get the data table

So , here there is two pages in which 

    one shows the Person (model) objects name only with a button to delete that particular
     object == '/name_with_age/'

    second one displays the name and age of person object == '/'

    when going to each url to see the data ,

    jquery checks the url we visit , based on that there is if condition it checks whether we are going to '/' or '/name_with_age/'
    then it will call a view function which returns a json response with corresponding data
    
    after that , the data is populated on the data table.



********************************************
  1. On both html the table id want to be different for easiness

