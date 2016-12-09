(function() {
    var patternNumbers = /(?:\d*\.?\d+)|(?:\d+\.?\d*)|(?:[\+\-\*\/])/g,
        text = "3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =",
        numberMatches = text.match(patternNumbers),
        result = 0,
        operator = '',
        i;
        
    for (i = 0; i < numberMatches.length; i++) {
        if (numberMatches[i] == '+' || numberMatches[i] == '-' || numberMatches[i] == '*' || numberMatches[i] == '/') {
            operator = numberMatches[i];
            continue;
        }

        if (operator == '+') {
            result += +numberMatches[i];
            operator = '';
            continue;
        }
        if (operator == '-') {
            result -= +numberMatches[i];
            operator = '';
            continue;
        }
        if (operator == '*') {
            result *= +numberMatches[i];
            operator = '';
            continue;
        }
        if (operator == '/') {
            result /= +numberMatches[i];
            operator = '';
            continue;
        }
        result = +numberMatches[i];
    }
    alert(result.toFixed(2));
}());