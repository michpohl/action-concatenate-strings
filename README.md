# Concatenate strings with a separator

If you ever have the need to concatenate two strings, put a separator in between and publish the result as a new env var, this action is for you.

This is a simple job, so it's also a simple action and easy to use. This example appends the value of the *github.run_number* to my app's current version number, separated by a dot:
```
steps:
      - name: Combine strings
        uses: michpohl/action-concatenate-strings@v1
        with:
          first: ${{ MY_APP_VERSION_NO }}
          second: ${{ github.run_number }}
          separator: '.'
          output-var-name: 'VERSION_NAME_STRING'
```
Assuming my version **1.0** and my run number is **15**, 
This would create an env var named `VERSION_NAME_STRING` with a value of `1.0.15`.

Of course you don't need to use env vars, you can also enter plain strings. This one's output is an env var called `GREETINGS` with a value of `Hello, World`.

```
steps:
      - name: Combine strings
        uses: michpohl/action-concatenate-strings@v1
        with:
          first: 'Hello'
          second: 'World'
          separator: ', '
          output-var-name: 'GREETINGS'
```

The separator is optional, so don't specify it if you don't need it.