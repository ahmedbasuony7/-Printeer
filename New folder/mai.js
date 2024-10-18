

console.log("####   Task - 1   ##### ");

function parseNumbers(arr) {
    return arr.map(Number);
}

console.log(parseNumbers(['10'])); 
console.log(parseNumbers(['-1', '0', '1']));




console.log("####   Task -  3   ##### ");

function findUniq(arr) {
    
    const normalize = str => [...new Set(str.toLowerCase())].sort().join('');
    
    const normalizedArr = arr.map(normalize);
    console.log(normalizedArr);

    for (let i = 0; i < normalizedArr.length; i++) {
        if (normalizedArr.indexOf(normalizedArr[i]) === normalizedArr.lastIndexOf(normalizedArr[i])) {
            return arr[i];
        }
    }
}


console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));  // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));     // 'foo'





console.log("####   Task -  4   ##### ");

    function isIntArray(arr) {

        if (!Array.isArray(arr)) {
        return false;
        }
    
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            
            if (typeof num !== 'number' || !Number.isInteger(num)) {
                return false;
            }
        }
    
        return true;
    }




console.log(isIntArray([1, 2, 3]));      
console.log(isIntArray([1, 2.0, 3]));      
console.log(isIntArray([1, 2, 3.5]));      
console.log(isIntArray([]));              
console.log(isIntArray([1, '2', 3]));      
console.log(isIntArray(null));            


console.log("####   Task -  2   ##### ");



function canBuildSquare(blocks) {

    let blockCount = [0, 0, 0, 0, 0];  

    for (let block of blocks) {
        blockCount[block]++;
    }

    for (let i = 0; i < 4; i++) {
        if (blockCount[4] > 0) {
            blockCount[4]--;
        }
        
        else if (blockCount[3] > 0 && blockCount[1] > 0) {
            blockCount[3]--;
            blockCount[1]--;
        } 

        else if (blockCount[2] >= 2) {
            blockCount[2] -= 2;
        } 

        else if (blockCount[2] > 0 && blockCount[1] >= 2) {
            blockCount[2]--;
            blockCount[1] -= 2;
        } 

        else if (blockCount[1] >= 4) {
            blockCount[1] -= 4;
        } 

        else {
            return false;
        }
    }

    return true;
}


console.log(canBuildSquare([1, 3, 2, 2, 4, 1, 1, 3, 1, 4, 2])); 
console.log(canBuildSquare([1, 3, 2, 4, 3, 3, 2])); 



