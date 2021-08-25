function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    const [len, k] = input[0].trim().split(" ").map(Number)
    let str = input[1].trim()
    // console.log(str, k)
    let count = 0
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (res.includes(str[i])) {
            // let s = remove(res, str[i])
            console.log(s)
            res += s
            res += str[i]
        } else {
            res += str[i]
        }

        if (res.length == k) {
            count++
            res = res.replace(res[0], "")
            // console.log(res)
        }
        // console.log(res)
        // console.log(count)
    }
    console.log(count)

    function remove(s, l) {
        let newStr = ""
        for (let i = 0; i < s.length; i++) {
            if (s[i] != l) {
                s[i].replace(s[i],"")
            }else{
                break
            }
            // console.log(newStr)
        }
        return s
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`100 10
    aekyhrbjdmuomwcmriiczjikjozagcadeunslgonohknagwmjigaqurzthfyspvrdmodrdnjrthwuedksthwdhetccnjtswbhihb`);
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