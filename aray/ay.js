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

function Save(){
    let newname = document.getElementById('newname').value;
    names.push(newname)
    Start()
}