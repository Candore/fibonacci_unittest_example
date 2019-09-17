function getNumber(testArray) {
  for (i = 0; i < testArray.length; i++) {
      let count = 0;
    for (j = 0; j < testArray.length; j++) {
       if (testArray[i] == testArray[j])
        count++;
    }
    if(count%2 !=0)
     {
         console.log(testArray[i], count);
          break;
     }

  }
}

getNumber([1,1,1,2,2,3]);