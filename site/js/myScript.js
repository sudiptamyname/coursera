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
/*
var petDog="Rex";
var petCat="Pepper";
console.log(petDog);

var age=10;
var day ="Sunday";
Switch(day){
case "Monday":
	console.log('Do something');
	break;
case "Tuesday":
	console.log('Do something');
	break;
default:
	console.log('There is no such day');
	break;
}

function letterFinder (word, match){
for(var i=0; i<=word.length(); i++){
if(word[i]==match){
	console.log('Found the', match, 'at', i);
	else
		console.log('---No match found at', i)
}
}
}

letterFinder("test","t");

var clothes=[];
clothes.push("Sock","Tie","Belt","Scarf","Vest");

console.log(clothes);
clothes.pop(4);
*/
const car={
speed:300,
color:'Red',
type:'SUV'
};

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

for (key of Object.keys(car)){
	console.log(key,':',car[key]);
}
/*Destructure*/
let {PI}=Math;
console.log(PI);

/*DOM Manipulation::
write this in console to manipulate local copy of the browser
Add a subheading to the page*/
const h2=document.createElement('h2');
h2.innerText='This is a subheading';
h2.setAttribute('id','h2heading');
h2.setAttribute('class','secondary');
document.body.appendChild(h2);

var h3=document.createElement('h3');
h3.setAttribute('id','h3element');
var input=document.createElement('input');
input.setAttribute('type','text');
document.body.appendChild(h3);
document.body.appendChild(input);
input.addEventListener('change',function(){
	h3.innerText=input.value;
});

var h1=document.querySelector('h1');
var arr=['Example Domain',
'First Click',
'Second Click',
'Third Click'
];

function handleClicks(){
	switch(h1.innerText){
case arr[0]:
	 h1.innerText=arr[1];
	 break;
	case arr[1]:
		h1.innerText=arr[2];
		break;
		case arr[2]:
			h1.innerText=arr[3];
			break;
		default:
			h1.innerText=arr[0];
}
}
h1.addEventListener('click',handleClicks);