
chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query
  (
    {active:true},
    function(tab)
    {
      if(tab[0].url.substring(0, 21) != 'http://www.flickr.com' & tab[0].url.substring(0, 22) != 'https://www.flickr.com')
      {
        console.log("not flickr page");
        return;
      }

      chrome.tabs.executeScript
      (
        tab[0].id, 
        {
          "code":"chrome.runtime.sendMessage({\"content\":document.body.innerHTML})"
        });
    });
});
chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) 
{
 	var st =$('<p />').html(msg.content); //document.createElement('p');
 	var tt=st.find(".main-photo");
 	var mainsrc=tt[0].attributes["src"].value.substring(2);
 	alert("main photo="+mainsrc);
});

