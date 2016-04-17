// Post = new Mongo.Collection('post');

Template.postForm.events({
  'submit form': function(event){
    event.preventDefault();
    var content = document.getElementById('content').value;
    //call method
    Meteor.call('addPost', content);
    // console.log(content);
    // var username = Meteor.user().username;
    //
    // Post.insert(
    //   {content: content,
    //     created: new Date(),
    //     username: username
    //   });
      event.target.reset();
    }
  });
