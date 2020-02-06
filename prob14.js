function longestCollatzSequence(limit) {
    limit--;
    let longestSeq = 0; 
    let startingNum = 0; 
    let counter = 0;  
    let result = limit;
    while (limit >= 1) { 
      counter = 0;
      while (result > 1) {
        
        if (result % 2 === 0) {
          result = result / 2;  
          counter++   
        } else if (result % 0 !== 0 && result !== 1){
          result = (result * 3) + 1;
          counter++     
        }            
      }                 
      if (result === 1) {
        if (counter > longestSeq) {      
          longestSeq = counter;
          startingNum = limit;      
        }
      }
      limit--; 
      result = limit;     
    }
    return startingNum;
  }
  
  longestCollatzSequence(1000000);