module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/<repository-name>/' // Replace <repository-name> with your GitHub repository name
      : '/'
  }
  