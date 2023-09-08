function followers(input) {
    /**Keep  a record of the followers, each with the count of likes and comments Jane has received from them */
    /**You  will  be  receiving lines with  commands  until  you  receive  the "Log out" command. */
    let slicedInput = input.slice();
    let followersRecord = {};
    let line = slicedInput.shift();

    while (line !== 'Log out') {
        let [command, ...args] = line.split(': ');
        /**New follower: {username}":
         * Add the username to your records (with 0 likes and 0 comments).
         * If a person with the given username already exists, ignore the line. */
        switch (command) {
            case 'New follower':
                let newUser = args[0];

                if (!followersRecord.hasOwnProperty(newUser)) {
                    followersRecord[newUser] = {
                        likes: 0,
                        comments: 0,
                    }
                }
                break;
            /**Like: {username}: {count}":
             *  If the username doesn't exist, add it to your records with the given count of likes. 
             * If the username exists, increase the count of likes with the given count. */
            case 'Like':
                let likeUser = args[0];
                let likesCount = Number(args[1]);

                if (!followersRecord[likeUser]) {

                    followersRecord[likeUser] = {
                        likes: likesCount,
                        comments: 0,
                    }

                } else {
                    followersRecord[likeUser].likes += likesCount;
                }
                break;
            /**Comment: {username}": 
             * If the username doesn't exist, add it to your records with 1 comment. 
             * If the username exists, increase the count of comments with 1. */
            case 'Comment':
                let commentUser = args[0];

                if (!followersRecord[commentUser]) {

                    followersRecord[commentUser] = {
                        likes: 0,
                        comments: 1,
                    }

                } else {
                    followersRecord[commentUser].comments++;
                }
                break;
            /**Blocked: {username}": 
             * Delete all records of the given username.  
             * If it doesn't exist, print: "{Username} doesn't exist. */
            case 'Blocked':
                let blockUser = args[0];

                if (followersRecord[blockUser]) {
                    delete followersRecord[blockUser];
                } else {
                    console.log(`${blockUser} doesn't exist.`);
                }
                break;
        }
        line = slicedInput.shift();
    }
    /**In the end, you have to print the count of followers, each follower with their likes and comments (the sum of likes and comments):
         *  "{count} followers" 
         * {username}: {likes+comments} */
    let followers = Object.keys(followersRecord);
    console.log(`${followers.length} followers`);

    for (let currUser in followersRecord) {
        let sum = followersRecord[currUser].likes + followersRecord[currUser].comments;

        console.log(`${currUser}: ${sum}`);

    }
}
followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])

    ;