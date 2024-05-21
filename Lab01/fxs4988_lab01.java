// Faris Soepangat
// 1001374988
// Language version: 18.0.2
// OS used: macOS

import java.io.File;

public class fxs4988_lab01 
{

    public static void main(String[] args) 
    {
        File targetDir = new File("."); // start at '.' which is cwd (no input)
        int sum = 0; 
        sum = dirSpace(targetDir);
        System.out.println(sum); // prints the total sum
    }

    public static int dirSpace(File directory) 
    {
        int sum = 0; // keeps track of total sum

        File[] files = directory.listFiles();

        for (File file : files) // skip . and ..
        {
            if (file.isFile()) // check if entry is file
            {
                sum += file.length(); // sum the size of file
            } 
            else if (file.isDirectory()) // check if entry is subdirectory
            {
                sum += dirSpace(file);
            }
        }

        return sum;
    }
}
