chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'acceptInvitations') {
      const acceptAll = request.acceptAll;
      const numToAccept = request.count;
      const invitations = document.querySelectorAll('.invitation-card__action-btn.artdeco-button--secondary');
  
      if (acceptAll) {
        invitations.forEach(invitation => invitation.click()); // Accept all invitations
      } else {
        for (let i = 0; i < Math.min(invitations.length, numToAccept); i++) {
          invitations[i].click(); // Accept a specific number of invitations
        }
      }
    }
  });
  