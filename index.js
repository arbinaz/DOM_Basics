// We can acess element using document
document.title; 
console.log(document.title);
document.title="DOM_Basics"
console.log(document.title);

// Selectors in DOM
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTags
// 4. querySelector
// 5. querySelectorAll

 let heading=document.getElementById("dom1");
 console.log(heading);

 let heading1=document.getElementsByTagName("h1")
 console.log(heading1);

 let sample=document.getElementsByClassName("box1")
 console.log(sample);

 let sample1=document.getElementsByClassName("box2")
 console.log(sample1);

 let p1=document.querySelector("#dom1")
 console.log(p1);

 let p2=document.querySelector("p")
 console.log(p2);

 let p3=document.querySelectorAll("p")
 console.log(p3);

 let p4=document.querySelectorAll("h1")
 console.log(p4);
// .children
 let parentE1=document.getElementById("parent")
 console.log(parentE1.children);
// .childNodes
 let parentE2=document.getElementById("parent")
 console.log(parentE2.childNodes);
// .firstChild
 let parentE3=document.getElementById("parent")
 console.log(parentE3.firstChild);
// .lastChild
 let parentE4=document.getElementById("parent")
 console.log(parentE4.lastChild);
// .firstElementChild
 let parentE5=document.getElementById("parent")
 console.log(parentE5.firstElementChild);
// .lastElementChild
 let parentE6=document.getElementById("parent")
 console.log(parentE6.lastElementChild);
// .previousSibling
 let midE1=document.getElementById("midParagraph")
 console.log(midE1.previousSibling);
// .nextSibling
 let midE2=document.getElementById("midParagraph")
 console.log(midE2.nextSibling);
// .previousElementSibling
 let midE3=document.getElementById("midParagraph")
 console.log(midE3.previousElementSibling);
// .nextElementSibling
 let midE4=document.getElementById("midParagraph")
 console.log(midE4.nextElementSibling);
//  .parent
let test=document.getElementById("midParagraph")
console.log(test.parentElement);


