# Project 2: Tests Pass Loop

## Yeh Project Kya Hai
Ek **conditional loop (run-until-done)** ka demo — jo tab tak chalta hai jab tak
`npm test` khud pass na ho jaye. Yaad rahe: **"done" hone ka faisla ek outside
command (test runner) karti hai, agent khud apne aap ko pass nahi karta.**

**Concept:** Conditional Loop / Outside Stop (Heartbeat Type #2)
**Course Reference:** Loop Engineering Crash Course — Part 2 + Part 1 (outside stops)

## Kya Kya Banaya Gaya

| File | Kaam |
|---|---|
| `calculator.js` | 2 functions (`add`, `multiply`) — dono mein jaan-boojh kar bug daale gaye |
| `test/calculator.test.js` | 3 tests jo `add`/`multiply` ko check karte hain |
| `package.json` | `npm test` script define karta hai |

## Bugs Jo Jaan-Boojh Kar Dale Gaye

```javascript
function add(a, b) {
  return a - b;  // BUG: subtract kar raha tha, add nahi
}
function multiply(a, b) {
  return a + b;  // BUG: add kar raha tha, multiply nahi
}
```

## Commands Jo Chalayi Gayi

```bash
mkdir tests-pass-loop
cd tests-pass-loop
git init
npm init -y

# calculator.js aur test file banayi (bugs ke sath)
node test/calculator.test.js   # Confirm kiya FAIL hota hai (Exit code 1)

git add .
git commit -m "Initial buggy calculator with failing tests"

claude
```

Claude Code ke andar diya gaya command:
/goal npm test command chalao. Jab tak yeh command bina kisi error ke pass ho jaye (exit code 0), tab tak calculator.js ki bugs fix karte raho. Max 6 tries. Har try ke baad mujhe batao kya fix kiya.