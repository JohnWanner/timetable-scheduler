const mySecret = process.env.SECRET || "secret passphrase for local development"

module.exports = {
    mongoDbURI: "mongodb+srv://mongouser:mongouser@cluster.sztld.mongodb.net/<dbname>?retryWrites=true&w=majority",
  secretOrKey: mySecret
};