import { surpriseMePrompts } from "../constants";

export function getRandomPrompt (prompt){

    // Generates a random index from collection of prompts
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);

    // random prompt 
    const randomPrompt = surpriseMePrompts[randomIndex];

    return randomPrompt;
}