function getNumber(length) {
    let startNum = '1';
    for (let i = 0; i < length; i++) {
      startNum += '0';
    }
    return Number(startNum);
  }
  
  getNumber(2)
  
  function numberToString(number) {
    return number.toString();
  }
  
  function reverseStr(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
  }
  
  function isPalindrome(num) {
    if (num > 0) {
      return Number(reverseStr(numberToString(num)));
    }
  }
  
  function largestPalindromeProduct(n) {
    let limiter = getNumber(n);
    let pals = [];
    for (let i = limiter - 1; i >= 0; i--) {
      let multiple = limiter - 1 ;
      while (multiple > limiter /10) {
        let product = multiple * i;
        // test for palindromeness here!
        if (isPalindrome(product) === product) {     
          pals.push(product);
        } 
        // avoid endless loop with:
        multiple--;
      }
    }
    return Math.max(...pals);
  }
  
  largestPalindromeProduct(3);