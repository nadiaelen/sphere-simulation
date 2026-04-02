const sceneText = document.getElementById('scene-text');
const promptText = document.getElementById('prompt-text');

const scenes = {
  arrival: {
    text: 'You arrive at the venue. Entry is quick and efficient. You move through security and enter without delay.',
    prompt: 'What is missing from this arrival experience?'
  },
  immersion: {
    text: 'Inside, lights flash rapidly and sound intensifies. Multiple visuals compete for attention, making it difficult to focus on any one moment.',
    prompt: 'How does this level of stimulation affect attention and experience quality?'
  },
  exit: {
    text: 'The show ends. Staff direct you immediately to the exit. There is no space to linger, reflect, or engage further.',
    prompt: 'How does this exit influence what the visitor remembers?'
  }
};

document.querySelectorAll('button[data-scene]').forEach((button) => {
  button.addEventListener('click', () => {
    const scene = scenes[button.dataset.scene];
    sceneText.textContent = scene.text;
    promptText.textContent = scene.prompt;
  });
});
