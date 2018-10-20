const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: process.env.SLUG || 'svens-project-blog',
    write_key: process.env.WRITE_KEY ||'iR3n3yh48jQPhqyUYvnpkoI2Qrjg2XvNLE2sYZVU7Di5SyEZbY',
    read_key: process.env.READ_KEY ||'KTwoMFDn0PuC9M4ltzlUdU4iHY9HWnI8cQJNIB5d03JMPK3dir'
  }
}

module.exports = config;
