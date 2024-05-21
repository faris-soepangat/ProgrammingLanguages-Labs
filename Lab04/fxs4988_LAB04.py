# Faris Soepangat
# 1001374988
# Due Date: 11/17/23
# OS/Python Version: macOS/3.12.0

# Write a program that will take an input called input.txt which will contain
# a Java program and parse it and output an annotated version

# initialize the count variable
count = 0

# opens the file "input.txt" in read mode 'r'
file = open("input.txt", 'r')

# reads all lines from the file and stores them in a list called 'lines'
lines = file.readlines()

# iterate through each line in the list of lines
for line in lines:
	
	# removes leading and trailing whitespaces from the line
	line = line.strip()
	
	# checks if the first character of the line is '{'
	if line[0] == '{':
	
		# increment the counter
		count = count + 1
		
	# prints the current count followed by the parsed line
	# rstrip removes trailing whitespace from the line
	print(str(count) + line.rstrip())
	
	# checks if the first character of the line is '}'
	if line[0] == '}':
	
		# decrement the counter
		count = count - 1
		
# tests for unmatched braces
if count != 0: 

	# output an error message
	print("Error: expected '}'\n")
		