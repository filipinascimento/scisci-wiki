# Competitive-funding share threshold

## Summary

Competitive-funding share threshold classifies a project as competitively funded when competitive sources contribute at least a specified share of the project budget.

## Canonical Form

- Unit of analysis: project, publication, funding-source share, or funding model.
- Typical representation: binary competitive-funding indicator plus a continuous ratio of competitive funding.
- Mechanism or measurement target: exposure of a project to competitive project-funding incentives rather than internal block support.
- Empirical signature: results are tested under both thresholded and continuous funding-share operationalizations.

## Uses in Science of Science

- Converts [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) into a compact explanatory variable.
- Supports [funding model status contingency](../mechanisms/funding_model_status_contingency.md) and [funding status-interaction tests](../validations/funding_status_interaction_test.md).
- Helps distinguish internal block funding from competitive grants in studies of novelty, productivity, and evaluation pressure.

## Operationalization

- Ask respondents to allocate project funding percentages across internal, competitive, noncompetitive, firm, government, and other sources.
- Define a binary competitive-funding indicator using a threshold such as at least 25 percent from competitive sources.
- Construct a continuous competitive-funding ratio as the share from non-internal or competitive sources.
- Re-estimate results under alternative funding-source groupings to assess robustness.
- Treat those alternatives as [funding definition sensitivity](../validations/funding_definition_sensitivity.md) rather than as an undocumented robustness appendix.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) defines a competitively funded project as one with at least 25 percent of funds from competitive funding sources.
- The paper also uses the ratio of competitive funds as a continuous alternative and reports similar status-contingency results.
- Wang et al. test alternative competitive-funding definitions that exclude private donation or other noncompetitive funding from the competitive category.
- The survey design allows these variants because funding is reported as approximate source percentages rather than as only a binary acknowledgment.

## Caveats

- A 25 percent threshold is a design choice and may not transfer across funding systems.
- Some funding categories mix programs with different levels of competition or autonomy.
- Internal funding can still be performance-conditioned, and external funding can sometimes be flexible.

## Links

- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [fractional project-funding attribution](fractional_project_funding_attribution.md)
- [funding definition sensitivity](../validations/funding_definition_sensitivity.md)
- [funding status-interaction test](../validations/funding_status_interaction_test.md)
- [funding selection-treatment split](../methods/funding_selection_treatment_split.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [block-funding novelty buffer](../mechanisms/block_funding_novelty_buffer.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [funding acknowledgments](../datasets/funding_acknowledgments.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `competitive_funding_share_threshold`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Aliases: competitive funding dummy; competitive funding ratio; project funding-share measure; block competitive funding classification
