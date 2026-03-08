---
name: new-release
description: Add a new Pokemon Elite Redux patch release to the patcher. Use when publishing a new `.bps` or `.ups` patch, updating the `CUSTOM_PATCHER` list in `index.html`, rotating old releases into `old/`, and drafting the Discord release announcement.
---

# New Release

Use this skill when the user wants to publish a new Elite Redux patch release in this repo.

## What To Update

The release flow usually touches:
- the new patch file in the repo root
- [`/Users/joel/Github/EliteReduxPatcher/index.html`](/Users/joel/Github/EliteReduxPatcher/index.html)
- optionally the `old/` directory for retired patch files
- a Discord announcement saved in `~/Downloads/`

## Workflow

### 1. Locate the new patch file

If the user did not already give a patch path, ask for it directly. Accept `.bps` and `.ups`.

Infer the version from the filename. Use the display format:
`Pokemon Elite Redux v{version}`

Examples:
- `2.65 Beta`
- `2.5 Hotfix 2`

If the version string is ambiguous, pause and confirm before renaming files.

### 2. Copy the patch into the repo root with the standard name

Rename the patch to:
`Pokemon Elite Redux v{version}.{bps|ups}`

Rules:
- keep `Pokemon Elite Redux` with spaces
- keep the original extension
- use lowercase hyphenated suffixes in filenames such as `-beta`, `-beta2`, `-hotfix2`, `-debug`

Examples:
- `Pokemon Elite Redux v2.65-beta.bps`
- `Pokemon Elite Redux v2.5-hotfix2.ups`
- `Pokemon Elite Redux v2.65-beta2-debug.bps`

Do not delete the source file unless the user explicitly asks.

### 3. Inspect current releases

Read the `CUSTOM_PATCHER` array in `index.html`.

Rules:
- the first entry is the default selection
- keep at most 2 releases in the dropdown: newest plus one previous release
- debug variants count as part of the same release, not as a separate release
- every entry should use `crc:0xd5ec24e4`

If adding the new release would leave more than 2 releases, ask the user which older release to retire. Recommend removing the oldest one.

### 4. Retire old releases safely

When removing an old release:
- remove its entry or entries from `CUSTOM_PATCHER`
- move the corresponding patch file or files into `old/`
- create `old/` if needed
- never delete old patch files

### 5. Update `index.html`

Add the new release as the first `CUSTOM_PATCHER` entry so it becomes the default.

Use this entry shape:

```javascript
{
    file:'./Pokemon Elite Redux v{version}.{ext}',
    name:'Pokemon Elite Redux v{Version Display Name}',
    crc:0xd5ec24e4
},
```

Keep remaining current releases underneath it.

### 6. Verify before finishing

Read back the updated `CUSTOM_PATCHER` array and confirm:
- the new release is first
- filenames and labels match
- no more than 2 releases remain
- all CRC values are `0xd5ec24e4`

Report the final dropdown state to the user.

### 7. Draft the Discord announcement

Prepare a ready-to-paste announcement using this template:

```md
## v{version} is now live on our Online Patcher!

Patch your ROM directly in the browser at **[elite-redux.com](https://elite-redux.com)**

The previous {previous version name} release is still available to download as well.

Have fun playing!

— Darky
```

If no previous release remains, omit the previous-release line.

Save the final announcement to:
`~/Downloads/elite-redux-{version}-announcement.md`

## Repo Notes

- This repo is a static site with no build tooling.
- Patch files live in the repo root.
- Older patch files should be preserved in `old/`.
- Be careful around unrelated patch-file changes in the worktree; do not overwrite or revert them unless the user asked for that.
