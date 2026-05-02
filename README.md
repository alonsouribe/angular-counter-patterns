# Angular Counter App

A simple counter application built to explore and compare three different state management approaches in Angular.

## What this project demonstrates

| Implementation | Location | Tests | Approach |
|---|---|---|---|
| Classic component state | `counter/` | ✓ | Plain class property with `ngModel`-style binding |
| RxJS BehaviorSubject | `counter-rxjs/` | ✓ | `BehaviorSubject` with `AsyncPipe` for reactive streams |
| Signals + computed | `counter-signal/` | ✓ | `signal()`, `computed()`, and `.update()` from Angular 17+ |
| Service + Signals | `counter-service/` | ✓ | Shared state via `Injectable` service with `signal()` and `inject()` |

## Getting started

```bash
npm install
ng serve
```

Then open `http://localhost:4200`.

## Built with

- Angular 21
- RxJS
- Angular Signals (built-in)
