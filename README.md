### How to see the bug

Basically, during `ApiPromise.connect(...)` call it seems like the input/buttons get disabled for a certain time; possibly due to high CPU.

To view the bug:

1. install dependencies and start the development server (bug is possible to see in production server as well)
```
yarn
yarn start
```

2. refresh the page and notice the focused text-input blinking cursor become frozen while the `ApiProimse` is connecting. During this time buttons are not clickable either.

