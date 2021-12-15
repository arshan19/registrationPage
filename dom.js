// //emaxime the document object //
// //console.dir(document);
 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'DOM1';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'ITEMS COLLECTION';
// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

//GET ELEMENT BY ID 
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// 1.Difference between innertext and textcontent.
console.log(headerTitle.textContent); 
// it does not pays attention to styling atn all
console.log(headerTitle.innerText);
// it pays attention to styling as it doesn't show 123 which is in span


// 2.Watch uptill 23min - Make the title have a 
// black border as the youtuber does.
var header = document.getElementById('main-header');
header.style.border = 'solid 3px Black' 

// 3.Now make ADD ITEM bold and change the font color
// to greeen
var addItems = document.getElementById('main');
addItems.style.fontWeight = 'bold';
addItems.style.color ='green';