# import multiprocessing
# import time


# def square_numbers():
#     for i in range(5):
#         time.sleep(1)
#         print(f"Square :{i*i}")


# def cube_numbers():
#     for i in range(5):
#         time.sleep(1.5)
#         print(f"cube :{i*i*i}")


# if __name__ == "__main__":
#     # start the process
#     p1 = multiprocessing.Process(target=square_numbers)
#     p2 = multiprocessing.Process(target=cube_numbers)

#     t = time.time()
#     p1.start()
#     p2.start()

#     p1.join()
#     p2.join()
#     finished_time = time.time()-t
#     print(finished_time)
############################################################################
#multi threading with Thread pool executor

# from concurrent.futures import ThreadPoolExecutor
# import time

# def print_number(number):
#     time.sleep(1)
#     return f"NUmber :{number}"

# numbers = [1,2,3,4,5]
# with ThreadPoolExecutor(max_workers=3) as executor:
#     results = executor.map(print_number,numbers)
# for result in results:
#     print(result) 

###############################################################################

### Mutliprocessing with ProcessPoolExecutor

from concurrent.futures import 