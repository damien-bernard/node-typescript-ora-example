#!/usr/bin/env node

import ora from 'ora'

const spinner = ora({
  interval: 1000,
  text: 'Hello World',
}).start()

setTimeout(() => {
  spinner.stop()
}, 5000)
