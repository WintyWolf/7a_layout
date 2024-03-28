let allnews = [];
function Display() {
    let newDiv="";
    for (let i=0 ; i<allnews.length;i++){
        newDiv+=
        "<h1 class='title' >" + (i+1) + "." + allnew[i].title + "</h1>";
        newDiv+= "<p class='body'>" + allnews[i].body + "</p>";
    }
    document.getElementById("news").innerHTML=newDiv;
}
function AddNews(){
    let newtitle =document.getElementById("title").value;
    let newbody =document.getElementById("body").value;
    let newnews ={
     title: newtitle,
     body:newbody,

    };
    allnews.push(newNews);
    Display();
}