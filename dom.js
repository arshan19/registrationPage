

// 1. Add a new li element without the same class Name
//And try editing it with getelementsbyclassname
//<li>new item 5 without same class</li> using html

//  var items = document.getElementsByClassName('list-group-item');
//  console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = "bold";

// for(var i=0 ; i < items.length ;i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
//  items[4].style.backgroundColor='pink';// no changes as class name is not same


var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = "hello 2";
li[1].style.fontWeight = "bold";

for(var i=0 ; i < li.length ;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

li[4].style.backgroundColor = 'Pink';