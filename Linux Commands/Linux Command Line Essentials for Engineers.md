# Linux Command Line Essentials for Engineers

## I. Introduction to Linux Commands and Environment Setup

This briefing summarizes key Linux commands and concepts crucial for engineers, particularly for troubleshooting and managing applications in a Linux environment. The content emphasizes hands-on learning, demonstrating how to set up a practice environment using Docker and then applying various commands to diagnose a real-world application issue.

The primary goal is to empower users to "turn this scary black screen called terminal into your superpower." The tutorial stresses that learning by doing is the most effective method, encouraging users to follow along with the commands.

### Setting Up a Linux Environment for Practice:

For users on Mac or Windows, a Linux environment can be easily set up using Docker.

1. **Download Docker Desktop:** Install Docker Desktop for your operating system.
2. **Download Custom Docker Image:** Use the provided command (docker pull your-custom-image-link) to fetch a custom Docker image that includes a Linux operating system and necessary tools for the demo.
3. **Run Docker Container:** Execute docker run -it your-custom-image-name to launch a Linux terminal inside the Docker container. No prior Docker knowledge is required beyond these steps.

### Validating the Linux Environment:

- **uname**: This command ("Unix name") displays the name of the operating system. Executing it confirms you are on "Linux." Unix is the underlying operating system that Linux was built upon.

## II. Navigating and Inspecting the Linux File System

Understanding how to move around and view files in the Linux file system is fundamental for any engineer.

### A. Locating Your Current Position:

- **pwd**: "Print Working Directory." Shows the current directory you are in. For example, initially, you might be in /root, which is the root user's home directory.

### B. Changing Directories:

- **cd**: "Change Directory." Used to navigate to different locations in the file system. For instance, cd /var/log/application moves you to the specified application log directory.

### C. Listing Directory Contents:

- **ls**: Lists all files and subdirectories within the current location.
- **ls -l**: Provides an "extended view" or "additional information" about files, including their size and permissions. This is useful for checking if a log file is too large or if access is restricted.

## III. Viewing, Filtering, and Managing File Contents

Once you can navigate, the next step is to interact with the content of files, especially log files for debugging.

### A. Displaying File Contents:

- **cat**: "Concatenate." Used to print the entire contents of a file to the terminal. For example, cat error.log will display the log file's contents.

### B. Filtering File Contents with grep:

- **grep**: Filters lines in a file that contain a specific word or phrase.
- **Piping (|)**: Allows chaining commands, where the output of one command becomes the input for the next. For example, cat error.log | grep "database" will display only lines from error.log that contain the word "database."
- When searching for phrases with grep, enclose the phrase in quotes: grep "connection refused".

### C. Saving Command Output to a File:

- **Redirection (>):** Redirects the output of a command to a new file, overwriting it if it exists. For example, grep "database" error.log > database_errors.txt saves all lines containing "database" from error.log into database_errors.txt.

### D. Copying Files:

- **cp**: "Copy." Used to create a copy of a file. Syntax: cp [source_file] [destination_file/directory]. You can specify a new name and a different path for the copied file, e.g., cp database_errors.txt /root/db_errors.txt.

### E. Counting Filtered Lines:

- **wc -l**: "Word Count - lines." When piped with grep, it counts the number of lines that match the filter. Example: grep "connection refused" database_errors.txt | wc -l will give you the total count of "connection refused" errors.

## IV. Searching for Files and Comparing File Differences

Finding specific files and understanding changes between file versions are critical for configuration management and debugging.

### A. Finding Files:

- **find**: Used to search for files based on various criteria (name, size, type, etc.).
- To find files with a specific name or pattern in the current directory: find . -name "*.conf"
- To search the entire file system (from the root directory): find / -name "*.conf"
- The find command can be combined with grep to further filter results: find / -name "*.conf" | grep "DB"

### B. Comparing Files:

- **diff**: Compares two files and shows the differences between them. This is particularly useful for identifying changes in configuration files. For example, diff db.conf db.conf.backup will highlight the lines that are different.
- **Tab Autocomplete**: Pressing Tab can autocomplete file names and paths, making command entry faster and less prone to typos.

## V. Network Connectivity and File Permissions

Diagnosing network issues and managing file access are advanced but essential skills.

### A. Checking Service Connectivity:

- **curl**: A command-line tool for making HTTP requests. It can be used to check if a service is accessible on a specific port. Example: curl -I http://localhost:5432 checks for a response from a service on port 5432, only showing headers (-I).

### B. Editing Files with vim:

- **vim**: A powerful command-line text editor.
- To open a file: vim filename.txt
- **Modes:** vim has different modes. The two main ones are:
- **Normal (Navigation) Mode:** For moving around the file.
- **Insert (Edit) Mode:** For typing and modifying text. Enter this mode by pressing i.
- **Exiting vim:**Without saving: Esc then :q!
- Saving and quitting: Esc then :wq

### C. Understanding and Changing File Permissions (chmod):

- **File Permissions (ls -l output):** The output of ls -l shows permissions (e.g., -rw-r--r--).
- The first character (- or d): Indicates if it's a file (-) or a directory (d).
- The next nine characters are in three sets of three:
- **User (owner) permissions:** Read (r), Write (w), Execute (x).
- **Group permissions:** Read (r), Write (w), Execute (x).
- **Other (everyone else) permissions:** Read (r), Write (w), Execute (x).
- rwx corresponds to numerical values: read (4), write (2), execute (1). Summing these values gives the numeric permission (e.g., rwx = 7, rw- = 6, r-- = 4).
- **chmod**: "Change Mode." Used to modify file permissions.
- Syntax: chmod [permissions] [filename]
- Example: chmod 666 db.conf sets read/write permissions for user, group, and others.
- Example: chmod 600 db.conf sets read/write permissions only for the owner, with no permissions for group or others. This is often used to make a "read-only" file editable for the owner (e.g., if it was 400).

## VI. Exiting the Linux Environment

- **exit**: Typing exit in the Docker container's terminal will return you to your host operating system's terminal.

## VII. Conclusion

Mastering these fundamental Linux commands transforms the terminal into a powerful tool for engineers. From navigating file systems and inspecting logs to diagnosing connectivity issues and managing file permissions, these commands are essential for effective troubleshooting and system administration. The ability to "troubleshoot an issue, find files on your file system, navigate around, make changes to the file permissions, and so on" becomes second nature with practice.