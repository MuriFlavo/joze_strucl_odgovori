var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-1nqakagsly1qonjo-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

function getGoldPrice() {
    fetch("https://www.goldapi.io/api/XAU/EUR", requestOptions)
        .then(response => response.json())
        .then(data => {
            const goldPriceEUR = data.price/28.3495; // Assuming the API response has a 'price' field
            const goldPriceDiv = document.getElementById('gold_price');
            goldPriceDiv.textContent = `Gold Value: €${goldPriceEUR.toFixed(2)}(g)`;
        })
        .catch(error => console.log('error', error));
}

// Call getGoldPrice once initially
getGoldPrice();

// Set interval to fetch and update gold price every 10 minutes (600000 ms)
setInterval(getGoldPrice, 1200000);

document.getElementById('theme-toggle').addEventListener('click', function() {
    const root = document.documentElement;

    // Primary color
    const currentPrimaryColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    const newPrimaryColor = currentPrimaryColor === '#D8AE7E' ? '#009B00' : '#D8AE7E';
    // Secondary color
    const currentSecondaryColor = getComputedStyle(root).getPropertyValue('--secondary-color').trim();
    const newSecondaryColor = currentSecondaryColor === '#F8C794' ? '#ECC74B' : '#F8C794';
    // Third color
    const currentThirdColor = getComputedStyle(root).getPropertyValue('--third-color').trim();
    const newThirdColor = currentThirdColor === '#FFE0B5' ? '#5FA41C' : '#FFE0B5';
    // Neutral color
    const currentNeutralColor = getComputedStyle(root).getPropertyValue('--neutral-color').trim();
    const newNeutralColor = currentNeutralColor === '#FFF2D7' ? '#0044B8' : '#FFF2D7';
    // Background color
    const currentBackgroundColor = getComputedStyle(root).getPropertyValue('--backgroundColor').trim();
    const newBackgroundColor = currentBackgroundColor === '#FFFFFF' ? '#FF3AC6' : '#FFFFFF';
    // Gradient inside
    const currentGradientInsideColor = getComputedStyle(root).getPropertyValue('--gradient-inside').trim();
    const newGradientInsideColor = currentGradientInsideColor === '#FFFFFF' ? '#009B00' : '#FFFFFF';
    // Gradient outside
    const currentGradientOutsideColor = getComputedStyle(root).getPropertyValue('--gradient-outside').trim();
    const newGradientOutsideColor = currentGradientOutsideColor === '#FDF7E4' ? '#FF1A00' : '#FDF7E4';

    root.style.setProperty('--primary-color', newPrimaryColor);
    root.style.setProperty('--secondary-color', newSecondaryColor);
    root.style.setProperty('--third-color', newThirdColor);
    root.style.setProperty('--neutral-color', newNeutralColor);
    root.style.setProperty('--backgroundColor', newBackgroundColor);
    root.style.setProperty('--gradient-inside', newGradientInsideColor);
    root.style.setProperty('--gradient-outside', newGradientOutsideColor);
});

//nogomet
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "bcb69147c8c4bb31e80a41b221d6e63c");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// Fetch the latest Premier League match
fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2023&last=1", requestOptions)
    .then(response => response.json())
    .then(result => {
        const matchDetails = document.getElementById('match_details');
        const latestMatch = result.response[0];
        const homeTeam = latestMatch.teams.home.name;
        const awayTeam = latestMatch.teams.away.name;
        const homeScore = latestMatch.goals.home;
        const awayScore = latestMatch.goals.away;
        const matchDate = new Date(latestMatch.fixture.date).toLocaleString();

        matchDetails.innerHTML = `
            <p><strong>${homeTeam}</strong> vs <strong>${awayTeam}</strong></p>
            <p>Score: ${homeScore} - ${awayScore}</p>
            <p>Date: ${matchDate}</p>
        `;
    })
    .catch(error => console.log('error', error));