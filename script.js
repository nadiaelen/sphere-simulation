const sceneText = document.getElementById('scene-text');
const promptText = document.getElementById('prompt-text');
const sceneImage = document.getElementById('scene-image');
const modeToggle = document.getElementById('mode-toggle');

let mode = 'normal';
let currentScene = 'arrival';

const scenes = {
  normal: {
    arrival: {
      text: 'You approach the venue. The exterior glows, and the crowd begins to gather. A sense of anticipation builds as the entrance sequence starts.',
      prompt: 'What details make the arrival feel special rather than merely functional?',
      image: 'assets/arrival.jpg',
      alt: 'Arrival scene'
    },
    immersion: {
      text: 'Inside, the environment shifts rapidly. Light, sound, scale, and motion surround the visitor, creating a focused shared moment.',
      prompt: 'Where would you expect the strongest emotional peak in this scene?',
      image: 'assets/immersion.jpg',
      alt: 'Immersion scene'
    },
    exit: {
      text: 'The show ends, but the memory continues. The exit path offers reflection, social sharing, and a final impression that may define the whole experience.',
      prompt: 'What could the venue do after the show to strengthen memory and word of mouth?',
      image: 'assets/exit.jpg',
      alt: 'Exit scene'
    }
  },
  broken: {
    arrival: {
      text: 'You arrive at the venue. Entry is quick and efficient. You move through security and enter without delay.',
      prompt: 'What is missing from this arrival experience?',
      image: 'assets/arrival-broken.jpg',
      alt: 'Broken arrival scene'
    },
    immersion: {
      text: 'Inside, lights flash rapidly and sound intensifies. Multiple visuals compete for attention, making it difficult to focus on any one moment.',
      prompt: 'How does this level of stimulation affect attention and experience quality?',
      image: 'assets/immersion-broken.jpg',
      alt: 'Broken immersion scene'
    },
    exit: {
      text: 'The show ends. Staff direct you immediately to the exit. There is no space to linger, reflect, or engage further.',
      prompt: 'How does this exit influence what the visitor remembers?',
      image: 'assets/exit-broken.jpg',
      alt: 'Broken exit scene'
    }
  }
};

function renderScene() {
  const scene = scenes[mode][currentScene];
  sceneText.textContent = scene.text;
  promptText.textContent = scene.prompt;
  sceneImage.src = scene.image;
  sceneImage.alt = scene.alt;
  modeToggle.textContent = mode === 'normal' ? 'Mode: Normal' : 'Mode: Broken';
  document.body.classList.toggle('broken', mode === 'broken');
}

document.querySelectorAll('button[data-scene]').forEach((button) => {
  button.addEventListener('click', () => {
    currentScene = button.dataset.scene;
    renderScene();
  });
});

modeToggle.addEventListener('click', () => {
  mode = mode === 'normal' ? 'broken' : 'normal';
  renderScene();
});

renderScene();
