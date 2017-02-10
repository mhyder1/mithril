var m = require('mithril');
var User = require('../models/User');


module.exports = {
	oninit: function(vnode){User.load(vnode.attrs.id)},
	view: function(){
		return m('form',[
			m('label.label', 'First name'),
			m('input.input[type=text][placehoder=First name]', {
				oninput: m.withAttr('value', function(value){User.current.firstName = value}),
				value: User.current.firstName}),
			m('label.label', 'Last name'),
			m('input.input[type=text][placehoder=Last name]', {
				oninput: m.withAttr('value', function(value){User.current.lastName = value}),
				value: User.current.lastName}),
			m('button.button[type=submit]', {onclick: User.save}, 'Save')
		])
	}
}