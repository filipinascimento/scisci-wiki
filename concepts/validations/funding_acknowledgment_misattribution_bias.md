# Funding-acknowledgment misattribution bias

## Summary

Funding-acknowledgment misattribution bias occurs when publication acknowledgments list grants that did not fund the focal project or omit block funding that did.

## Canonical Form

- Unit of analysis: paper, project, grant acknowledgment, funding source, PI survey report, or project budget share.
- Typical representation: measurement-error caveat comparing acknowledgments with project-level funding attribution.
- Validation target: whether funding metadata attached to a paper accurately represent the project that produced it.
- Empirical signature: acknowledgment-based grant indicators differ from direct respondent-reported project funding shares.

## Uses in Science of Science

- Qualifies [funding acknowledgments](../datasets/funding_acknowledgments.md).
- Explains why [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) can improve funding measurement.
- Links [fractional project-funding attribution](../measures/fractional_project_funding_attribution.md) to validation rather than only measurement detail.
- Complements [WoS funding-acknowledgment onset bias](wos_funding_acknowledgment_onset_bias.md).

## Operationalization

- Compare paper acknowledgment metadata with author-reported project funding.
- Identify grants listed because they are active or related but not funding the focal project.
- Record funding sources omitted from acknowledgments, especially block or internal funding.
- Use project-level funding shares when the causal question concerns project support.
- Treat acknowledgment-only measures as noisy and source-specific.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) argues that acknowledgments can misattribute project funding.
- The paper notes that authors may list grants not used for the focal project and that block funding may not appear in acknowledgments.
- Its survey asks respondents for direct project funding shares, making the bias visible and partially correctable.
- This validation motif matters whenever funding acknowledgments are used as project-funding measures.

## Caveats

- Survey reports can also contain recall error.
- Acknowledgments may be appropriate for studying grant visibility, even if not project budgets.
- Misattribution likely varies by field, country, funder rules, and time period.

## Links

- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [WoS funding-acknowledgment onset bias](wos_funding_acknowledgment_onset_bias.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [fractional project-funding attribution](../measures/fractional_project_funding_attribution.md)
- [evaluated-party data verification](evaluated_party_data_verification.md)
- [funding definition sensitivity](funding_definition_sensitivity.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `funding_acknowledgment_misattribution_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: grant acknowledgment project mismatch; funding acknowledgment measurement error; project funding misattribution; acknowledgment-based funding bias
