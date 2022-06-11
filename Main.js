
//const serverUrl = "https://uu5x3bggp9ul.usemoralis.com:2053/server";
//const appId = "aZLhm6TKG3dgDVLf1lz9rRqOeNtYcruXKSGPLcEB";


/* Moralis init code */
// REPLACE THE BELOW SERVER_URL and APP_ID with your own
const serverUrl = "https://uu5x3bggp9ul.usemoralis.com:2053/server";
const appId = "aZLhm6TKG3dgDVLf1lz9rRqOeNtYcruXKSGPLcEB";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis"
    })
      .then(function (user) {
        console.log("logged in user:", user);
        let ethAddress = user.get("ethAddress");
        document.getElementById(
          "myethAddress"
        ).textContent = `Logged in Eth Address ${ethAddress}`;
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    let ethAddress = user.get("ethAddress");
    document.getElementById(
      "myethAddress"
    ).textContent = `Already Logged in ${ethAddress}`;
  }
}

async function logOut() {
  await Moralis.User.logOut();
  document.getElementById("myethAddress").textContent = "";
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
