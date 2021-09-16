let arr = [0, -1, 2, -3, 1, -2, 3];
let n=arr.length;
for (let i=0; i<n; i++){
    for (let j=i+1; j<n; j++) 
    { 
    for (let k=j+1; k<n; k++) 
        { 
            if (arr[i]+arr[j]+arr[k] == 0) 
            { 
                console.log("Sum of 3 Integers "+ arr[i] + " + " + arr[j] + " + " + arr[k] + " = 0" );
            } 
        } 
    }
} 