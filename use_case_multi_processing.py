"""
    Real world Example :multiprocessing for CPU -bound Tasks
    Scenario :Factorial Calculation
    Especially for large numbers,
    involve significant computational work.Multiprocessing
    can be used to distribute the workload across multiple 
    CPU cores,improving performance
"""

import multiprocessing
import math
import sys
import time 

# ia python security feature added to prevent extremely large integer conversions
# from crashing or slowing down programs
# x = int("9" * 10000000)
sys.set_int_max_str_digits(100000)

## function  to compute factorials of given number
def compute_factorial(number):
    print("Computing Factorials of {number}")
    result = math.factorial(number)
    print(f"Factorial of {number}  is {result}")
    return result
if __name__=="__main__":
    numbers  = [50000,6000,7000]
    start_time = time.time()
    
    ##create a pool of work processes
    with multiprocessing.Pool() as pool:
        results = pool.map(compute_factorial,numbers)
    end_time = time.time()
    print(f"Results: {results}")
    print(f"Time taken {end_time-start_time}")    