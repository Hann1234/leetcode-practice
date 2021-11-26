let singleNumber = (nums) => {

  const hashTable = {}; //creat a hash table to keep track of how many times a number appears in our array
                        //{1000: 5, 3: 200, 234: 2}
  for (const num of nums) {
      hashTable[num] = hashTable[num] + 1 || 1; //creates our hash table object values
  }
};