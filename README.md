# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous operations.  The `bug.js` file shows an example of an Express.js route that performs an asynchronous operation without proper error handling. When the asynchronous operation fails, the error is not caught, resulting in a silent failure.

The `bugSolution.js` file provides a corrected version that includes comprehensive error handling to prevent silent failures and enhance application robustness.