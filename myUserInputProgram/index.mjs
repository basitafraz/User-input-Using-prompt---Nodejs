import PromptSync from "prompt-sync";

const prompt = PromptSync();

let name = prompt('Enter your name:');

console.log(`Wellcome Mr.${name}, have a pleasent evening.`);

const num = prompt('Enter your number:')

console.log(Number(num) + 4)