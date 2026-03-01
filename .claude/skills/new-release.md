# Skill: new-release

Add a new Pokemon Elite Redux patch release to the patcher.

## User-invokable

Trigger: /new-release
Description: Add a new patch release and optionally remove old ones

## Instructions

You are adding a new patch release to the Elite Redux Patcher. Follow these steps:

### Step 1: Get the patch file

Ask the user to provide the path to the new `.bps` or `.ups` patch file if not already provided as an argument. The argument `$ARGUMENTS` may contain the file path.

### Step 2: Determine version info

From the filename, infer the version name. Confirm with the user if ambiguous. The display name format is: `Pokemon Elite Redux v{version}` (e.g., `Pokemon Elite Redux v2.65 Beta`).

### Step 3: Copy and rename the file

Copy the patch file into the repo root with the naming convention:
```
Pokemon Elite Redux v{version}.{bps|ups}
```
Examples: `Pokemon Elite Redux v2.65-beta.bps`, `Pokemon Elite Redux v2.5-hotfix2.ups`

Rules:
- Lowercase version suffix (e.g., `-beta`, `-hotfix2`, `-debug`)
- Spaces in "Pokemon Elite Redux", hyphens in version suffixes
- Keep the original file extension (.bps or .ups)

### Step 4: Check existing releases and ask about removal

Read the `CUSTOM_PATCHER` array in `index.html` to see current entries. The patcher should have **at most 2 releases** (the newest + one previous version). Debug variants of a release don't count as a separate release.

If adding this new release would exceed 2 releases, use `AskUserQuestion` to ask which old release(s) to remove. Present the existing releases as options (group standard + debug variants together). Suggest removing the oldest release.

When removing a release:
- Remove its entry/entries from `CUSTOM_PATCHER` in `index.html`
- Move the patch file(s) to the `old/` directory (create it if it doesn't exist): `mv "Pokemon Elite Redux v{old}.{ext}" old/`
- Do NOT delete old patch files — always preserve them in `old/`

### Step 5: Update index.html

Edit the `CUSTOM_PATCHER` array in `index.html`:
- Add the new release as the **first entry** (it becomes the default)
- Keep remaining releases below it
- All entries use `crc:0xd5ec24e4` (clean Pokemon Emerald ROM)

Entry format:
```javascript
{
    file:'./Pokemon Elite Redux v{version}.{ext}',
    name:'Pokemon Elite Redux v{Version Display Name}',
    crc:0xd5ec24e4
},
```

### Step 6: Verify

Read back the updated `CUSTOM_PATCHER` array to confirm it looks correct. Report the final state of the dropdown to the user.

### Step 7: Discord announcement

Propose a ready-to-paste Discord announcement message. Use this template (replace version accordingly):

```
## v{version} is now live on our Online Patcher!

Patch your ROM directly in the browser at **[elite-redux.com](https://elite-redux.com)**

The previous {previous version name} release is still available to download as well.

Have fun playing!

— Darky
```

If no previous release remains, omit the "previous release" line.
