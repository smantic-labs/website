# Login in
When the homepage loads, the LoginButton is mounted. The LoginButton will call the LoginModal if the user did not previously login and saved the website to their metamask plugin. In case the user did not login previously it will use the function getAddress which uses `window.ethereum.request` (using the method: *eth_requestAccounts*) to get the user's wallet address. This will open a new window which asks the user to pick a wallet and connect it to the website. Then the new window will close as well as the modal. If the user did refused to connect the modal will still be opened because the user has to login.

If the user did logged in before, then LoginButton will not call LoginModal, but instead will isLoggedIn to get the wallet's address using the method *eth_accounts*.

# Login out
It is possible to utilize the metamask to forget the website.