const usernameLeetcode = 'arikrishna37';
const usernameCodechef = 'arikrishna_03';

async function testLeetcode() {
    console.log("Fetching Leetcode...");
    const url = "https://leetcode.com/graphql";
    const query = `
    query userProblemsSolved($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        matchedUser(username: $username) {
            submitStats {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
            profile {
                ranking
            }
        }
        userContestRanking(username: $username) {
            rating
            topPercentage
            globalRanking
        }
    }
    `;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify({ query, variables: { username: usernameLeetcode } })
        });
        const data = await response.json();
        console.log("LeetCode Response:", JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("LeetCode Error:", e);
    }
}

async function testCodechef() {
    console.log("Fetching CodeChef...");
    const url = `https://www.codechef.com/users/${usernameCodechef}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const html = await response.text();
        console.log("CodeChef HTML length:", html.length);
        
        // Let's extract rating
        const ratingMatch = html.match(/<div class="rating-number">(\d+)<\/div>/);
        if (ratingMatch) {
            console.log("CodeChef rating found:", ratingMatch[1]);
        } else {
            console.log("CodeChef rating-number class not found. Trying regex search for rating...");
            // Let's find any text with rating
            const starMatch = html.match(/(\d)\s*★/);
            if (starMatch) console.log("CodeChef stars:", starMatch[1]);
            const genericRating = html.match(/Rating:\s*(\d+)/i);
            if (genericRating) console.log("Generic rating match:", genericRating[1]);
        }
    } catch (e) {
        console.error("CodeChef Error:", e);
    }
}

async function main() {
    await testLeetcode();
    await testCodechef();
}

main();
