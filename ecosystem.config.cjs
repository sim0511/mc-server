module.exports ={ 
  apps:[
    {
      name: 'oauth',
      script: 'dist/src/index.js',
      instances: 1,
      autorestart: true, // Enable automatic restart
      watch: true, // Watching for file changes (optional)
      max_memory_restart: '1G',
      // Other configurations and environment variables as needed
    }
  ]
};
  
  // export { apps };
  