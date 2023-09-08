const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4,) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {
    let hex = sha256(key);
    let shortHex = hex.slice(0, 8);
    let int = parseInt(shortHex, 16);
    return int;
  }

  hashMod(key) {
    let hash = this.hash(key);
    let index = hash % this.capacity;
    return index;
  }

  insertNoCollisions(key, value) {
    // const newTable = new HashTable();
    // newTable.hashMod(key);
    // newTable.insert(key, value)

    // for(let i = 0; i < this.data.length; i++){
    //   if(this.data[i] && this.data[i].key === key){
    //     throw new Error("Collision")
    //   }
    // }

    let index = this.hashMod(key);
    let bucket = this.data[index]
    if(bucket){
      throw new Error('hash collision or same key/value pair already exists!')
    }
    this.data[index] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {

  }

  insert(key, value) {
    // Your code here
  }

}

//console.log(capacity)
module.exports = HashTable;
