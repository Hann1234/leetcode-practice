let singleNumber = (nums) => {

  const hashTable = {}; //create a hash table as an object to keep track of how many times a number appears in our nums array
                        //{1000: 5, 3: 200, 234: 2}
  for (const num of nums) {
      hashTable[num] = hashTable[num] ++ || 1; //creates our hash table object properties or increments 1 if number already exists
  }

  for (const key in hashTable) {
      if (hashTable[key] === 1) {
          return key;
      }
  }
};

//PASSED! Learning about hash tables has been an extremely helpful concept