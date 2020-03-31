const SHA256 = require("crypto-js/sha256")

class Block {
    constructor(index, timestamp, data, prevhash) {
        this.index = index
        this.data = timestamp
        this.hash = this.calculateHash()
        this.prevhash = prevhash
        this.data = data
    }

    calculateHash() {
        //need to npm i crypto-js
        return SHA256(
            (this.index +
                this.prevHash + this.timestamp + JSON.stringify(this.data))
        ).toString()
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    addBlock = newBlock => {
        console.log(this.getLatestBlock())
        newBlock.prevHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    createGenesisBlock = () => {
        return new Block(0, "3/31/20", 'Genesis block', '0')
    }

    getLatestBlock = () =>{
        return this.chain[this.chain.length - 1]
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            console.log('i', i)
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i-1]
            
            if(currentBlock.hash !== currentBlock.calculateHash()){
                console.log('a')
                return false
            }

            if(currentBlock.prevhash !== previousBlock.hash){
                return false
            }
            console.log('d')
        }
        return true
    }
}

let newCoin = new Blockchain()
newCoin.addBlock(new Block(1, '3/31/20', {amount: 4}))
newCoin.addBlock(new Block(2, '3/31/20', {amount: 10}))

console.log(JSON.stringify(newCoin, null, 4))
console.log(newCoin.isChainValid())