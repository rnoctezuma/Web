(function() {
    var text = "Чего-с изволите-с?Барин-с!",
        arrayOfWords = text.split(/[\.\?,;:! ]/g),
        i,
        j,
        symbolsForDelete = [],
        arrayOfChars = arrayOfWords[0].split(''),
        count = 0;

    for (i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i] == '') {
            arrayOfWords.pop(arrayOfWords[i]);
        }
    }
    for (i = 0; i < arrayOfChars.length; i++) {
        count = 0;
        for (j = 1; j < arrayOfWords.length; j++) {
            if (arrayOfWords[j].indexOf(arrayOfChars[i]) > 0) {
                count++;
            }
        }
        if (count === arrayOfWords.length - 1) {
            symbolsForDelete.push(arrayOfChars[i]);
        }
    }
    alert(symbolsForDelete);
    for (i = 0; i < symbolsForDelete.length; i++) {
        text = text.split(symbolsForDelete[i]).join('');
    }
    alert(text);
}());