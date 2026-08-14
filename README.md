# Issue Scout

An AI coding skill that helps developers find the best GitHub issues to contribute to, triggered by the `/scout` command.

## Problem

Finding the right issue to contribute to is hard. Developers often:
- Waste time reading issues that don't match their skills
- Miss good opportunities because they don't understand the codebase
- Pick issues that are too complex or already have active PRs
- Don't know which issues would make strong portfolio contributions

## Solution

Issue Scout turns `/scout` into a ranked, evidence-backed shortlist of issues that the developer has a realistic path to solving.

It optimizes for **contribution feasibility and user intent**, not simply semantic similarity to an issue title.

## How It Works

```
User types: /scout
    ↓
AI CLI detects command
    ↓
Phase 1: Ask user questions
    ↓
Phase 2: Find candidate issues
    ↓
Phase 3: Analyze and rank
    ↓
Phase 4: Format and display
```

## Installation

### For Most AI CLIs

1. Clone or copy this skill into your AI CLI's `skills/` directory:
   ```bash
   git clone https://github.com/shauryagangrade/scout-issue.git
   # Example for a CLI that uses ~/.config/ai-cli/skills/
   cp -r scout-issue ~/.config/ai-cli/skills/
   ```

2. The skill is now available. No additional setup required.

### Common Skill Directories

Different AI CLIs use different locations:

- **Claude Code**: `~/.claude/skills/`
- **Cursor**: `~/.cursor/skills/` or project `.cursor/skills/`
- **Windsurf**: `~/.windsurf/skills/`
- **Custom CLIs**: Check your CLI's documentation

### Requirements

The skill requires:
- Shell command access
- Git
- GitHub CLI (optional but recommended)

If GitHub CLI is not available, the skill will use fallback methods but with limited functionality.

## Usage

### Basic Usage
```
/scout
```

The AI will ask you questions about your experience, skills, and preferences, then find matching issues.

### With Initial Context
```
/scout rust
/scout beginner-friendly
/scout weekend project
```

### After Getting Results
```
Investigate #1234
Plan this issue
How should I approach this?
```

## Example Workflow

### Step 1: User Types Command
```
User: /scout
```

### Step 2: AI Asks Questions
```
AI: What's your experience level with this repository?
- [ ] First-time contributor
- [ ] Some familiarity
- [ ] Experienced with the codebase

What languages/frameworks are you comfortable with?
- [ ] JavaScript/TypeScript
- [ ] Python
- [ ] Rust
- [ ] Go
...

How much time can you dedicate?
- [ ] Quick fix (< 2 hours)
- [ ] Weekend project (4-8 hours)
- [ ] Week-long (20-40 hours)
...
```

### Step 3: User Responds
```
User: First-time contributor, JavaScript/TypeScript, Weekend project, Bug fix
```

### Step 4: AI Finds and Ranks Issues
```
AI: 🔍 ISSUE SCOUT RESULTS

Found 5 strong candidates from 342 open issues.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. #1247 — Fix button hover state not working in Safari
   📊 Match: 91/100
   🎯 Difficulty: Easy
   ⏱️ Estimated scope: 1-2 hours

   ✅ Why it matches:
   • Clear reproduction case provided
   • Localized fix in single file
   • Existing tests to verify

   ⚠️ Concerns:
   • Need to test across Safari versions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 BEST MATCH: #1247

It provides a good balance of simplicity, learning value, and realistic scope.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Want me to investigate any of these issues in detail?
   Say: "Investigate #[NUMBER]"
```

### Step 5: User Investigates
```
User: Investigate #1247
```

