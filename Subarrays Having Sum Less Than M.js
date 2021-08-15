function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        const [len, m] = input[i - 1].trim().split(" ").map(Number)
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr, m)
        let count = 0
        for (let j = 0; j < len; j++) {
            let sum = 0
            for (let k = j; k < len; k++) {
                sum += arr[k]
                if (sum < m) {
                    count++
                }
            }
        }
        console.log(count)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    5 5
    1 5 1 3 2`);
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