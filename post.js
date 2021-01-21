let post = {
    name: "Amatullah Brown",
    message: "This is a post",
    likes: 0,
    comments: [],
    addLike: function (num=1) {
        this.likes+=num;
    },
    addComment: function (message) {
        this.comments.push(message);
    }
};

