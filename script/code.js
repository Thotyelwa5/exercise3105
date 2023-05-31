// let people = [
//    {name : 'Thotyelwa', surname : 'Mpongwana', age: '22'},
//    {name : 'Siyamanga', surname : 'Zweni', age: '22'},
//    {name : 'Kamvelihle', surname: 'Sikalana', age:'20'},
//    {name : 'Aphelele', surname: 'Joyi', age: '21'},
//    {name : 'Xolelwa', surname: 'Hlaletyeni', age: '25'},
//    {name : 'Sisipho', surname : 'Bobo', age: '23'},
//    {name : 'Asanda', surname : 'Qhamfu', age: '23'},
//    {name : 'Sandisiwe', surname: 'Mantshinga', age:'18'},
//    {name : 'Zandisiwe', surname: 'Mkaphuza', age: '24'},

// ];
// console.log(people);


let tableContainer = document.getElementById('table-container');
let tableData = [
    {name : 'Thotyelwa', surname : 'Mpongwana', age: '22'},
   {name : 'Siyamanga', surname : 'Zweni', age: '22'},
   {name : 'Kamvelihle', surname: 'Sikalana', age:'20'},
   {name : 'Aphelele', surname: 'Joyi', age: '21'},
   {name : 'Xolelwa', surname: 'Hlaletyeni', age: '25'},
   {name : 'Sisipho', surname : 'Bobo', age: '23'},
   {name : 'Asanda', surname : 'Qhamfu', age: '23'},
   {name : 'Sandisiwe', surname: 'Mantshinga', age:'18'},
   {name : 'Zandisiwe', surname: 'Mkaphuza', age: '24'},
];

tableData.forEach( (item) => {
    tableContainer.innerHTML += 
    `
    <tr>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.age}</td>
    </tr>
    `
})
