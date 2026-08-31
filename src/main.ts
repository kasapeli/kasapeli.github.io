function initMusic(): void {
  const audio = document.getElementById('music') as HTMLAudioElement | null;
  const button = document.getElementById('musicButton') as HTMLButtonElement | null;

  if (!audio || !button) return;

  button.addEventListener('click', (): void => {
    if (audio.paused) {
      audio.play()
        .then(() => {
          button.textContent = "[playing]";  
        })
    } else {
      audio.pause();
      button.textContent = "[paused]";
    }
  })
}

async function fetchRepos(): Promise<void> {
  const res = await fetch("https://api.github.com/users/kasapeli");
  const data = await res.json();
  const count = data.public_repos;
  const repoCount = document.getElementById('repoCount') as HTMLParagraphElement | null;
  if (repoCount) {
    repoCount.textContent = `${count}`;
  }
} 

initMusic();
fetchRepos();
