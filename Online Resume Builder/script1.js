

function addNewWEfield(){
   // console.log("Adding new field");

   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("wefield");
   newNode.classList.add("mt-2")
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here")

   let weOb=document.getElementById("we")
   let weAddbuttonOb=document.getElementById("weAddButton");

   weOb.insertBefore(newNode,weAddbuttonOb);
}

function addNewAQfield(){
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqfield");
   newNode.classList.add("mt-2")
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here")

   let aqOb=document.getElementById("aq")
   let aqAddbuttonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddbuttonOb);

}

//generate cv

function generateCV(){
   //console.log("generating CV");

   let namefield=document.getElementById("namefield").value;

   let nameT1=document.getElementById('nameT1')

   nameT1.innerHTML =namefield;

   //direct

   document.getElementById('nameT2').innerHTML=namefield;

   //contact

   document.getElementById('contactT').innerHTML= document.getElementById('contactfield').value;

   //address

   document.getElementById('addressT').innerHTML=document.getElementById('addressfield').value;

   document.getElementById('fbT').innerHTML=document.getElementById('fbfield').value;
   document.getElementById('instaT').innerHTML=document.getElementById('instafield').value;
   document.getElementById('linkedT').innerHTML=document.getElementById('linkedinfield').value;


   //objective

   document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value;

   //work experience

   let wes=document.getElementsByClassName('wefield')

   let str=''

   for(let e of wes)
   {
      str=str+`<li>${e.value}</li>`;
   }

   document.getElementById('weT').innerHTML=str;

   //aq

   let aqs=document.getElementsByClassName('eqfield')

   let str1=''

   for (let e of aqs)
   {
      str1+=`<li>${e.value}</li>`;
   }

   document.getElementById('aqT').innerHTML =str1;

   //image

   let file=document.getElementById('imgfield').files[0];

   console.log(file);

   let reader=new FileReader();

   reader.readAsDataURL(file);

   console.log(reader.result);

   //set the image to template

   reader.onloadend = function(){
      document.getElementById('imgTemplate').src=reader.result;

   };

   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display='block';
}

//printcv

function printCV(){
   window.print();

}