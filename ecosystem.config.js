module.exports = {
  apps: [
    {
      name: 'ReactApp',
      script: './server.js',
      exec_mode: 'cluster',
      instances: 'max', // This will use all the CPU cores for load balancing
      env: {
        NODE_ENV: 'production', // Make sure to set the environment variable to 'production'

      }

    }
  ]
}