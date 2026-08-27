# Project 3: Memory Wala Morning Brief

## Yeh Project Kya Hai
Ek **Spine (memory between runs)** ka demo — loop `progress.md` parhta hai, 
`src/` folder mein TODO comments dhoondta hai, aur summary likh kar `progress.md` 
update karta hai. Maqsad: prove karna ke doosri run pehli par **build** hoti hai, 
repeat nahi karti.

**Concept:** Spine / Memory Between Runs
**Course Reference:** Loop Engineering Crash Course — Part 4

## Kya Kya Banaya Gaya

| File | Kaam |
|---|---|
| `src/app.js` | Sample code jisme 3 TODO comments (baad mein 4) |
| `src/utils.js` | Sample code jisme 1 TODO comment |
| `progress.md` | **Spine** — Done + Open Items record karti hai |

## Commands Jo Chalayi Gayi

```bash
mkdir morning-brief-loop
cd morning-brief-loop
git init

mkdir src
# src/app.js aur src/utils.js banayi (TODO comments ke sath)

# Shuruati (khali) progress.md banayi
git add .
git commit -m "Initial project with TODOs and empty progress.md"

claude
```

**Run #1** — Claude Code ke andar:
progress.md file parho taake pata chale pehle konse TODOs record hain. Phir grep command ya file-search tool use kar ke src/ folder ko ABHI dobara scan karo (purani progress.md par bharosa mat karo, files khud parho). Jo bhi TODOs milein, unka mukammal list banao, aur purani list se compare kar ke sirf naye TODOs alag se batao. Phir progress.md update karo.