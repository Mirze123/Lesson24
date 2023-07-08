

// function test1(){
//     setTimeout(function(){
//         console.log("Test1");
//         test2();
//     },4000);
// }

// function test2(){
//     setTimeout(function(){
//         console.log("test2");
//     },2000);
// }

// test1();
// test2();

const employees = ["Mirza","Perviz","Samir","Demir"];

function AddEmploye(name,callback){
    setTimeout(function(){
        employees.push(name);
        console.log("employee added successfully");
        callback();
    },4000);
}

function getAllEmployees(){
    for (const employee of employees) {
        console.log(employee);
    }
}


AddEmploye("Cemaleddin",function(){
    console.log("15 deqe ders bitir");
});