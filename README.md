# auto-tasks

A Node.js scheduling utility that simplifies task scheduling with human-readable syntax. Convert intuitive time formats into cron expressions and schedule tasks effortlessly using node-cron.

## Installation

```bash
npm install auto-tasks
```

## Usage

```javascript
const { ScheduleBuilder } = require("auto-tasks");
const callBackTask = () => {
  console.log("hello world");
};
const schedule = new ScheduleBuilder();
const scheduleCron = schedule
  .every("monday")
  .at("10:00")
  .on("monday")
  .period("am")
  .build()
  .toCronExp()
  .task(callBackTask)
  .excute();
```
