##Load V8 Module

mdb - or modular debugger - allows you to load modules that extend its capabilities.

To inspect the state of a process that runs JavaScript via the V8 virtual machine, mdb has to be augmented with the ability to examine V8's internal data structures.

You can use mdb by attaching it to a running Node.js process or by loading a core file with mdb. 

Loading a core file with mdb:
  `$ mdb corefile`

And to load the V8 module itself, use the following mdb command that can load any external module:
  `::load v8`

The results of this command will look like the following:

```
V8 version: 3.14.5.9
Autoconfigured V8 support from target
C++ symbol demangling enabled
```

