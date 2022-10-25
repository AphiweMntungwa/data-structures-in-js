export default class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);

    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let charCode = key.charCodeAt(i) - 96;
            total = (total * WEIRD_PRIME + charCode) % this.keyMap.length
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (this.get(key)) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index][i][1] = value;
                }
                return true;
            }
        }
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
        return true;
    }
    get(key) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            return undefined
        }
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1];
            }
        }

    }
    values() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1])
                }
            };

        }
        return valuesArr;
    }
    keys() {
        let keysArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0])
                }
            };

        }
        return keysArr;
    }

}