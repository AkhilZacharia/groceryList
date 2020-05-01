
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status == 200){
        var items = JSON.parse(this.responseText);
        var output ="<table><tr><th>Serial No.</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";

         for(i=0;i<items.length;i++){
           var currentItem = items[i];
           output +="<tr> <th> "+currentItem.serialNumber+"</th> <td> "+currentItem.name+" </td> <td> "+currentItem.quantity+"</td> <td> "+currentItem.unit+" </td> <td> "+currentItem.department+"</td> <td> "+currentItem.notes+"</td> </tr>" ;
         }
        // console.log(currentItem);
        output +="</table>"
        document.getElementById("demo").innerHTML= output;
     }
     
}
xhttp.open("GET","./json/shoppingList.json",true);
xhttp.send();
