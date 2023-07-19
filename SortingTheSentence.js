var sortSentence = function(s) {
    let words = s.split(" ");
    
    words.sort((a, b) => {
        const num1 = parseInt(a.match(/\d+/)[0]);
        const num2 = parseInt(b.match(/\d+/)[0]);
        return num1 - num2;
    });

    let sentence = words.join(' ');
   
    for (let i = 0; i < words.length; i++) {
        sentence = sentence.replace(/\d+/, '');
    }

    return sentence;
};
