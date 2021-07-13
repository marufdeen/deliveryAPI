if (process.env.NODE_ENV === 'production') {
    require('./dist/server.js')
  } else {
    require('nodemon')({ script: 'dev.ts' })
  }