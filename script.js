const sceneText = document.getElementById('scene-text');
const promptText = document.getElementById('prompt-text');

const scenes = {
  arrival: {
    text: 'You approach the venue. The exterior glows, and the crowd begins to gather. A sense of anticipation builds as the entrance sequence starts.',
    prompt: 'What details make the arrival feel special rather than merely functional?'
  },
  immersion: {
    text: 'Inside, the environment shifts rapidly. Light, sound, scale, and motion surround the visitor, creating a focused shared moment.',
    prompt: 'Where would you expect the strongest emotional peak in this scene?'
  },
  exit: {
    text: 'The show ends, but the memory continues. The exit path offers reflection, social sharing, and a final impression that may define the whole experience.',
    prompt: 'What could the venue do after the show to strengthen memory and word of mouth?'
  }
};

document.querySelectorAll('button[data-scene]').forEach((button) => {
  button.addEventListener('click', () => {
    const scene = scenes[button.dataset.scene];
    sceneText.textContent = scene.text;
    promptText.textContent = scene.prompt;
  });
});
