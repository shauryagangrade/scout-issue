# Changelog

All notable changes to Issue Scout will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of Issue Scout skill
- `/scout` command with interactive questioning
- Issue detection pipeline using GitHub CLI and Git
- Multi-dimensional scoring system (8 dimensions)
- Evidence-based recommendations with confidence levels
- Investigation mode for deep issue analysis
- Implementation planning feature
- Graceful degradation for missing tools
- Support for multiple programming languages and frameworks

### Changed
- Restructured as command-based skill (`/scout`)
- Improved output formatting with emojis and visual hierarchy
- Enhanced user interrogation phase with targeted questions

### Fixed
- N/A (initial release)

## [0.1.0] - 2026-08-08

### Added
- Core skill implementation
- SKILL.md with complete workflow
- README.md with documentation
- Example files for different use cases
- Reference documentation
- Test simulation

### Known Issues
- GitHub CLI authentication required for private repositories
- Rate limiting may affect large-scale searches

## [0.0.1] - 2026-08-08

### Added
- Initial project structure
- Basic skill documentation
- Example scenarios

## Version History

- **0.1.0**: First public release with command-based interface
- **0.0.1**: Initial development version

## Upcoming Features

- [ ] Integration with more AI CLI platforms
- [ ] Caching for faster repeated searches
- [ ] Custom scoring weights
- [ ] Export results to markdown/JSON
- [ ] Batch investigation mode
- [ ] Integration with project management tools

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute to this project.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.