//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function hideDescRows()
{
      var elements=document.getElementsByClassName("dropDownTextArea");
      for(var i=0;i<elements.length;i++)
      {
        var element=elements[i];
        element.style.display="none";
      }
      document.getElementById("button").disabled="true";
      document.getElementById("button").style.background="grey";
}

function addStudent(){
  try{
      
      var table = document.getElementById("myTable");
      var rowCount = document.querySelectorAll("table tr").length;
      console.log("rowcount: "+rowCount);
      var row = table.insertRow(rowCount);
      console.log("row: "+row);
    row.setAttribute("id","student"+rowCount);


      var rowCountToInsert = Math.floor(rowCount/2)+1; 
      console.log("rowcount o insert: "+rowCountToInsert);
      var cell1 = row.insertCell(0);  //1
        var element1 = document.createElement("input");  
        element1.setAttribute("id","chkbox"+(rowCount));
        element1.type = "checkbox"; 
        element1.onclick = function() {  
            selectRow(this,rowCount);
        }        
        cell1.appendChild(element1); 
        var element12 = document.createElement("br");
        cell1.appendChild(element12);
        var element13 = document.createElement("br");
        cell1.appendChild(element13);
        var element14 = document.createElement("img");
        element14.setAttribute("src", "down.png");
        element14.setAttribute("width","25px");
        element14.onclick = function() 
        {
          toggleDesc(rowCount);
        }      
        cell1.appendChild(element14);

        var cell2 = row.insertCell(1);  // 2
        var element2 = document.createElement("span");
        element2.innerText = "Student "+(rowCountToInsert);
        cell2.appendChild(element2);

        var cell3 = row.insertCell(2);  // 3
        var element3 = document.createElement("span");
        element3.innerText = "Teacher "+rowCountToInsert;
        cell3.appendChild(element3);

        var cell4 = row.insertCell(3);  // 4
        var element4 = document.createElement("span");
        element4.innerText = "Approved";
        cell4.appendChild(element4);

        var cell5 = row.insertCell(4);   // 5
        var element5 = document.createElement("span");
        element5.innerText = "Fall";
        cell5.appendChild(element5);

        var cell6 = row.insertCell(5);    // 6
        var element6 = document.createElement("span");
        element6.innerText = "TA";
        cell6.appendChild(element6);

        var cell7 = row.insertCell(6);    // 7
        var element7 = document.createElement("span");
        element7.innerText = Math.floor(Math.random() * 100001); 
        cell7.appendChild(element7);

        var cell8 = row.insertCell(7);    // 8
        var element8 = document.createElement("span");
        element8.innerText = Math.floor(Math.random() * 101)+"%";
        cell8.appendChild(element8);

        var cell9 = row.insertCell(8);
        var element9 = document.createElement("input");
        element9.type="button";
        element9.setAttribute('value', 'Delete');
        element9.setAttribute("id", "delete"+(rowCount));
        element9.style.display ="none";
        element9.onclick = function() {  
            deleteRow(rowCount);  
        }  
        cell9.appendChild(element9);
        var cell10 = row.insertCell(9);
        var element10 = document.createElement("input");
        element10.type="button";
        element10.setAttribute('value', 'edit');
        element10.setAttribute("id", "edit"+(rowCount));
        element10.style.display ="none";
        element10.onclick = function() {  
            editRow(rowCount);  
        }  
        cell10.appendChild(element10);

        var row2 = table.insertRow(rowCount+1);  
        row2.setAttribute("class", "dropDownTextArea");
        row2.setAttribute("id","studentDesc"+rowCount);
        row2.style.display="none";
        var cellRow21 = row2.insertCell(0);  
        cellRow21.setAttribute("colspan", "10");
        var descCol = document.createElement("span");
        var data = "Advisor:<br /><br />"+
            "Award Details<br />"+
            "Summer 1-2014(TA)<br />"+
            "Budget Number: <br />"+
            "Tuition Number: <br />"+
            "Comments:<br /><br /><br />"+
            "Award Status:<br /><br /><br />";
        descCol.innerHTML = data;		
        cellRow21.appendChild(descCol);

        alert("Student added successfully!");
  }catch(err){
      alert("error adding student");
  }
}
function selectRow(element,id)
{
      var row=document.getElementById("student"+id);
      var isChecked=element.checked;
      var isOthersChecked = checkOtherSelectedRows();
      if(isChecked)
      {
        row.style.background="yellow";
        document.getElementById("button").disabled=false;
        document.getElementById("button").style.background="orange";
        document.getElementById("edit"+id).style.display="inline";
        document.getElementById("delete"+id).style.display="inline";
      }else
      {
        row.style.background="white"; 
        document.getElementById("edit"+id).style.display="none";
         document.getElementById("delete"+id).style.display="none";
         if(!isOthersChecked){
          document.getElementById("button").disabled=true;
          document.getElementById("button").style.background="grey";
         }
      }
}
function deleteRow(id)
{
      document.getElementById("student"+id).style.display="none";
      document.getElementById("studentDesc"+id).style.display="none";
      document.getElementById("chkbox"+id).checked = false;
      var ipEle = document.getElementById("chkbox"+id);
      selectRow(ipEle,id);
      alert("Deleted row successfully");

}
function editRow(id)
{
    document.getElementById("chkbox"+id).checked = false;
    var ipEle = document.getElementById("chkbox"+id);
    selectRow(ipEle,id);
    alert("Edit the details");
}
function toggleDesc(id)
{
      var element=document.getElementById("studentDesc"+id);
      var isVisible=element.style.display;
      if(isVisible=="none")
      {
       element.style.display="table-row";
      }else
     {
      element.style.display="none";
     }
}
function checkOtherSelectedRows(){
  var rowCount = document.querySelectorAll("table tr").length;
  for(let j=1;j<rowCount;j=j+2){
    var ipEle = document.getElementById("chkbox"+j);
    if(ipEle.checked){
      return true;
    }
  }
  return false;
}