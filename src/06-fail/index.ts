#!/usr/bin/env node

import ora from 'ora'

const spinner = ora('Hello World').start()
setTimeout(() => {
  spinner.info('Fail')
}, 5000)
