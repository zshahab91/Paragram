module.exports = {
  apps: [
    {
      name: 'timcheh',
      script: 'npm',
      args: 'start',
      instances: 4,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
