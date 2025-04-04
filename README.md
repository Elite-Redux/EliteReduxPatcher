# Rom Patcher JS

A ROM patcher made in HTML5. This repository contains the code powering the official **Pokémon Elite Redux** online patcher.

**➡️ Visit the live Elite Redux patcher here: [https://elite-redux.com](https://elite-redux.com)**

---

## About Pokémon Elite Redux

Pokémon Elite Redux is a challenging ROM hack based on Pokémon Emerald, meticulously crafted for players who enjoy strategic Pokémon battles and team building without the traditional grinding.

**Key Features of the Game:**

*   **Unique Multi-Ability System:** Pokémon can utilize up to four abilities simultaneously (mix of switchable and innate), opening up vast strategic possibilities.
*   **Enhanced Difficulty:** Designed as a difficulty hack, featuring custom competitive movesets for trainers, smarter AI, and multiple difficulty modes (Easy, Ace, Elite).
*   **Massive Quality of Life (QoL):** Includes zero grinding mechanics (easy EV/Nature changes, level caps, infinite Rare Candies), auto-healing, improved UI, 100% catch rate with infinite-use Poké Balls, and much more.
*   **Expanded Content:** Features Pokémon from Generations 1-8+, Mega Evolutions, unique "Redux" forms, over 100 custom abilities, and rebalanced game mechanics.
*   **High Replayability:** Offers a completely overhauled Emerald experience focused on strategic depth, player convenience, and countless team compositions.

---

## Elite Redux Patcher Implementation

This patcher script is actively used and maintained for the Pokémon Elite Redux project. The website at [https://elite-redux.com](https://elite-redux.com) leverages this code to provide an easy-to-use, browser-based patching solution for the ROM hack.

**Recent updates to the Elite Redux patcher website include:**
*   A full redesign for improved aesthetics and usability.
*   Addition of helpful content like a "How to Patch" guide and a detailed FAQ section covering the patcher and the game.
*   Integration of quick links to the Elite Redux Pokédex and the official Discord community.
*   Enhanced patcher output to ensure the generated file correctly reflects the patch name and version (e.g., `Pokemon Elite Redux v2.5 Hotfix 2.gba`).

---

## Core Features of Rom Patcher JS

*   **Supported patch formats:**
    *   IPS
    *   UPS
    *   APS (N64/GBA)
    *   BPS
    *   RUP
    *   PPF
    *   Paper Mario Star Rod (.mod)
    *   VCDiff (.xdelta, .vcdiff)
*   Can patch ROM files and optionally create patches.
*   Shows ROM file checksums (CRC32, MD5, SHA-1) before patching for verification.
*   Optionally removes ROM headers before patching.
*   Automatically handles zipped patch files (.zip).
*   Built with Vanilla JS (no external frameworks required).
*   Compatible with modern web browsers on desktop and mobile platforms.
