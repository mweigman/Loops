$(document).ready(function () {
    var myRules = {
        myNumber:
            {
                required: true,
                digits: true,
                min: 1,
                max: 1000
            }
    };
    var myMessages = {
        myNumber:
            {
                required: "Must fill in number",
                digits: "Only whole numbers",
                min: "Must be 1 - 1000",
                max: "Must be 1 - 1000"
            }
    };

    $("#loopTestForm").validate({
        rules: myRules,
        messages: myMessages,
        submitHandler: runLoops
    });
});

function runLoops() {
    // This variable will contain one of three strings:
    // "for-loop", "while-loop", or "do-while-loop"
    var selectedLoop = $("input[name=loop-type]:checked").val();

    /*
        Depending on which loop was selected,
        call the appropriate function.

        Possible values of selectedLoop and
        the corresponding function calls are:

        "for-loop"	    ==>  runForLoop()
        "while-loop"    ==>  runWhileLoop()
        "do-while-loop" ==>  runDoWhileLoop()
    */

    if (selectedLoop === "while-loop") {
        runWhileLoop()
    } else {
        if (selectedLoop === "for-loop") {
            runForLoop()
        }
    }

}


function runWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    /*
        Use a while loop to concatenate the letter A
        "number" times to the string "output". For example,
        if "number" is 5, then output should be "AAAAA".

        (Or for a challenge, concatenate the first "number" letters of the alphabet!)
    */

    var numA = 0;

    while (numA < number) {
        output += "A";
        numA++;
    }

    $("#while-result").text(output);
}


function runForLoop() {
    var number = parseInt($("#myNumber").val());
    var sum = 0;

    /*
        Use a for loop to add the numbers 1 through "number"
        into the variable "sum".
    */

    for (var i = 0; i < number; i++) {
        sum += 1.2;
    }

    $("#for-result").text(sum);
}


function runDoWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    /*
        Use a do-while loop to concatenate the numbers 1 through
        "number" to the string "output". For example, if "number"
        is 5, then output should be "12345".
    */

    do {
        number = number + 1;
    }
    while(sum += 1)

    $("#do-while-result").text(output);
}