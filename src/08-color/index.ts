#!/usr/bin/env node

import ora from 'ora'

const spinner = ora('Hello World').start()

setTimeout(() => {
  spinner.color = 'red'
}, 5000)

setTimeout(() => {
  spinner.stop()
}, 10000)
