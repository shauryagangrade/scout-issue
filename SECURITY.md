# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability within Issue Scout, please send an email to Shaurya Gangrade at shauryagangrade11@gmail.com. All security vulnerabilities will be promptly addressed.

**Please do not report security vulnerabilities through public GitHub issues.**

## Disclosure Policy

When the security team receives a security bug report, they will assign it to a primary handler. This person will coordinate the fix and release process, involving the following steps:

1. **Confirm the problem** and determine the affected versions.
2. **Audit code** for any similar issues.
3. **Prepare fixes** for release. These fixes will be released as fast as possible.

## Security Considerations for Issue Scout

### What Issue Scout Does

Issue Scout is an AI coding skill that helps developers find GitHub issues to contribute to. It:

- Reads public GitHub repository information
- Uses GitHub CLI to list and view issues
- Uses Git commands to inspect repository history
- Provides recommendations based on user criteria

### What Issue Scout Does NOT Do

- **Does not access private repositories** without explicit user authentication
- **Does not modify GitHub issues** or pull requests (read-only by default)
- **Does not store user credentials** or API tokens
- **Does not send data to external services** beyond GitHub API calls
- **Does not execute arbitrary code** from repository content

### Potential Security Considerations

1. **GitHub API Rate Limiting**: Issue Scout uses GitHub's API, which has rate limits. Excessive use may temporarily block access.

2. **Repository Content**: Issue Scout reads repository files to analyze code. This is similar to browsing a public repository.

3. **AI Processing**: User queries are processed by the AI CLI, which may have its own privacy policies. Issue Scout itself does not store or transmit user data beyond the current session.

4. **Command Execution**: Issue Scout executes GitHub CLI and Git commands. These are standard development tools and do not pose additional security risks when used as intended.

## Best Practices

When using Issue Scout:

1. **Use GitHub CLI authentication**: Authenticate with `gh auth login` for better API rate limits and access to private repositories you own.

2. **Review recommendations**: Always review the issues suggested by Issue Scout before working on them.

3. **Verify repository information**: Double-check that you're working on the intended repository.

4. **Keep GitHub CLI updated**: Use the latest version of GitHub CLI for security patches.

## Dependencies

Issue Scout is designed to be dependency-free. It relies on:

- **GitHub CLI (gh)**: Official GitHub command-line tool
- **Git**: Standard version control system
- **Shell access**: For executing commands

These are standard development tools with their own security policies and update processes.

## Contact

For security-related inquiries, please contact:

- **Email**: shauryagangrade11@gmail.com
- **Subject**: [Issue Scout Security] Brief description

We aim to respond to security reports within 48 hours.