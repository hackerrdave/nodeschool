##Generate a core from a running app

SmartOS is a free and open-source SVR4 hypervisor, based on UNIX and is a completely in-memory operating system.

gcore is a utility available in SmartOS that can generate a core dump from a running node process. MDB is a debugger that can be used to debug a running processes or core dumps. We will start by generating a core dump of our running node.js application, and later we will use MDB to debug that core dump.

While a node.js app is running, run the command:
  `ps ax | grep node`
to ascertain the PID of the app. Then when can run gcore and pass it the PID:
  `gcore <PID>`

