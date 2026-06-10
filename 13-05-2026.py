from concurrent.futures import ThreadPoolExecutor

import time 

def print_number(number):

    return f"Number :{number}"

numbers = [1,2,3,4,5,3,4,5,5,3,3,3,2,234]
with ThreadPoolExecutor(max_workers= 5) as executor:
    results = executor.map(print_number,numbers)
    
for result in results:
    print(result)   