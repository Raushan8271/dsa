function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]

    for (let i = 1; i <= len; i++) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        if (((arr[0] + arr[1]) % arr[2]) == 0) {
            console.log("Yes")
        }
        if (((arr[0] + arr[1]) % arr[2]) != 0) {
            console.log("No")
        }
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    3 6 9
    3 6 5`);
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