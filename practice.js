

// function dropElements(arr, func) {
//     let originalLen = arr.length;
//     for (let i = 0; i < originalLen; i++) {
//       if (func(arr[0])) {
//         break;
//       } else {
//         arr.shift();
//       }
//     }
//     return arr;
//   }
  
//   console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) )


// function sumFibs(num) {
//     if(num<1){
//         return 1
//     }
//     let first =0;
//     let second = 1;
//     let sum=1;
   
//     while(second<=num){
//         let third =first+second
//       if(third%2!==0) sum+=third
  
//         first=second
//         second=third;
//     }
  
//     console.log(sum)
//   }
  
//   sumFibs(75025);






// function convertHTML(str) {
//     const testStr = `<>&'"&`
//    const entitiesHTML = {
//     '<':	'&lt;',
//     '>': '&gt;',
//     '&':	'&amp;',
//     '"':'&quot;',
//     "'":'&apos;'
//    }
//    let newStr=''
//    for(let i =0 ; i<str.length; i++){
//      if(testStr.includes(str[i])){
//         newStr+=entitiesHTML[str[i]]
//         continue
//      }
//      newStr+=str[i]
//    }
//    return newStr
//   }
  
//   convertHTML("abc")



////////////////////////////////////////////////////////////////////////
// function uniteUnique() {
//  return [...new Set( [...arguments].flat())
// ]  }
  

//   console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) )




////////////////////////////////////////////////////////////////////////////////////////////////
// function fearNotLetter(str) {
//     const atoZ = 'abcdefghijklmnopqrstuvwxyz'
//     if(str===atoZ) return undefined;
//     const startingIndex = atoZ.indexOf(str[0])
//     const subStr = atoZ.slice(startingIndex,startingIndex+str.length+1)
 
//      for(let i =0; i<subStr.length; i++){

//         if(!str.includes(subStr[i])){
//             return subStr[i];

//         }
//      }
//   }
  
//  console.log( fearNotLetter("bcdf") )

// function pairElement(str) {
//     const pairedArr=[]
//     const basePairs= {
//       A:'T',
//       T:'A',
//       G:'C',
//       C:'G'
//     }
//   for(let i=0; i<str.length; i++){
//     pairedArr.push([str[i],basePairs[str[i]]])
//   }
//     console.log(pairedArr)
//   }
  
//   pairElement("GCG");



// function myReplace(str, before, after) {
    
//     if(before[0]!==before[0].toLowerCase())
//     {
//      after =   after.replace(after[0], after[0].toUpperCase())
//      return str.replace(before,after)
    
//     }
//     after=  after.replace(after[0], after[0].toLowerCase())
//  return str.replace(before,after)
    
//   }
  
//   myReplace("Let us get back to more Coding", "Coding", "algorithms")




////////////////////////////////////////////////////////////////
// function translatePigLatin(str) {
//     const vowelsStrtReg = /^[aeiou]+/
//     const vowelReg  =/[aeiou]/
//     if(vowelsStrtReg.test(str)){
//          return `${str}way`
//     }
//     else if(vowelReg.test(str)){
//      let vowelIndex =str.indexOf(str.match(vowelReg))
//      const temp = str.slice(0,vowelIndex)
//      const replacedStr = str. replace(temp,'')
//      return `${replacedStr}${temp}ay`  
     
//     }else{
//         return `${str}ay`
//     }

//   }
  
//  console.log( translatePigLatin("california")   )








///////////////////////////////////////////////////////////////////////////////////////////
// function spinalCase(str) {
//      str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//      console.log(str)
//     let splitStr =[]
//     let temp=''
//    for(let i=0; i<str.length; i++){
//     if(str[i]!==str[i].toLowerCase()&&temp!==''){
//         splitStr.push(temp)
//         temp=''
//         temp += str[i]
       
//     }
//     else if(str[i]===' ' || str[i]==='_'){
//         splitStr.push(temp)
//         temp =''
//     }else{
//    temp += str[i];
//    if(i===str.length-1){
//     splitStr.push(temp)
//    }
//     }
//    }
//   return splitStr.join('-').toLowerCase()
//   }
//   spinalCase("AllThe-small Things")
//  console.log( spinalCase("AllThe-small Things"))
//   console.log(spinalCase("thisIsSpinalTap"))


////////////////////////////////////////////////////////////////////////////
// function whatIsInAName(collection, source) {
// // const [...keys] = Object.keys(source)
// const filteredArr=[]
// for(let i=0; i<collection.length; i++){
//     let included=false
//     for(let key in source){
//         if(!(collection[i].hasOwnProperty(key) && collection[i][key]===source[key])){
//         included =true
//         }
//     }
//     if(!included){
//         filteredArr.push(collection[i])
//     }
// }
// return filteredArr
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))







////////////////////////////////////////////////////////////////
// function destroyer(arr) {
// const [,...values] = Object.values(arguments)
// const filteredArr = []
// for(let i =0; i<arr.length; i++){
//     let notIncluded=false
//     for(let j =0; j<values.length;j++){
       
//         if(arr[i]===values[j]){
//             notIncluded=true
//         }
//         }
//         if(!notIncluded){
//             filteredArr.push(arr[i])
//     }
// }
//     return filteredArr;
//   }
  
//   console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))













////////////////////////////////////////////////////////////////////
// function diffArray(arr1, arr2) {
//     const newArr = [];
//     for(let i=0; i<arr1.length; i++){
//         if(!arr2.includes(arr1[i])){
//             newArr.push(arr1[i])
//         }
//     }
//      for(let i=0; i<arr2.length; i++){
//         if(!arr1.includes(arr2[i])){
//             newArr.push(arr2[i])
//         }
//     }
//     return newArr;
//   }
  
