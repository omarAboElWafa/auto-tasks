# auto-tasks

A Node.js scheduling utility that simplifies task scheduling with human-readable syntax. Convert intuitive time formats into cron expressions and schedule tasks effortlessly using node-cron.

## Installation

```bash
npm install auto-tasker
```

## Usage

### Example-1:

```javascript
const { ScheduleBuilder } = require("auto-tasker");
const callBackTask = () => {
  console.log("hello world");
};
const schedule = new ScheduleBuilder();
const scheduleCron = schedule
  .every("week")
  .on("monday")
  .at("05:30", "pm")
  .do(callBackTask);
```

### Example-2:

```javascript
const { ScheduleBuilder } = require("auto-tasker");
const callBackTask = () => {
  console.log("hello world");
};
const schedule = new ScheduleBuilder();
const scheduleCron = schedule.every("day").at("10:00", "am").do(callBackTask);
```

### Example-3:

```javascript
const { ScheduleBuilder } = require("auto-tasker");
const callBackTask = () => {
  console.log("hello world");
};
const schedule = new ScheduleBuilder();
const scheduleCron = schedule.on("monday").every("hour").do(callBackTask);
```

### Example-4:

```javascript
const { ScheduleBuilder } = require("auto-tasker");
const callBackTask = () => {
  console.log("hello world");
};

const schedule = new ScheduleBuilder();
const scheduleCron = schedule.on("tuesday").at("10:00", "am").do(callBackTask);
```

### Example-5: Schedule a task to run every hour

```javascript
const { ScheduleBuilder } = require("auto-tasker");
const callBackTask = () => {
  console.log("Task running every hour");
};

const schedule = new ScheduleBuilder();
const scheduleCron = schedule.every("hour").do(callBackTask);
```

## Features

- Human-readable syntax for scheduling tasks.
- Supports scheduling tasks on specific days of the week.
- Converts time formats like "10:00 am" to cron expressions.
- Supports scheduling tasks to run every hour, day, week, or month.
- Easy-to-use API for scheduling tasks.

## License

MIT

## Contributing

Please follow the [contributing guidelines](https://github.com/omarAboElWafa/auto-tasks/blob/master/CONTRIBUTING.md).
