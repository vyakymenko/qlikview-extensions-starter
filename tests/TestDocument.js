module.exports = {
	'Get WebTicket' : function (client) {
		client
			.maximizeWindow()
			.url('https://localhost/webticket/')
			.waitForElementVisible('body', 10000)
			.setValue('#txtUser', 'localhost\\username')
			.click('#GO')
	},

	'Go to Test Document' : function (client) {
		client
			.waitForElementVisible('#frame', 10000)
			.waitForElementVisible('.input_search', 10000)
			.setValue('.input_search', 'Test')
			.click('.btn_go')
	},

	'Document in Accesspoint --> Open Document' : function (client) {
		client
			.waitForElementVisible('a[href="/QvAJAXZfc/AccessPoint.aspx?open=&id=Test.qvw&client=Ajax"]', 10000)
			.click('a[href="/QvAJAXZfc/AccessPoint.aspx?open=&id=Test.qvw&client=Ajax"]')
			.end()
	}
};
