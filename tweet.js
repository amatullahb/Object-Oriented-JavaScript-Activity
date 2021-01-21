// Create a class that models a Tweet. 
// The class should allow the user to add and remove a letter as well as view the current message. 
// The message should never be allowed to be longer than 140 characters :thinking:

class Tweet {
    constructor (message, likes=0) {
        this.message = message;
        if (! this.isGoodLength()) {
            this.message = this.message.substring(0, 280);
        }
        this.likes = likes;
    }
    addChar (char) {
        if (this.isGoodLength()) {
            this.message += char;
        }
    }
    removeChar () {
        this.message = this.message.substring(0, this.message.length-1);
    }
    addLike () {
        this.likes++;
    }
    viewMessage () {
        return this.message;
    }
    isGoodLength () {
        if (this.message.length <= 280) {
            return true;
        } else {
            return false;
        }
    }
}

let post141 = new Tweet("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus blandit vulputate. Aliquam viverra in sapien id pharetra. Ut venenatis x.", 2);
let post = new Tweet("new tweet");
// console.log(post.viewMessage());

// console.log(post);
// post.addChar('R');
// post.addLike();
// console.log(post.viewMessage());
console.log(post141.viewMessage());