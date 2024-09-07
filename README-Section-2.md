# Section 2: Custom Logging

## Overview
This section extends our basic JS runtime with more advanced logging capabilities. We'll implement color-coded logging and time-stamping console methods.

## New Features

1. **Color-coded output**: Warnings, errors, and debug messages are displayed in different colors for easy identification.
2. **Timestamps**: Each log message includes a timestamp for better tracking.

## Implementation

Update the `src/runtime.js` file with the following changes:

1. Add color constants for terminal output
2. Implement a timestamp function
3. Create new console methods with color coding and timestamps

'''
The ANSI escape codes \x1b[1;35m and \x1b[0m are used to make the timestamp and label purple and bold.
'''

## Usage

In your JavaScript files, you can now use the following methods:

```javascript
console.sarcasm("This is a sarcastic message");
console.warn("This is a warning");
console.error("This is an error");
console.debug("This is a debug message");
```

## Customization

- Modify the color scheme in `src/runtime.js`
- Add more console methods with different formatting
- Adjust the timestamp format to suit your needs

## Running the Enhanced Runtime

No changes are needed to the run command. Simply use:
```
cargo run
```

The new logging features will be available in your JavaScript code.

## Next Steps

- Implement log levels (e.g., INFO, WARN, ERROR, DEBUG)
- Add file logging capabilities
- Create a configuration system for enabling/disabling different log types
