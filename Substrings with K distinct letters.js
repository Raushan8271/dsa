function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    const [len, k] = input[0].trim().split(" ").map(Number)
    let str = input[1].trim()
    // console.log(str, k)
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let temp = ''
        for (let j = i; j < str.length; j++) {
            temp += str[j]
            if (temp.length == k) {
                var obj = {}
                for (let i = 0; i < temp.length; i++) {
                    if (obj[temp[i]] = obj[temp[i]]) {
                        obj[temp[i]] += 1
                    }
                    else {
                        obj[temp[i]] = 1
                    }
                }
                // console.log(obj)
                let flag = true
                for (let i in obj) {
                    if (obj[i] > 1) {
                        flag = false
                        break
                    }
                }
                if (flag) {
                    count++
                }
                break;
            }
        }
    }
    console.log(count)


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`11 3
    aabcdabbcdc`);
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