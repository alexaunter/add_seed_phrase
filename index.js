const nsp = require('near-seed-phrase');
const { exec } = require("child_process");

const account_id = process.argv[2];
const seed_phrase = process.argv[3] || account_id;
if (!account_id) {
  throw "usage: <binary> <account_id> [<seed_phrase>]";
}

console.log(`Adding seed phrase '${seed_phrase}' to account '${account_id}'`)

result = nsp.parseSeedPhrase(seed_phrase);
console.log(result);

const cmd = `near add-key '${account_id}' '${result.publicKey}'`;
console.log(cmd);
const process_result = exec(cmd, (error, stdout, stderr) => {
  console.log(error);
  console.log("stdout");
  console.log(stdout);
  console.log("stderr");
  console.log(stderr);
  console.log('finish');
});
