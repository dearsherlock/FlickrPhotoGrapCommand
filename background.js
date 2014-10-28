chrome.commands.onCommand.addListener(function(command) {
	//alert("HI,addListener3");
  //alert("onCommand event received for message2: "+command);
  console.log("--------------");
	chrome.tabs.query
  (
    {active:true},
    function(tab)
    {
    	console.log("9999");
    	
      if(tab[0].url.substring(0, 21) != 'http://www.flickr.com' & tab[0].url.substring(0, 22) != 'https://www.flickr.com')
      {
        //self.show();
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
 	log(msg.content);
  // If we don't return anything, the message channel will close, regardless
  // of whether we called sendResponse.
});

function log(str) {
  console.log(str);
  //logDiv.innerHTML += str + "<br>";
}
chrome.commands.getAll(function(commands){
  //alert("HI,getAll");
  
  //console.log(commands)
})
