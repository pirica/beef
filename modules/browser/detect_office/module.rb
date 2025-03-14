#
# Copyright (c) 2006-2025 Wade Alcorn - wade@bindshell.net
# Browser Exploitation Framework (BeEF) - https://beefproject.com
# See the file 'doc/COPYING' for copying permission
#
class Detect_office < BeEF::Core::Command
  def post_execute
    content = {}
    content['office'] = @datastore['office']
    save content
    BeEF::Core::Models::BrowserDetails.set(@datastore['beefhook'], 'HasOffice', Regexp.last_match(1)) if @datastore['results'] =~ /^office=Office (\d+|Xp)/
  end
end
