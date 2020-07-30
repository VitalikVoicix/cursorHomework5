
//1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

 const getRandomArray = (lenght,minNum, maxNum) =>{
    newArray = [];
    for(let i = 0;i < lenght;i++) {
        const getRandNum = Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));
        newArray.push(getRandNum);
    }
    return newArray;
}
getRandomArray(5,50,80);


//2 Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getModa=(...numbers)=> {
    let newArr = numbers.filter(number=> Number.isInteger(number))
    let mode;
      for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < i; j++){
           if(newArr[j] === newArr[i]){
               mode = newArr[j];
              
           }
        }
      }
      return mode;
    }
    getModa(6, 55, 11, 78, 55, 77, 57, 87, 23, 2, 56, 3, );

//3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

    const getAverage = (...numbers)=>{
         let newArr = numbers.filter(number=> Number.isInteger(number))
              return  newArr.reduce((acc,elem)=> acc+=elem)/newArr.length;      
    }

    getAverage(6, 55, 11, 78, 55, 77, 57, 87, 23, 2, 56, 3, );;

//4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getMedian = (...numbers) =>{
       let newArr = numbers.filter(number => Number.isInteger(number))
       let sortArray = newArr.sort((prev,next) =>{
       return (prev-next);
       }); 
         if(sortArray.length%2!== 0 ){
           return sortArray[(sortArray.length/2-0.5)];
         }else{
           return  sortArray[(sortArray.length / 2)] - 0.5  ;
         }
}
getMedian(1,2,3,4);


//5 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

const filterEvenNumbers = (...numbers) =>{
     let evenArr =  numbers.filter(number => number % 2!==0)
     return evenArr;
 };
filterEvenNumbers(1, 2, 3, 4, 5, 6,80,30,41);

//6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0.Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers=(...numbers)=>{
     return  numbers.filter(number => number > 0).length;
}
countPositiveNumbers(1, -2, 3, -4, -5, 6,8,90);

//7 Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers)=>{
    return numbers.filter(number => number % 5 === 0)
}
getDividedByFive(6,15, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2,100);

 //8 Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*)
      
      const replaceBadWords=(string)=>{
       let newStr1;
         if(string.includes("fuck")){
           newStr1=string.replace(/fuck/i,"****");
         }else if(string.includes("shit")){
          newStr1=string.replace(/shit/i,"****");
        }
          return newStr1;
      }

replaceBadWords("It's bullshit!");



//9999Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
const divideByThree = (word) =>{
     let newArr=[];
     for(let i = 0; i < word.length; i = i+3){
         newArr.push(word.slice(i,i+3));
        }
        return newArr;
}
divideByThree("будапешт");

let container=document.querySelector("#root");
container.innerHTML=`
<p>1 Масив випадкових цілих чисел:${getRandomArray(5,50,80)}</p>
<p>2 Функція на моду:${getModa(6, 55, 11, 78, 55, 77, 57, 87, 23, 2, 56, 3, )}</p>
<p>3 Функція на середнє арифметичне:${getAverage(6, 55, 11, 78, 55, 77, 57, 87, 23, 2, 56, 3, )}</p>
<p>4 Функція на медіану:${getMedian(1,2,3,4)}</p>
<p>5 Функція яка фільтрує парні числа:${filterEvenNumbers(1, 2, 3, 4, 5, 6,80,30,41)}</p>
<p>6 Функція яка рахує кількість чисел більших нуля:${countPositiveNumbers(1, -2, 3, -4, -5, 6,8,90)}</p>
<p>7 Функція яка фільтрує елементи що діляться на 5:${getDividedByFive(6,15, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2,100)}</p>
<p>8 Функція яка заміняє погані слова:${replaceBadWords("It's bullshit!")}</p>
<p>9 Функція яка розбиває слово на склади по 3 букви:${divideByThree("будапешт")}</p>
`




     

