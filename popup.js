// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the accept invitations button click
    document.getElementById('acceptInvitations').addEventListener('click', function() {
      const acceptAll = document.getElementById('acceptAll').checked;
      const count = acceptAll ? -1 : parseInt(document.getElementById('inviteCount').value) || 1; // Default to 1 if not a number
  
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const url = tabs[0].url;
        if (url.startsWith('https://www.linkedin.com/mynetwork/invitation-manager/')) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: 'acceptInvitations',
            acceptAll: acceptAll,
            count: count
          });
        } else {
          alert('Please navigate to the LinkedIn Invitation Manager page to use this extension.');
        }
      });
    });
  
    // Event listener for changes to the radio buttons to toggle the input field
    document.querySelectorAll('input[name="acceptOption"]').forEach(radio => {
      radio.addEventListener('change', toggleInviteOption);
    });
  
    // Set initial state
    toggleInviteOption();
  });
  
  function toggleInviteOption() {
    const acceptNumberOption = document.getElementById('acceptNumber').checked;
    document.getElementById('inviteCount').disabled = !acceptNumberOption;
  }
  