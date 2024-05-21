# Faris Soepangat
# 1001374988
# Language version: 3.10.6
# OS used: macOS

import os

def dirSpace(directory):
    Sum = 0 # keeps track of the total sum

    for item in os.scandir(directory): 
    	if item.is_file(): # checks if entry is file
    		Sum += item.stat().st_size # local sum
    	elif item.is_dir(): # checks if entry is directory
    		Sum += dirSpace(item.path) # local sum

    return Sum

targetDir = '.' # start at '.' which is the current working directory
Sum = dirSpace(targetDir)
print(Sum) # prints the total sum