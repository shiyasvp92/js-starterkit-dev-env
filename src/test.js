function processData(input) {
    //Enter your code here
    console.log(input.split('').reduce((acc,elem,indx,arr) => {
        if(elem != arr[indx + 1]){
            console.log('if : ' + arr[indx+1]);
            console.log(arr);
            acc.push(elem);
        }
        arr.splice(indx,2);
        console.log(arr);
        return acc;
    },[]).join(''));
}

processData('aaabccddd');
