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
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            dataSet.push(data)
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error')
            }
        }, 2000);
    })
}


//Promise way

// createData({title:'Data Three',body:'This is data three'})
//     .then(getData)
//     .catch(err => console.log(err));


//async await 
let init = async ()=>{
    await createData({title:'Data Three',body:'This is data three'});
    getData();
}

//async with fetch
let fetchData = async ()=>{
    let res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    let data = await res.json();
    
    console.log(data);
    
}

init();

fetchData();
