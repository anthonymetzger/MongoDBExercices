Db.movies.find({});
db.movies.find({'writer':'Quentin Tarantino'});
db.movies.find({'actors': 'Brad Pitt'});
db.movies.find({'franchise':'The Hobbit' });
db.movies.find({'year':{ $gt: 1989, $lt: 2000 }});
db.movies.find({'year': { $not: { $gt: 2010, $lt: 2000 } }});
db.movies.updateOne({title: "The Hobbit: An Unexpected Journey"}, {$set: {synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}});
db.movies.updateOne({title: "The Hobbit: The Desolation of Smaug"}, {$set: {synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}});
db.movies.insertOne({title: 'Pulp Fiction', actors: ['Samuel L. Jackson', 'John Travolta', 'Uma Thurman']});
db.movies.updateOne({ title: 'Pulp Fiction' },{ $push: { actors: 'Samuel L. Jackson' } });
db.movies.find({'synopsis':  /Bilbo/  });
db.movies.find({'synopsis':  /Gandalf/  });
db.movies.find({ $and: [{ synopsis: /Bilbo/g }, { synopsis: { $not: /Gandalf/g } }] }).pretty();
db.movies.find({ $or: [{ synopsis: /dwarves/ }, { synopsis: /hobbit/ }] }).pretty();
db.movies.find({ $or: [{ synopsis: /gold/ }, { synopsis: /dragon/ }] }).pretty();
db.movies.deleteOne({ title: "Pee Wee Herman's Big Adventure" });
db.movies.deleteOne({ title: "Avatar" });
db.users.insertMany([
  {
    username: "SallySmith",
    first_name: "Sally",
    last_name: "Smith"
  },
  {
    username: "JimmyHagen",
    full_name: {
      first: "Jimmy",
      last: "Hagen"
    }
  }
]);
const sallyPosts = db.posts.insertMany([
  {
    username: "SallySmith",
    title: "Passes out at party",
    body: "Wakes up early and cleans house"
  },
  {
    username: "SallySmith",
    title: "Buys a House",
    body: "Living in a new neighborhood now"
  },
  {
    username: "SallySmith",
    title: "Reports a bug in your code",
    body: "Sends you a Pull Request"
  }
]);

const jimmyPosts = db.posts.insertMany([
  {
    username: "JimmyHagen",
    title: "Borrows something",
    body: "Returns it when he is done"
  },
  {
    username: "JimmyHagen",
    title: "Borrows everything",
    body: "The end"
  },
  {
    username: "JimmyHagen",
    title: "Forks your repo on github",
    body: "Sets to private"
  }
]);
const borrowsSomething = db.posts.findOne({ title: "Borrows something" })._id;
const borrowsEverything = db.posts.findOne({ title: "Borrows everything" })._id;
const forksRepo = db.posts.findOne({ title: "Forks your repo on github" })._id;
const passesOut = db.posts.findOne({ title: "Passes out at party" })._id;
const reportsBug = db.posts.findOne({ title: "Reports a bug in your code" })._id;
db.comments.insertMany([
  {
    username: "SallySmith",
    comment: "Hope you got a good deal!",
    post: borrowsSomething
  },
  {
    username: "SallySmith",
    comment: "What's mine is yours!",
    post: borrowsEverything
  },
  {
    username: "SallySmith",
    comment: "Don't violate the licensing agreement!",
    post: forksRepo
  },
  {
    username: "JimmyHagen",
    comment: "It still isn't clean",
    post: passesOut
  },
  {
    username: "JimmyHagen",
    comment: "Denied your PR cause I found a hack",
    post: reportsBug
  }
]);
