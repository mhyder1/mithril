var m = require('mithril');

var User = {
	list: [],
	loadList: function(){
		return m.request({
			method: "GET",
			url: "http://localhost:3000/users",
			withCredentials: false
		}).then(function(result){
			// console.log(result.data);
			User.list = result;
		})
	},
	current: {},
	load: function(id){
		return m.request({
			method: 'GET',
			url: 'http://localhost:3000/users/:id',
			data: {id: id},
			withCredentials: false
		}).then(function(result){
			console.log(result);
			User.current = result;
		})
	},
	save: function(){
		return m.request({
			method: 'PUT',
			url: 'http://localhost:3000/users/:id',
			data: User.current,
			withCredentials: false
		})
	}
}


module.exports = User;