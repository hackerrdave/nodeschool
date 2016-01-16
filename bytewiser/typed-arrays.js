process.stdin.on('data', function(buffer) {
  console.log(JSON.stringify(Uint8Array.from(buffer)));
});

