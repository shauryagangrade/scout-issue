# Contributing to Issue Scout

Thank you for your interest in contributing to Issue Scout! This document provides guidelines and information about contributing to this project.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

1. **Clear description** of the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, AI CLI, GitHub CLI version)

### Suggesting Enhancements

We welcome suggestions for new features or improvements. Please create an issue with:

1. **Clear description** of the proposed enhancement
2. **Use case** - why this would be valuable
3. **Possible implementation** (if you have ideas)

### Submitting Changes

1. **Fork the repository**
2. **Create a branch** for your feature or fix
3. **Make your changes** following the guidelines below
4. **Test your changes** if applicable
5. **Submit a pull request**

## Development Guidelines

### File Structure

```
issue-scout/
├── SKILL.md              # Main skill instructions
├── README.md             # Project documentation
├── LICENSE               # Apache 2.0 license
├── CONTRIBUTING.md       # This file
├── CODE_OF_CONDUCT.md    # Community standards
├── SECURITY.md           # Security policy
├── CHANGELOG.md          # Release history
├── examples/             # Usage examples
├── references/           # Supplementary documentation
└── .github/              # GitHub templates and workflows
```

### Writing Guidelines

- **Clear and concise**: Write for AI agents and developers
- **Evidence-based**: Separate facts from inferences
- **Portable**: Avoid platform-specific dependencies
- **Actionable**: Provide concrete steps and examples

### SKILL.md Guidelines

When modifying the main skill file:

1. **Maintain the pipeline flow**: Keep the 4-phase structure
2. **Update examples**: Ensure examples match the workflow
3. **Test the flow**: Verify the skill works as documented
4. **Update quick reference**: Keep references in sync

### Examples Guidelines

When adding or modifying examples:

1. **Realistic scenarios**: Use realistic user requests
2. **Clear output**: Show the expected AI response
3. **Diverse use cases**: Cover different skill levels and goals
4. **Update test simulation**: Keep the simulation current

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone. We pledge to act and interact in ways that contribute to an open, friendly, diverse, and healthy community.

### Expected Behavior

- Be respectful and considerate
- Give and accept constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, trolling, or personal attacks
- Publishing private information without permission
- Any conduct that would be inappropriate in a professional setting

## Security

If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md) for responsible disclosure.

## License

By contributing to Issue Scout, you agree that your contributions will be licensed under the [Apache License 2.0](LICENSE).

## Questions?

If you have questions about contributing, please open an issue or reach out to the maintainers.