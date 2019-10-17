function delay(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function main() {
  console.log("Starting...");

  for (let i = 0; i < 10; i++) {
    console.log(i);
    await delay(250);
  }

  console.log("Done!");
}

main();
