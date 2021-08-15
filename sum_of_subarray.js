function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    for (let i = 1; i < input.length; i += 2) {
        var [len, k] = input[i].trim().split(" ").map(Number)
        var arr = input[i + 1].trim().split(" ").map(Number)
        // console.log(arr, k)
        Sum(arr, k)
    }

    function Sum(arr, k) {
        var count = 0
        for (let i = 0; i < arr.length; i++) {
            var sum = 0
            for (let j = i; j < arr.length; j++) {
                sum += arr[j]
                // console.log(sum)
                if (sum == k) {
                    count++;
                    break;
                }
            }
            if (count == 1) {
                break;
            }
        }
        if (count == 1) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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