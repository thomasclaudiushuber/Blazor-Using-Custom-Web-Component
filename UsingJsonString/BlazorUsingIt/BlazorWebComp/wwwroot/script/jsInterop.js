var jsInterop = jsInterop || {};

jsInterop.initializeFriendList = function (friendListElement, friends) {
    friendListElement.friendsJson = JSON.stringify(friends);
};