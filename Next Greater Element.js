function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        let res = []
        for (let j = 0; j < arr.length; j++) {
            let item
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[j] < arr[k]) {
                    item = arr[k]
                    break;
                }
            }
            if (item != undefined) {
                res.push(item)
            } else {
                res.push(-1)
            }
        }
        console.log(res.join(" "))
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    4
    1 3 2 4`);
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