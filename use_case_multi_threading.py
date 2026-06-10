"""
Real world Example : MultiThreading for I/O bound tasks
Scenario : WEB Scraping
"""

import threading
import requests
from bs4 import BeautifulSoup

urls = [
    'https://www.langchain.com/langchain',
    'https://scikit-learn.org/stable/',
    'https://scikit-learn.org/stable/supervised_learning.html'
]


def fetch_content(url):
    response = requests.get(url)

    soup = BeautifulSoup(response.content, 'html.parser')

    print(f'Fetched : {len(soup.text)} characters from {url}')


threads = []

for url in urls:
    thread = threading.Thread(
        target=fetch_content,
        args=(url,)
    )

    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print("All web pages fetched")
