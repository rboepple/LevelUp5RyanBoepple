seeCustomers.onshow=function(){
query="SELECT DISTINCT name FROM customer;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query)
 
    if (req1.status == 200) { 
            customerName = JSON.parse(req1.responseText)
            drpdwnCustomerName.clear()
            for (i = 0; i <= customerName.length - 1; i++) {
                drpdwnCustomerName.addItem(customerName[i][0])
        }
    } else {
       
        NSB.MsgBox("Error: " + req1.status);
    }  
}


drpdwnCustomerName.onclick=function(select){
if (typeof(select) == "object"){  
    return                     
  } else {
let customerNameSelected=drpdwnCustomerName.selection
query2 = "SELECT * FROM customer WHERE name =" + "'"+ customerNameSelected +"'"+";"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query2)
if (req2.status == 200) {      
    results2 = JSON.parse(req2.responseText)

if (results2.length == 0)                       
    NSB.MsgBox("There are no customers with that name.")    
  else {                
    let message = 'Customer Id: '+results2[0][0] +'\n'+'Customer Name: '+results2[0][1] +'\n' +'Address: '+results2[0][2]+', ' +results2[0][3] +', '+ results2[0][4] 
    tACustomerInfo.value = message 
    }
  } else              
    NSB.MsgBox("Error code: " + req2.status)
}
}



Hamburger3.onclick=function(){
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
