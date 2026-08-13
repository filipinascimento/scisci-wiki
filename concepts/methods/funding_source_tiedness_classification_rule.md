# Funding-source tiedness classification rule

## Summary

Ambiguous government-linked funds can be classified by whether they are tied to a specific research subject.

## Canonical Form

- Unit of analysis: funding source, government grant, internal fund, noncompetitive grant, project subject, or survey coding rule.
- Typical representation: coding protocol for tied versus untied funding-source classification.
- Mechanism, measurement, or validation target: classification of ambiguous funding sources in project-level surveys.
- Empirical signature: untied funds are coded as internal support, while subject-tied funds are coded as noncompetitive research grants..

## Uses in Science of Science

- Refines funding-source coding by linking it to [funding definition sensitivity](../validations/funding_definition_sensitivity.md) and [fractional project funding attribution](../measures/fractional_project_funding_attribution.md).
- Useful as a reusable distinction when [project funding source survey linkage](../datasets/project_funding_source_survey_linkage.md) is analyzed in science-of-science data.
- Adds cross-links to [funding acknowledgment misattribution bias](../validations/funding_acknowledgment_misattribution_bias.md) so the motif is not read as an isolated result.

## Operationalization

- Classify ambiguous national or university funds by whether the money is tied to a specific research subject.
- Code untied support as internal institutional funds and subject-tied support as noncompetitive research grants.
- Document coding rules before computing competitive-funding shares.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2018) gives explicit survey instructions for classifying ambiguous national research funds by tiedness to specific subjects.
- The motif turns a survey appendix detail into a reusable funding-source coding rule.

## Caveats

- Adjacent to funding-definition sensitivity; useful mainly for coding protocols.
- Respondents may interpret tiedness differently across institutions and funding programs.

## Links

- [Funding definition sensitivity](../validations/funding_definition_sensitivity.md)
- [Fractional project-funding attribution](../measures/fractional_project_funding_attribution.md)
- [Project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [Funding-acknowledgment misattribution bias](../validations/funding_acknowledgment_misattribution_bias.md)
- [Competitive-funding share threshold](../measures/competitive_funding_share_threshold.md)
- [Mixed-funding within-system comparison](mixed_funding_within_system_comparison.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; SciSciNet: W2794465725; WoS: unknown]

## Metadata

- Concept ID: `funding_source_tiedness_classification_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: tiedness coding rule; subject-tied funding classification; internal versus noncompetitive rule
