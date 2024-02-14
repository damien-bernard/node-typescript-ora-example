#!/usr/bin/env node

import ora from 'ora'

const spinner = ora('Hello World').start()
setTimeout(() => {
  spinner.warn('Warning message')
}, 5000)
