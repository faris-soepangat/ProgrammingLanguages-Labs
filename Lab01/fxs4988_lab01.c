// Faris Soepangat
// 1001374988
// Language version: 11.0.3
// OS used: macOS

#include <stdio.h>
#include <string.h>
#include <dirent.h>
#include <sys/stat.h>

/*
	TargetDir = "." // start at dot(wich is cwd) (no input)
int sum = 0; // keeps track of total
	sum = Dirspace(TargetDir) // function called dirspace. if you give it a directory it will do the hard work
	Print sum; // prints the total

*/

int main()
{
	char targetDir = "."; // start at dot(wich is cwd) (no input)
	int sum = 0; // keeps track of total
	sum = dirspace(targetDir); // calls function called dirspace. if you give it a directory it will do the hard work
	printf("%d\n", sum); // prints the total
	
	return 0;
}
/*


int Dirspace(STR Dir) // function, returns int, takes string argument called dir
int sum = 0; 
	for each entry in Dir // skip . and .., given a directory and need to sum all the files
		if entry is file // check for file
			sum+= size (file) // local sum
		if entry is Dir // check for subdirectory
			sum += Dirspace(entry) // call dirspace function
return sum

*/

int Dirspace(char arr[dir])
{
	int sum = 0;
	
	// for each entry in dir
		// if file
			sum += size(file)
		// if dir
			sum += dirSpace(dir)
	
	return sum;
	
}