//  console.log( diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))










/////////////////////////////////////////////////////////////////////
// function sumAll(arr) {
//     const [firstNum, secondNum] = [...arr]
//     let largeOne,smallerOne
//     if(firstNum>secondNum){
//         largeOne=firstNum;
//         smallerOne=secondNum
//     }else{
//         largeOne=secondNum;
//         smallerOne=firstNum
//     }
//     let sum=0
//     for(let i=smallerOne; i<=largeOne;i++){
//         sum+=i
        
//     }
//     return sum
//   }
  
//   console.log(sumAll([5, 10]))


// function chunkArrayInGroups(arr, size) {
//   let returnArr=[]
//   let limitOfArr = 0
//   let nestedArr = []
//   let b=0
//   for(let i=0; i<arr.length+1; i++){
//     if(limitOfArr>=size){
//         returnArr.push(nestedArr)
//         nestedArr=[]
//         limitOfArr=0
//         if(arr.length===i) break
//     }
//     nestedArr.push(arr[i])
//         limitOfArr++

//   }
//   return returnArr
//   }
  
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))



//////////////////////////////////////////////////////////////////////////////////////
// function mutation(arr) {
//     const [firstStr, secondStr] = [...arr]
//     let isConatain = true
//     for(let i=0; i<secondStr.length; i++){
//       if(firstStr.toLowerCase().includes(secondStr[i].toLowerCase())===false) {
//         isConatain=false;
//         break;
//       }
//     }
    
//    return isConatain
//    }
   
// console.log(   mutation(["Noel", "Ole"]))


// console.log('hey'.includes('h'))



///////////////////////////////////////////////////////////////////////////
// function getIndexToIns(arr, num) {
//     let newArr = arr.slice()
//    newArr= newArr.sort((a,b)=>a-b)
//     let numIndex=0;
//     let flag = true
//     for(let i=0; i <newArr.length; i++){
//         if(newArr[i]>=num){
//         numIndex=i
//         flag=false
//         break;
//         }
//     } flag===true?numIndex=arr.length:numIndex
//     return numIndex
//   }
  
//   const index =getIndexToIns([1,2,3,4], 1.5)
//   console.log(index)

// let arr = [1,7,5,8,3,4]
// console.log(arr.sort((a,b)=>a-b))

// console.log(arr)



////////////////////////////////////////////////////////////
// function bouncer(arr) {
//     let truthyValArr=[]
//    for(let i=0; i<arr.length; i++)
//    if(Boolean(arr[i])===true){
//     truthyValArr.push(arr[i])
//    }
//    return truthyValArr
//   }
  
// console.log(  bouncer([null, NaN, 1, 2, undefined]) )




// const n=Boolean(true)
// console.log(n)
// const n1 = Number(n)
// console.log(n1)



// function frankenSplice(arr1, arr2, n) {
// // const newArr1 = [...arr1]
// const newArr2 = [...arr2];
// newArr2.splice(n,0,...arr1)
// console.log(arr1)
// console.log(arr2)
// return newArr2
//   }
  
//   console.log(frankenSplice([1, 2, 3, 4], [], 0))

// const arr =[1,2,3,4,5]
// arr.splice(2,0,1, 2, 3)
// console.log(arr)








/////////////////////////////////////////////////////////////////
// function titleCase(str) {
//     str = str.toUpperCase()
//     let tempStr=str[0];
//     for(let i=1; i<str.length; i++){
//         if(str[i]===' ') {
//             tempStr+=' '
//             tempStr+=str[i+1]
//             i=i+1
//             continue
//         }
//        tempStr+= str[i].toLowerCase()
    

//     }
//     return tempStr
//   }
//   console.log( titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
 









//////////////////////////////////////////////////////////////////////////////////
// function findElement(arr, func) {
//     let num = 0;
//     let result=false
//     for(let i=0; i<arr.length; i++){
//        result = func(arr[i])
//       num=arr[i]
//       if(result===true) break
//     }
   
//     return result===true? num:undefined;
//   }
  
//   console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))







//////////////////////////////////////////////////////////////////////////////////
// function truncateString(str, num) {
//     if(str.length<=num) return str
  
//         let  truncatedStr=''
//       for(let i=0;i<num;i++){
// truncatedStr+=str[i]
//       }
//     return `${truncatedStr}...`
//     }
    
//     console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))







///////////////////////////////////////////////////////////////////////////////////
// function repeatStringNumTimes(str, num) {
//     if(num<0) return ''
//     const temp =str
//     for(let i=0; i<num-1; i++){
//         str+=temp
//     }
//     return str
//   }
  
//  console.log( repeatStringNumTimes("abc", -2))





////////////////////////////////////////////////////////////////////////////////////
// function confirmEnding(str, target) {
//     let comparingIndex= str.length-target.length;
//     let isSame=false
  
//     for(let i=0; i<target.length; i++){
     
//         if(str[comparingIndex]===target[i]){
//           isSame=true
//         }else{
//             isSame=false
//             break;
//         }
//         comparingIndex=comparingIndex+1;
//     }
//     return isSame
//   }
  
//  console.log( confirmEnding("Open sesame", "same") )


//////////////////////////////////////////////////////////////////////
// function findLongestWordLength(str) {
//     let largestWordLength=0;
//     let wordLength=0
//     for(let i =0; i<str.length; i++){
//     if(str[i]===' '|| i===str.length){
//       if(largestWordLength<wordLength){
//         largestWordLength=wordLength

//       }wordLength=0
//     }else{
//       wordLength++;
//     }

//     }
//     return largestWordLength;
//   }
//  console.log( findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))