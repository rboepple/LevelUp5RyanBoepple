
addCustomer.onshow=function(){
  query="SELECT DISTINCT name FROM customer;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query)
 
    if (req1.status == 200) { 
            customerName = JSON.parse(req1.responseText)
            listGrpCustomers.clear()
            for (i = 0; i <= customerName.length - 1; i++) {
                listGrpCustomers.addItem(customerName[i][0])
        }
    } else {
       
        NSB.MsgBox("Error: " + req1.status);
    }  
}




btnSubmitAdd.onclick=function(){

let name=inptName.value
let street=inptStreet.value
let city=inptCity.value
let state=inptState.value
let zipcode=inptZipcode.value
query2 = 'INSERT INTO customer (`name`, `street`, `city`, `state`, `zipcode`) VALUES ("name","street","city","state","zipcode");'
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query2)
if (req2.status == 200) {      
    results2 = JSON.parse(req2.responseText)
  } else              
    NSB.MsgBox("Error code: " + req2.status)

  Modal1.toggle(options)
}

  Hamburger1.onclick=function(s){
  if (typeof(s) == "object") 
    return
    switch(s) {
        case "See Customer":
            ChangeForm(seeCustomers)
            break
        case "Add Customer":
            ChangeForm(addcustomer)
            break
        case "Edit Customer":
            ChangeForm(deleteUpdateCustomer)
            break
        case "Delete Customer":
            ChangeForm(deleteUpdateCustomer)
            break
    
    }