### Step 6: AI Provides Detailed Analysis
```
AI: 🔍 ISSUE #1247 — DEEP INVESTIGATION

📋 PROBLEM
Button hover state doesn't work in Safari browser.

🎯 WHY IT MATCHES
• Clear reproduction case
• Localized to single component
• Good first contribution

📁 RELEVANT CODE
• src/components/Button.tsx: Main button component
• src/styles/button.css: Button styles

🧪 RELEVANT TESTS
• src/components/Button.test.tsx: Button tests

📝 IMPLEMENTATION SCOPE
1. Add Safari-specific CSS fix
2. Update tests
3. Verify across browsers

⏱️ ESTIMATED EFFORT: 1-2 hours

📊 CONFIDENCE: HIGH
Clear problem with reproduction case.

💡 Want me to create an implementation plan?
   Say: "Plan this issue"
```

## Design Philosophy

### Command-Based
Activated by `/scout` command, not natural language detection.

### Interactive
Asks clarifying questions before searching.

### Evidence-Based
Distinguishes observed evidence from AI inference. Never claims issues will definitely be accepted.

### Adaptive Ranking
Scoring weights adapt to user responses. Weekend projects prioritize scope/difficulty, while portfolio contributions prioritize technical depth.

### Progressive Investigation
Starts broad, then narrows down. Doesn't deeply investigate hundreds of issues unnecessarily.

### Read-Only
Never modifies GitHub issues unless explicitly asked. Default behavior is investigation only.

### Portable
Works across AI coding CLIs. No dependencies on specific AI APIs or proprietary services.

## Key Features

1. **Command Detection** - Recognizes `/scout` command
2. **Interactive Questioning** - Gathers user specifications
3. **Repository Analysis** - Understands project structure, conventions, and activity
4. **Issue Detection** - Uses GitHub CLI and Git to find candidates
5. **Multi-Dimensional Scoring** - Evaluates issues on 8+ dimensions
6. **Evidence Separation** - Clearly distinguishes facts from inferences
7. **Rejection Reasoning** - Explains why issues were not recommended
8. **Deep Investigation** - Provides detailed contribution briefs for specific issues
9. **Contribution Planning** - Helps developers approach issues systematically
10. **Formatted Output** - Clean, readable results with emojis

## Supported Commands

| Command | Description |
|---------|-------------|
| `/scout` | Start issue discovery |
| `/scout rust` | Start with language filter |
| `/scout beginner` | Start with difficulty filter |
| `Investigate #NNN` | Deep dive into specific issue |
| `Plan this issue` | Get implementation plan |
| `How should I approach this?` | Get approach advice |
| `/cancel` | Abort the current pipeline and return to normal chat mode |
| `/scout` (again) | Restart the pipeline from Phase 1, discarding previous progress |
| `Start working on this` | Begin the planned implementation |

## Example Outputs

### Finding First Contribution
```
🔍 ISSUE SCOUT RESULTS

Found 3 strong candidates from 342 open issues.

1. #1247 — Fix button hover state not working in Safari
   📊 Match: 91/100
   🎯 Difficulty: Easy
   ⏱️ Estimated scope: 1-2 hours

   ✅ Why it matches:
   • Clear reproduction case provided
   • Localized fix in single file
   • Existing tests to verify

🏆 BEST MATCH: #1247
```

### Weekend Project
```
🔍 ISSUE SCOUT RESULTS

Found 3 strong candidates from 156 open issues.

1. #892 — Fix memory leak in connection pool
   📊 Match: 94/100
   🎯 Difficulty: Medium
   ⏱️ Estimated scope: 4-6 hours

   ✅ Why it matches:
   • Clear reproduction with profiler output
   • Maintainer confirmed the issue
   • Localized to single module

🏆 BEST MATCH: #892
```

## Limitations

- Cannot predict maintainer responses with certainty
- May miss issues that require deep codebase knowledge
- Cannot guarantee issue acceptance
- Limited by GitHub API rate limits when investigating many issues

## Contributing

This is a skill designed to be portable and reusable. Contributions should maintain:
- Portability across AI coding CLIs
- Evidence-based reasoning
- Read-only default behavior
- Clear separation of evidence and inference

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.