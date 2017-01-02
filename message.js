function Message(content, author){
    this.content = content
    this.author = author
    this.dateCreated = new Date()
    this.pinned = false
    this.upVotes = 0
    this.status = {
        hasBeenRead: false,
        getDateRead: undefined,
        setDateRead: function(){
            this.dateRead = new Date()
        }
    }
    
    /*
      TODO
      this.tags = []
    
    */
}

Message.prototype.checkHasBeenRead = function(){
  console.log(`Has this message been read? ${this.status.hasBeenRead}`)
}
function createMessage(){
    const msgContent = document.querySelector("textarea").value
    const msgAuthor = document.querySelector("input").value
    return new Message(msgContent, msgAuthor)
}