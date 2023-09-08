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
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}

//console.log(capacity)
module.exports = HashTable;
