import logging
##logging setting
logging.basicConfig(
    level = logging.DEBUG,
    format= '%(asctime)s-%(name)s -%(levelname)s -%(message)s',
    datefmt='%Y -%m -%d %H:%M:%S',
    handlers=[
        logging.FileHandler('app1.log'),
        logging.StreamHandler()
    ]
    
)
logger = logging.getLogger(__name__)
def add(a,b):
    result = a+b 
    logger.debug(f"Adding {a} and {b} gives rise to {result}")
    return result


def sub(a, b):
    result = a-b
    logger.debug(f"Adding {a} and {b} gives rise to {result}")
    return result


def multiply(a, b):
    result = a*b
    logger.debug(f"Adding {a} and {b} gives rise to {result}")
    return result

def divide(a,b):
    try:
        result = a/b 
        logger.debug(f"Dividing {a}/{b} = {result}")
        return result
    except ZeroDivisionError:
        logger.error("Divison by zero error")
        return None 
add(10,15)
sub(10,15)
multiply(10,20)
divide(10,0)
    