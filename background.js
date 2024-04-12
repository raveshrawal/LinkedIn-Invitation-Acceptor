chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'acceptInvitations') {
      console.log('Invitation accept request received:', request);
      // You could add logic here if needed
    }
  });
  