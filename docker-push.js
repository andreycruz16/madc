const { execSync } = require('child_process');
const username = 'andreycruz16';

// Get the short hash of the most recent commit
const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

// Build the Docker image with the commit hash as the tag
const imageName = `${username}/madc`;
const tag = `${imageName}:${commitHash}`;
const buildCommand = `docker push ${tag}`;

try {
  execSync(buildCommand, { stdio: 'inherit' });
  console.log(`Successfully pushed image: ${tag}`);
} catch (error) {
  console.error('Error building Docker image:', error.message);
  process.exit(1);
}
