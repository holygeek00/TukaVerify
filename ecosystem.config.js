module.exports = {
  apps: [{
    name: 'ReactApp',
    script: 'npm',
    args: 'start',
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: 3000 // default port for create-react-app
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000 // you can specify a different port for production
    },
    // Setting max_memory_restart is optional to restart your app if it exceeds the specified memory limit.
    max_memory_restart: '500M' // Restart the app if it reaches 500MB memory usage
  }]
}
