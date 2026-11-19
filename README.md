# Dots

A running collection of reusable snippets and patterns, one folder per language, written down while actually building something. If it lives here, it earned the spot by being typed more than once.

## Why this exists

- Copy paste is how we learn. Then we forget where we copied from. This is where the keepers go.
- No framework, no build step, no clever abstraction layer. Just the code and a short note on why it exists.
- If a snippet needs a paragraph to justify itself, the paragraph goes in the file, not in a wiki nobody opens.

## What is in there now

- `overlap.js`: `setInterval` firing async work that outlives the interval. Counts how many jobs are alive, never prints the number. Also has a `const` that should be `let`, so it throws on the first tick. Left it in as a reminder.
- `timers.js`: a blocking loop against a 5ms interval. Proof that timer intervals are suggestions, not promises.
- `artifacts/overlap-explained.html`: single file interactive page. Open it, drag the sliders, watch the peak counter stop where the math says it will.

## Conventions

- One idea per file. The idea goes in a comment at the top, not in my memory.
- No `package.json` unless the snippet genuinely needs a dependency. Nothing so far does.
- Artifacts are optional. A canvas is worth it when the thing being explained is invisible.
- Wrong snippets stay until fixed, with a note. Pretending it was always right is how you debug the same thing twice.
- Every folder says what runtime and version it was tested on. "Works on my machine" is not a version.

## Adding a language

1. Make a folder named after the language.
2. Put the first snippet in it.
3. Add a line at the top of the snippet with the runtime and version. Future you will not remember which Node or Python this was.

## Running

Mostly `node file.js`. The HTML file opens in a browser, no server needed. Nothing installs. If that ever changes, the folder gets a README saying so.
