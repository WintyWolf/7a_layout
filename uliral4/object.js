function Start(){
    let comment = {
    a:1,
    b:1,
    c:3,
};
console.log(comment.a);
let array_object = [
    {
        name:"df",
        age:47,
    },
    {
        name:"sof",
        age:54,
    },
    {
        name:"cuz",
        age:43,
    },
];
for (let i=0;i<array_object,length;i++) {
    console.log(array_object[i].name);
    all_array_object +=
    `<p>${array_object[i.name} - ${array_object[i].age} </p>` + "/n";
}
let object_array  = {
    grades: [32, 100, 20],
    class:["Math", "History", "english"],
};
 let all_object_array = "";
for (let i = 0;i<object_array.class.length;i++){
    console.log(object_array.class[i]);
    all_object_array += `<p>${object_array.class[i]}</p>` + "/n";
}
document.body.innerHTML = all_object_array;
}
window.onload=Start();