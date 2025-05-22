let yourArray=[
	{j:"apple",k:4,l:true},
	{m:"grapes",n:5,o:false},
	{g:"lichi",h:3,i:false},
	{d:"mango",e:1,f:true},
	{a:"banana",b:1,c:true}
];
let ul=document.querySelector("ul");
for(let t of yourArray){
	let li=document.createElement("li");
	li.innerText=t;
	ul.append(li);
}

