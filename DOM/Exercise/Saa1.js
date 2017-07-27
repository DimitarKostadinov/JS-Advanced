function solve(arr) {
    let arr2=arr;
    let sum1=0;
    let sum2=0;

    for (let i = 0; i < arr.length/2-1; i++) {
        sum1+=arr[i];
    }
    for (let i = Math.floor((arr.length / 2) + 1); i < arr.length; i++) {
        sum2 += arr[i];
    }

    if (sum1===sum2) {
        for (let i = 0; i < arr2.length; i++) {
        arr2[i]=GCD(arr[i],arr[i+1]);
            console.log(arr2);
        }

    }
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2.length-1; j++) {
            if (arr2[j]<arr2[j+1]) {
                let temp=arr2[j];
                arr2[j]=arr2[j+1];
                arr2[j+1]=temp;
            }
        }

    }
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);

    }

    function GCD(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number'))
            return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            let t = y;
            y = x % y;
            x = t;
        }
        return x;
    }


}
solve([5,10,15,54,5,10,15]);
