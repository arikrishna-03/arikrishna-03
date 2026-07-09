import requests
from bs4 import BeautifulSoup
import re

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def test_codechef():
    url = "https://www.codechef.com/users/arikrishna_03"
    print("Fetching CodeChef...")
    r = requests.get(url, headers=headers)
    print("Status:", r.status_code)
    if r.status_code == 200:
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # Look for rating
        rating_div = soup.find("div", class_="rating-number")
        if rating_div:
            print("Rating found:", rating_div.text.strip())
        else:
            # Let's search inside text
            match = re.search(r'(\d+)\s*\*+', r.text)
            if match:
                print("Regex rating:", match.group(1))
            else:
                print("Rating div not found, length of text:", len(r.text))
                # Print a bit of head/meta
                print(r.text[:500])

def test_leetcode():
    url = "https://leetcode.com/graphql"
    query = """
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
        }
    }
    """
    print("Fetching LeetCode...")
    r = requests.post(url, json={"query": query, "variables": {"username": "arikrishna37"}})
    print("Status:", r.status_code)
    if r.status_code == 200:
        print("Data:", r.json())

if __name__ == "__main__":
    test_codechef()
    test_leetcode()
