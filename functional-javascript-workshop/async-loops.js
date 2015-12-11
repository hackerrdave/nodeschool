function loadUsers(userIds, load, done) {
  var loadedUsers = [];

  userIds.forEach(function(userId){
    load(userId, function(user) {
       loadedUsers.push(user);
       if (loadedUsers.length === userIds.length) {
         done(loadedUsers);
       }
    });  
  });
}

module.exports = loadUsers;

