  [_metadata_title]:- "Systems programming introduction"
  [_metadata_date]:- "2019-01-13"
  [_metadata_tags]:- "systems,blah"

# Systems programming introduction

[Youtube Playlist](https://www.youtube.com/watch?v=wVNvEGe2UOA&list=PLPXsMt57rLtjNzxZBDg9xJB7KT83WStBO)

## Video 1: Introduction to Processes, mode switch, context switch

- Single core: only one process at one time
- For multiple processes, context switching occurs
- Context switching: Wait P1, let P2 run for some time.
- 2 Modes:
  - Kernal mode:
  - User mode
- When process is not running, it is ready state.
- Three states of process:
  - Running: Currently running
  - Ready: Not running because another process is running
  - Blocked: Cannot run even if have CPU
- Blocked has to go through ready state to be running
- Running and ready can be switched 
-
- Unix/Linux
  - `fork()`
    - `fork()` creates clone of the first process and runs the program
- Windows
  - `exec()` spawns a new process with the program.

## Video 2: How to create processes in C

```c
#include <unistd.h>
#include <stdio.h>

void main() {
    int x=1;
    int ret = fork();
    // From this point the process is forked
    // The program will exit twice
    // Once in the child process
    // and once in the parent process

    if (ret == 0) {
        // Only child executes this code
        printf("Child: Value of x %d\n", x++);
    } else {
        // only parent executes
        printf("Parent: Value of x %d\n", x--);
    }
    printf("Exiting x=%d\n", x);
}
```

## Video 3: How to use `fork()`, `wait()` ...

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h> // for exit()
#include <sys/types.h> // for pid_t
#include <sys/wait.h> // for wait()

void main() {
    pid_t childPID = fork();
    if (childPID < 0) {
        printf("ERRORED");
        exit(-1);
    }

    if (childPID != 0) {
        printf("Parent: PID: %d; CPID: %d\n", getpid(), childPID);
        wait(NULL); // Wait till child exits
    } else {
        printf("Child: PPID %d, PID: %d\n", getppid(), getpid());
        execl("/usr/bin/echo", "echo", "Hello world", NULL);
    }
}
```

