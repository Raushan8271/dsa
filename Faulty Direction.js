function runProgram(input) {
     // Write code here
     var input = input.trim().split('\n')
     var test = input[0]
     var l = 0
     var r = 0
     var u = 0
     var d = 0
     for(let i = 1;i<input.length;i++){
         if(i%2==0){
             var str = input[i].trim()
             //console.log(str)
             for(let j = 0;j<str.length;j++){
                 if(str[j] == "L"){
                     l++
                 }
                 else if(str[j] == "R"){
                     r++
                 }
                 else if(str[j] == "D"){
                     u++
                 }
                 else if(str[j] == "U"){
                     d++
                 }
             }
             if(l == r && u == d){
                 console.log("Yes")
             }
             else{
                 console.log("No")
             }
             l = 0
             r = 0
             u = 0
             d = 0
         }
     }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}