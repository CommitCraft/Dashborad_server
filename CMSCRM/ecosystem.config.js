module.exports = {
  apps: [
    {
      name: 'cmscrm-frontend',
      script: 'npm.cmd',
      args: 'run dev',
      cwd: './frontend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      // Restart configuration
      watch: false,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      
      // Logging configuration
      log_file: './logs/frontend-combined.log',
      out_file: './logs/frontend-out.log',
      error_file: './logs/frontend-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      
      // Memory and CPU monitoring
      max_memory_restart: '500M',
      
      // Advanced features
      ignore_watch: ['node_modules', 'logs', 'dist'],
      merge_logs: true,
      
      // Health monitoring
      health_check_grace_period: 3000,
      health_check_fatal_exceptions: true
    },
    // {
    //   name: 'cmscrm-frontend-build',
    //   script: 'npm.cmd',
    //   args: 'run build',
    //   cwd: './frontend',
    //   instances: 1,
    //   exec_mode: 'fork',
    //   interpreter: 'none',
    //   env: {
    //     NODE_ENV: 'production'
    //   },
    //   // Restart configuration
    //   watch: false,
    //   autorestart: false,
      
    //   // Logging configuration
    //   log_file: './logs/build-combined.log',
    //   out_file: './logs/build-out.log',
    //   error_file: './logs/build-error.log',
    //   log_date_format: 'YYYY-MM-DD HH:mm Z',
      
    //   // Memory and CPU monitoring
    //   max_memory_restart: '500M',
      
    //   // Advanced features
    //   ignore_watch: ['node_modules', 'logs', 'dist'],
    //   merge_logs: true
    // },
    {
      name: 'cmscrm-backend',
      script: 'server.js',
      cwd: './backend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      // Restart configuration
      watch: false,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      
      // Logging configuration
      log_file: './logs/backend-combined.log',
      out_file: './logs/backend-out.log',
      error_file: './logs/backend-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      
      // Memory and CPU monitoring
      max_memory_restart: '500M',
      
      // Advanced features
      ignore_watch: ['node_modules', 'logs'],
      merge_logs: true,
      
      // Health monitoring
      health_check_grace_period: 3000,
      health_check_fatal_exceptions: true
    }
  ]
};
