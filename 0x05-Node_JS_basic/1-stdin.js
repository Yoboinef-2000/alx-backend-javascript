process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const trust = process.stdin.read();

  if (trust) {
    process.stdout.write(`Your name is: ${trust}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
