##Call Stack

When a core dump is generated from a Node.js application, we can examine the callstack to determine the function that was being executed at the moment in time that the core dump was created.  The mdb is a very helpful tool to perform this inspection because it has the ability to understand V8's internal data structures and how JavaScript functions are compiled at runtime.

To inspect a Node.js application's core dump file, start by entering mdb and loading the V8 module:

```
$ mdb core.12487

> ::load v8
```

Now that the V8 module is loaded in mdb, we can use the `::jsstack` command to display a combined JavaScript/C stack trace:

```
> ::jsstack

native: libc.so.1`_lwp_kill+0xa
native: libc.so.1`raise+0x20
native: libc.so.1`abort+0x98
        (1 internal frame elided)
native: v8::internal::Isolate::DoThrow+0x39f
native: v8::internal::Isolate::Throw+9
native: v8::internal::IC::ReferenceError+0x64
native: v8::internal::CallICBase::LoadFunction+0x27f
native: v8::internal::CallIC_Miss+0x146
        (1 internal frame elided)
        (1 internal frame elided)
js:     <anonymous> (as <anon>)
        (1 internal frame elided)
js:     <anonymous> (as Module._compile)
js:     <anonymous> (as Module._extensions..js)
js:     <anonymous> (as Module.load)
js:     <anonymous> (as Module._load)
js:     <anonymous> (as Module.runMain)
js:     startup
js:     <anonymous> (as <anon>)
        (1 internal frame elided)
        (1 internal frame elided)
native: _ZN2v88internalL6InvokeEbNS0_6HandleINS0_10JSFunctionEEENS1_INS0...
native: v8::internal::Execution::Call+0xc8
native: v8::Function::Call+0x14a
native: node::Load+0xf5
native: node::Start+0x163
native: _start+0x6c
```

That stack trace represents the stack that was present at the moment that this core dump was created.  This tool is very useful to debug exceptions in production applications, and with the ability to create these "snapshot" core dumps at the moment of the exception this tool is very handy in debugging those difficult-to-reproduce bugs.
