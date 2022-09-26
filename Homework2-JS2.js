const searchingName = (keyword, limit, destinatedFunction) => {
    // Searching nama
    // Check pembatasan output
    const listNama = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ];
    let sample = new RegExp(keyword, "gi");
    let result = [];
    for (i = 0; i < listNama.length; i++) {
        destinatedFunction(result, sample, limit, listNama[i]);
    }
    return result;
}

const checkName = (result, key, lengthOfOutput, element) => {
    if (element.search(key) == -1) {
        return;
    } {
        result.push(element);
        if (result.length > lengthOfOutput) {
            let rest = result.length - lengthOfOutput;
            result.splice(lengthOfOutput, rest);
            return;
        }
        return;
    }
}

console.log(searchingName("el", 3, checkName));