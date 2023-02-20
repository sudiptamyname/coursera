/*alert("New Alert1");
var x="Hello dear!";
var company=new Object();
company.name="Facebook";
company.ceo=new Object();
company.ceo.firstname="Mark";

var facebook={name:"Facebook",
				ceo:{firstname:"Mark", favcolor:"blue"},
				$stockprice:110};

console.log(document.getElementById("title"));		

function buttonClicked(){
	console.log("Button is clicked!!");
	var value= document.getElementById("inpt").value;
	document.getElementById("content").textContent=value;


}	
*/
// Event handling

document.addEventListener("DOMContentLoaded", function(event){
 // Unobtrusive event binding
	document.querySelector("button").addEventListener("click", function(){
// Call server to get the name
		$ajaxUtils.sendGetRequest("data/Name.txt",
			function(request){
			var name=request.responseText;
			document.querySelector("#content").innerHTML="<h2>Hello "+name+"!!</h2>"  ;

			}

			);


	});


});	
