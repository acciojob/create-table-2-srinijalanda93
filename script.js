function createTable() {
	const rn=prompt("Input number of rows");
	const cn=prompt("Input number of columns");
    const table=document.getElementById("myTable");
    for(let i=0;i<=rn;i++){
        //here create the rows
        let rowTag=document.createElement('tr');
        rowTag.id=`rows${i}`
        //<tr></tr>
        for(let j=0;j<=cn;j++){
            //create the colums <td></td>
            let colTag=document.createElement('td');
            colTag.id=`Row-${i} Column-${j}`;
            colTag.innerText=`Row-${i} Column-${j}`;
            rowTag.appendChild(colTag);
        }
        table.appendChild(rowTag);
    }
}