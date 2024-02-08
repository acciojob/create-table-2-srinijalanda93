function createTable() {
	const rn=prompt("Input number of rows");
	const cn=prompt("Input number of columns");
    const table=document.getElementById("myTable");
    for(let i=0;i<rn;i++){
        
        let rowTag=document.createElement('tr');
        rowTag.id=`rows${i}`
        
        for(let j=0;j<cn;j++){
            let colTag=document.createElement('td');
            colTag.innerText=`Row-${i} Column-${j}`;
            rowTag.appendChild(colTag);
        }
        table.appendChild(rowTag);
    }
}