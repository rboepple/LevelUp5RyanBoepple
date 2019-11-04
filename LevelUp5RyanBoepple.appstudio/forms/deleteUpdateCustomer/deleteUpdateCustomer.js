deleteUpdateCustomer.onshow=function(){
query="SELECT DISTINCT name FROM customer;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query)
 
    if (req1.status == 200) { 
            customerName = JSON.parse(req1.responseText)
            drpdwnCustomerName1.clear()
            for (i = 0; i <= customerName.length - 1; i++) {
                drpdwnCustomerName1.addItem(customerName[i][0])
        }
    } else {
       
        NSB.MsgBox("Error: " + req1.status);
    } 
    }



drpdwnCustomerName1.onclick=function(select){
if (typeof(select) == "object"){  
    return                     
  } else {
let customerNameSelected1=drpdwnCustomerName1.selection
}
}





rdioBtnUOD.onclick=function(){
    if (rdioBtnUOD.value==0)
  rdioResponse='update'
  if (rdioBtnUOD.value==1)
  rdioResponse='delete'
}

btnChange.onclick=function(){
  if (rdioResponse='update'){
  let newName2=inptUpdateCust.value 
  query2 = "UPDATE customer SET name =" + '"' + newName2 + '"' + " WHERE name = " + '"' + customerNameSelected1 + '";'
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query2)
if (req2.status == 200) {      
    results2 = JSON.parse(req2.responseText)

if (results2.length == 0)                       
    NSB.MsgBox("There are no customers with that name.")    
  else {                
    let message = customerNameSelected1+"'s name was changed to "+ newName2 + "." 
    tAUpdateDelete.value = message 
    }
  } 
}
else if (rdioResponse=='delete'){
  query2 = "DELETE FROM customer WHERE name = " + '"' + customerNameSelected1 + '";'
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query2)
if (req2.status == 200) {      
    results2 = JSON.parse(req2.responseText)

if (results2.length == 0)                       
    NSB.MsgBox("There are no customers with that name.")    
  else {                
    let message = customerNameSelected1+"'s name was changed to "+ newName2 + "." 
    tAUpdateDelete.value = message 
    }
  } 
}
else NSB.MsgBox("This failed for an unspecified reason.")
  }
  

Hamburger2.onclick=function(){
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
