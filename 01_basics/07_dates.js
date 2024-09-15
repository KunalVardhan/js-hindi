let  myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toTimeString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

// let myCreatedDate =new Date(2023, 0 , 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 =new Date(2023, 0 , 23, 6, 3)
// let myCreatedDate1 =new Date("2023-01-14")

// console.log(myCreatedDate1.toLocaleString());

myDate.toLocaleString('default',{
    weekday: "long"
})

