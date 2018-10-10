const dataSet =[
    {title: 'Data One', body: 'This is data one'},
    {title: 'Data Two', body: 'This is data one'}
];

let getData = ()=>{
    setTimeout(()=>{
        let output = '';
        dataSet.forEach((data,index) =>{
            output += `<li>${data.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

let createData = (data,callback)=>{
    setTimeout(()=>{
        dataSet.push(data)
        callback();
    }, 2000);
}

//getData(); 
//createData({title:'Data Three',body:'This is data three'});

//wrong because DOM will be painted first with the faster getData(), the new data will be pushed into dataSet after the data is already displayed.

createData({title:'Data Three',body:'This is data three'},getData);