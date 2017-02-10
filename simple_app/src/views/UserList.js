var m = require('mithril');
var User = require("../models/User");

module.exports = {
	oninit: User.loadList,
	view: function(){
		return m('.user-list', User.list.map(function(user){
			// console.log(user);
			return m('a.user-list-item',{href: '/edit/' + user.id, oncreate: m.route.link}, user.firstName+ ' ' + user.lastName);
		}));
	}
} 