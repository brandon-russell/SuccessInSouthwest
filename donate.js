function handleCustomDonation() {
    const amount = document.getElementById('customAmount').value;
    const username = 'FriendsofBosoGochaFeucht';
    const note = encodeURIComponent('Donation');
    
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    const venmoURL = `https://www.venmo.com/u/${username}?txn=pay&amount=${amount}&note=${note}`;
    window.open(venmoURL, '_blank');
}