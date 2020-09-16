// 6. ZigZag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

function convert(s, numRows) {
	//create empty strings for each row
    let rows = new Array(numRows).fill(null).map(()=>'');
    // console.log(rows);//[ '', '', '' ]
    let counter = 0;
    while(counter < s.length){
        //zig
        for(let i=0; i < numRows && counter < s.length; i++, counter++){
            rows[i]+=(s[counter]);
        }
        //zag
        for(let i=numRows-2; i > 0 && counter < s.length; i--, counter++){
            rows[i]+=(s[counter]);
        }
    }
    return rows.join('');
};

var convert = (s, numRows) =>{
    if(numRows === 1) return s;
    let j = 0;
    let slope;
    let rows = [...new Array(numRows)].map(_ =>[]);
    console.log(rows);//[[], [], []]
    for(let i = 0; i < s.length; i++){
        rows[j].push(s[i]);
        if(j === 0) slope = true;
        if(j === numRows - 1) slope = false;
        j = slope ? j + 1 : j - 1;
    }
    return rows.reduce((str, row) =>str + row.join(""), "");
}

console.log(convert("paypalishiring", 3));//pahnaplsiigyir

