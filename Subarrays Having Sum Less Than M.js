function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        const [len, m] = input[i - 1].trim().split(" ").map(Number)
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr, m)
        let count = 0
        let sum = 0
        let arrCount = 0
        for (let j = 0; j < len; j++) {
            sum += arr[j]
            if (sum < m) {
                count++
            } else {
                sum = 0
            }
            if (arr[j] < m && sum != arr[j]) {
                arrCount++
            }
        }
        console.log(count + arrCount)
        // console.log(arrCount)
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