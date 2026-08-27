# Project 1: Watch Loop

## Yeh Project Kya Hai
Ek simple **in-session heartbeat loop** ka demo — jo khud check karta hai ke koi lamba
chalne wala task khatam hua ya nahi, bina insaan ke baar baar terminal dekhe.

**Concept:** In-session Loop (Heartbeat Type #1)
**Course Reference:** Loop Engineering Crash Course — Part 2

## Kya Kya Banaya Gaya

| File | Kaam |
|---|---|
| `long-task.sh` | Ek script jo 2 minute so kar (`sleep 120`) `done.txt` banati hai — real duniya mein koi build/deploy/test simulate karti hai |
| `done.txt` | Script khud banati hai jab kaam khatam ho jaye — yeh "signal" hai |
| `.git/` | Git repo taake changes track ho saken |

## Commands Jo Chalayi Gayi

```bash
mkdir watch-loop-test
cd watch-loop-test
git init

# Simulated long task banai
chmod +x long-task.sh
./long-task.sh &     # background mein chalayi

# Claude Code shuru kiya
claude
```

Claude Code ke andar diya gaya command:
/loop 1m check karo ke done.txt file exist karti hai ya nahi. Jab file mil jaye, uska content mujhe dikhao aur loop ko rok do.