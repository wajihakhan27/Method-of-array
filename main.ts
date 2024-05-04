 let countriesName:string[]=["Australia","Canada","Turkey","Italy","Thailand"];
console.log(countriesName); // print the names
        //    METHOD OF ARRAY
//  1 = Push Method
countriesName.push("Switzerland") // add the new array at the end
console.log(countriesName);
// 2 : Pop Method
countriesName.pop() // remove the last arry element 
console.log(countriesName);
// 3: Unshift Method
countriesName.unshift("Iceland") //Add the new array at the start
console.log(countriesName);
// 4 : Shift Method
countriesName.shift() //remove the first arry element 
console.log(countriesName);
// 5: Slice Method
 countriesName = countriesName.slice(1,3) //slices out a piece of an array and create the new array
console.log(countriesName);
// 6: Splice Method = add and removed the element of array in any way
 countriesName.splice(2,0,"Greece"); // to add new element after the index 2
// console.log(countriesName); 
countriesName.splice(4,1);  // to removed the elememt after the index 4 
console.log(countriesName);
 countriesName.splice(1,1,"Honkong") // to replace the element
 console.log(countriesName);
// EXAMPLE ARRAY WITH OBJECT
type details={
name:string,
age:number,
is_it_student:boolean
}
let student_bio : details[] = [
    {name:"wajiha",age:22,is_it_student:true},
    {name:"Aisha",age:23,is_it_student:false},
    {name:"Ruba",age:24,is_it_student:false},
]
student_bio.push({name:"Ahmed",age:25,is_it_student:true});
student_bio.splice(1,0 ,{name:"Hazal",age:20,is_it_student:false})
console.log(student_bio);
let bio = student_bio.slice()
console.log(bio);
 
// TITTLE CASE

// EXAMPLER  # 1
let sentence : string = "The only impossible journey is the one you never begin." 
let sentenceSplited: string[] = sentence.split(" ");
// console.log(sentenceSplited);

for(let i = 0; i < sentenceSplited.length; i++){
    let character = sentenceSplited[i];
    sentenceSplited[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
}
let joinMethod : string = sentenceSplited.join(" ")
console.log(joinMethod);

// EXAMPLER  # 2
let personName:string = "wajiha khan"
let name_Splited:string[] = personName.split(" ")
// console.log(name_Splited);

for(let i = 0; i < name_Splited.length; i++){
    let word = name_Splited[i];
    name_Splited[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
let join_method : string = name_Splited.join(" ")
console.log(name_Splited);













