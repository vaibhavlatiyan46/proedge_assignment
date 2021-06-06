
async function getResult()
{
    const revivedRollNumbers=document.getElementById("InputRoll").value;
    if(revivedRollNumbers.length<=0)
    {
        alert("Please enter some value");
        return;
    }
    fetch('/finalResult',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'inputRollNums='+revivedRollNumbers
    })
    .then(data=>{
        console.log(data.json()
        .then(final=> {
            const table=document.createElement("table");
            let ROW1=table.insertRow();
            let Heading1=ROW1.insertCell()
            let Heading2=ROW1.insertCell()
            Heading1.appendChild(document.createTextNode("Roll no"));
            Heading2.appendChild(document.createTextNode("Result (Pass/fail)"));
            for(let i=0;i<final.length;i++)
            {
                let ROW1=table.insertRow();
                let Heading1=ROW1.insertCell()
                let Heading2=ROW1.insertCell()
                Heading1.appendChild(document.createTextNode(final[i][0]));
                Heading2.appendChild(document.createTextNode(final[i][1]));
            }
            document.getElementById("showTable").innerHTML="";
            document.getElementById("showTable").append(table);
        }))
    })
    .catch(err=>{
        console.log("Oops.. Something Went Wrong.."+err)
    })
}