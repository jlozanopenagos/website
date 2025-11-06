consoleText(
    ["Hi, I’m Julian.", "Java Developer.", "Web Enthusiast.", "Tech Explorer."],
    "text",
    ['tomato','rebeccapurple','lightblue']
);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.style.color = colors[0];

    window.setInterval(function () {
        if (letterCount === 0 && !waiting) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            setTimeout(function () {
                var usedColor = colors.shift(); colors.push(usedColor);
                var usedWord = words.shift(); words.push(usedWord);
                x = 1;
                target.style.color = colors[0];
                letterCount += x;
                waiting = false;
            }, 700);
        } else if (letterCount === words[0].length + 1 && !waiting) {
            waiting = true;
            setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 700);
        } else if (!waiting) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 80);

    window.setInterval(function () {
        con.classList.toggle("hidden");
    }, 400);
}
