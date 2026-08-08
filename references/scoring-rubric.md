# Scoring Rubric

## Dimensions

### 1. User Fit (0-100)
How well does this issue match the user's explicit and implicit preferences?

- **High (80-100)**: Perfect match for stated skills, experience, and preferences
- **Medium (50-79)**: Good match with minor gaps
- **Low (0-49)**: Partial match or significant gaps

**Factors:**
- Technical skills alignment
- Experience level match
- Preferred issue type
- Avoided areas respected

### 2. Technical Fit (0-100)
How well does this issue align with the repository's technical stack and architecture?

- **High (80-100)**: Uses primary technologies, clear code locations
- **Medium (50-79)**: Uses relevant technologies, some code exploration needed
- **Low (0-49)**: Requires unfamiliar technologies or deep architecture knowledge

**Factors:**
- Primary language/framework match
- Code location clarity
- Architecture understanding required
- Technology familiarity

### 3. Scope Fit (0-100)
How well does this issue fit within the user's time and complexity constraints?

- **High (80-100)**: Clearly within stated scope
- **Medium (50-79)**: Slightly outside scope but achievable
- **Low (0-49)**: Significantly outside scope

**Factors:**
- Estimated time vs. requested time
- Complexity vs. requested complexity
- Number of files/components affected
- External dependencies

### 4. Difficulty Fit (0-100)
How well does this issue match the user's skill level?

- **High (80-100)**: Appropriate challenge level
- **Medium (50-79)**: Slightly above/below but manageable
- **Low (0-49)**: Too easy or too difficult

**Factors:**
- Required expertise level
- Learning curve involved
- Previous similar work
- Available documentation/help

### 5. Issue Quality (0-100)
How well-defined and actionable is this issue?

- **High (80-100)**: Clear problem, reproduction, acceptance criteria
- **Medium (50-79)**: Good description, some gaps
- **Low (0-49)**: Vague, unclear requirements

**Factors:**
- Problem description clarity
- Reproduction steps provided
- Acceptance criteria defined
- Examples/expected behavior

### 6. Activity (0-100)
How active is this issue and its surrounding discussion?

- **High (80-100)**: Recent maintainer activity, clear interest
- **Medium (50-79)**: Some activity, reasonable response time
- **Low (0-49)**: Stale, no recent activity

**Factors:**
- Last maintainer comment
- Overall issue activity
- Related PR activity
- Community interest

### 7. Contribution Feasibility (0-100)
How feasible is it for the user to actually complete this contribution?

- **High (80-100)**: Clear path to completion, low risk
- **Medium (50-79)**: Achievable with some research/learning
- **Low (0-49)**: Significant unknowns or blockers

**Factors:**
- Existing tests to verify changes
- Clear implementation path
- Low risk of rejection
- Available guidance

### 8. Evidence Quality (0-100)
How strong is the evidence supporting this recommendation?

- **High (80-100)**: Multiple strong evidence points
- **Medium (50-79)**: Good evidence with some gaps
- **Low (0-49)**: Weak or insufficient evidence

**Factors:**
- Clear reproduction case
- Maintainer confirmation
- No blocking PRs
- Recent activity

## Weighting

### Default Weights
- User Fit: 20%
- Technical Fit: 15%
- Scope Fit: 20%
- Difficulty Fit: 15%
- Issue Quality: 10%
- Activity: 5%
- Contribution Feasibility: 10%
- Evidence Quality: 5%

### Weight Adaptation

**For "weekend project":**
- Scope Fit: 30%
- Difficulty Fit: 25%
- Contribution Feasibility: 20%
- Others: reduced proportionally

**For "portfolio contribution":**
- Technical Fit: 25%
- Issue Quality: 20%
- Contribution Feasibility: 20%
- Others: reduced proportionally

**For "first contribution":**
- Difficulty Fit: 30%
- Contribution Feasibility: 25%
- Issue Quality: 20%
- Others: reduced proportionally

## Calculation

Final Score = Σ (Dimension Score × Weight)

Where each dimension score is 0-100 and weights sum to 1.0.

## Confidence Levels

**High Confidence:**
- Score ≥ 80
- Strong evidence across multiple dimensions
- Clear implementation path
- Active maintainer support

**Medium Confidence:**
- Score 60-79
- Good evidence with some gaps
- Achievable but may require research
- Reasonable maintainer interest

**Low Confidence:**
- Score < 60
- Weak or insufficient evidence
- Significant unknowns
- Unclear maintainer intent