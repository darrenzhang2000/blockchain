class Block{
    constructor(timestamp, hash, prevhash, data){
        this.index = index
        this.data = timestamp
        this.hash = ''
        this.prevhash = prevhash
        this.data = data
    }

    calculateHash(){
        return SHA256(this.index = this.prevHash + this.timestamp + JSON.stringify(this.data)).toString()
    }
}