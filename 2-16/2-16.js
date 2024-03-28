const names=['Sofia','John','Sean','deez'];

window.onload = Start()

function Start(){
    let box='';
    document.getElementById('list').innerHTML = "hello";


    for( let i=0; i <names.length; i++){
        box+='User;' +names[i] + '<br>';
    }
document.getElementById('list').innerHTML = box;
}


    let newname = document.getElementById('newname').value;
    names.push(newname)
    Start()
}function Take(){
    let a=document.getElementById(Name).value;
    let b=document.getElementById(Age).value;
    let c=document.getElementByid(Lastname).value;
    let d=document.getElementById(Height).value;
    const fruits = ["Name","Age","Lastname","Height"];
    fruits.push(Name)
}
