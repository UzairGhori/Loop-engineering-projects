# Project 4: Real Checker Wali Fix Loop

## Yeh Project Kya Hai
Ek **Maker-Checker (Subagent)** system ka demo - jahan ek agent (Maker) bug fix karta 
hai, aur ek bilkul **alag agent (Checker)** us fix ko independently review kar ke 
PASS/FAIL deta hai. Sirf PASS milne par asal GitHub PR khulta hai.

**Concept:** Maker-Checker (Subagents) + Skill + Connector (GitHub PR)
**Course Reference:** Loop Engineering Crash Course - Part 3 (Body)

## Kya Kya Banaya Gaya

| File | Kaam |
|---|---|
| src/validator.js | Email validator jisme jaan-boojh kar bug daala gaya |
| test/validator.test.js | 4 tests jo valid/invalid emails check karte hain |
| package.json | npm test script |
| .claude/skills/fix-and-test.md | Skill file - project rules: sirf src/ fix karo, minimal rakho, test file mat chhuna |

## Original Bug

    function isValidEmail(email) {
      // BUG: yeh sirf "@" check karta hai, poori validation nahi
      return email.includes("@");
    }

## Round 1 - Pehla Maker Attempt (FAIL Hua)

Maker ne detailed validation banayi (whitespace check, dot-placement rules, type 
checking) - 20+ lines ka code. Sab tests pass hue.

Checker ka faisla:
FAIL - fix is over-engineered, adds unnecessary validation beyond the test requirements.

Checker ne bataya sab tests pass hue the, phir bhi FAIL diya kyunke skill file ki 
rule thi "minimal fix, extra refactor mat karo".

## Round 2 - Doosra Maker Attempt (PASS Hua)

Maker ne minimal fix banaya:

    function isValidEmail(email) {
      const parts = email.split("@");
      if (parts.length !== 2) return false;
      const [local, domain] = parts;
      if (!local || !domain) return false;
      if (!domain.includes(".")) return false;
      return true;
    }

Checker ka faisla:
PASS - all tests pass, only src/validator.js changed, and the fix is appropriately scoped.

## PR Khola Gaya

PR: https://github.com/UzairGhori/Loop-engineering-projects/pull/1
Sirf src/validator.js mein diff, main branch abhi bhi buggy (untouched jab tak merge na ho).

## Final Verification - Jaan-Boojh Kar Buri Fix Test Ki

Bad fix banayi:
    function isValidEmail(email) {
      return email.length > 5;
    }

Checker ka faisla:
FAIL - npm test fails (email validator still accepts strings without @), and the 
change is neither correct nor a proper minimal fix.

Checker ne buri fix ko sahi se pakar liya.

## Sabse Bara Sabak

1. Maker apna kaam khud approve nahi karta - chahe sab tests pass ho jayein, ek 
   alag checker hi bata sakta hai kya fix sahi tareeqe se bani hai.
2. Checker ko quality bar dena zaroori hai - sirf tests pass poochna kaafi nahi, 
   minimal/appropriate hai ya nahi yeh bhi poochna zaroori hai.

## Status
Complete - 2026-08-28
- 2 Maker iterations
- 2 Checker reviews (1 FAIL, 1 PASS)
- 1 real PR created and verified
- 1 deliberate bad-fix test (Checker correctly caught it)
