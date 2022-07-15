const posts=[
    {title:"Post One", body:"PostONEBody hai ye"},
    {title:"Post Two", body:"PostTWOBody hai ye"}
];

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post,index)=>{
            output += post.title;
            output += " ";
        })
        console.log(output);
    },1000);
}

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000);
}

getPosts();
createPost({title: "Post Three", body:"this is the latest post"})