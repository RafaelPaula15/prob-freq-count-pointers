function isSubsequence(str1, str2) {
    // pointers
    let i = 0;
    let j = 0;
  
    while(i < str1.length && j < str2.length) {
      if(str1[i] === str2[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    }
    if(i === str1.length){
      return true;
    } else {
      return false;
    }
   
  }
/*
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters) */