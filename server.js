import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

const todos = [];

const showMenu = ()=>{
    console.log("\n 1: Add a Task");
    console.log("\n 2: ViewTask");
    console.log("\n 3: Exit");
    rl.question("Choose an option:",handleInput);
}
const handleInput =(option)=>{
    if(option === "1"){
        rl.question("Enter the task:", (task)=>{
            todos.push(task)
            console.log("Task added:" , task)
            showMenu()
        })
    }
    else if(option === "2"){
        console.log("\n your todo list")
       todos.forEach((task,index)=>{
        console.log(`${index+1}. ${task}`)
       })
       showMenu()
    }else if(option==="3"){
        console.log("Good Bye");
        rl.close()
    }else{
        console.log("Invalid Option please try again");
        showMenu()
    }
}

showMenu()