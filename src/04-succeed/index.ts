#!/usr/bin/env node

import ora from 'ora'

const spinner = ora('Hello World').start()
setTimeout(() => {
  spinner.succeed('Succeed message')
}, 5000)
