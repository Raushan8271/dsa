function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    for (var i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        let res = []
        for (let j = arr.length - 1; j >= 0; j--) {
            res.push(arr[j])
        }
        console.log(res.join(" "))
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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