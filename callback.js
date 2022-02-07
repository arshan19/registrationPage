const posts = [
    {title: 'Post one',body : 'this is post one', createdAt: new Date().getTime()} ,
    {title: 'Post two',body : 'this is post two',createdAt: new Date().getTime() }
];
//{title:post1 , body , createdAt : yesterday}
//{title:post2 , body , createdAt : 02/07/2022}

let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    intervalId =setInterval(()=> {
        let output= '';
        for(let i=0;i<posts.length; i++){
            output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) / 1000} seconds ago</li>`
        }
        document.body.innerHTML = output;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },2000);
}

function create4thPost(post, callback) {
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },4000);
}

getPosts();

createPost({ title: 'Post Three',body : 'this is post three'},getPosts);

create4thPost({ title: 'Post four',body : 'this is post four'},getPosts);

// var timer;
// count = 0;
// function getLastEditTime(){
//     count = 0;
//     clearInterval(timer)
//     timer = setInterval(()=> {
//         count++;
//         console.log(count);
//     },5000)
// }