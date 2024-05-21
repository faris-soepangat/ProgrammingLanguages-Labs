# Faris Soepangat
# 1001374988
# Date turned in: October 21, 2023
# OS used: macOS

# Use Python to create a simple calculator that accepts RPN
import os

# reverse polish notation function
def RPN(expression):
	# empty stack that holds operands
	stack = []
	# accepts 4 operators and sets it to "+", "-", "*", "/"
	operators = set(['+', '-', '*', '/'])
	
	# splits expression into tokens
	for token in expression.split():
		# input numbers will be single digits
		if token.isdigit():
			# each digit will be put on the stack
			stack.append(int(token))
		elif token in operators:
			# pops the operands on to the stack
			operand2 = stack.pop()
			operand1 = stack.pop()
			# performs addition and puts onto the stack
			if token == '+': stack.append(operand1 + operand2)
			# performs subtraction and puts onto the stack
			elif token == '-': stack.append(operand1 - operand2)
			# performs multiplication and puts onto the stack
			elif token == '*': stack.append(operand1 * operand2)
			# performs division and puts onto the stack
			elif token == '/': stack.append(operand1 / operand2)
	# returns results onto the stack
	return stack[0]
	
# main function
def main():
	# the input will be provided in a text file called input_RPN.txt
	# uses os package to get the path
	# the input will be in postfix notation
	input_file = os.path.join(os.path.dirname(file), 'input_RPN.txt')
	
	# reads input file 
	with open(input_file, 'r') as file:
		# splits the lines after reading the provided file
		RPN_expression = file.read().splitlines()
		
	for expression in RPN_expression:
		# displays the calculated result of the expression
		print(RPN(expression)) 