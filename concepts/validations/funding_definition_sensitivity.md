# Funding definition sensitivity

## Summary

Funding definition sensitivity tests whether results about funding models survive alternative ways of grouping funding sources into competitive, block, noncompetitive, private, or mixed categories.

## Canonical Form

- Unit of analysis: project, funding source, source taxonomy, funding-model indicator, or robustness specification.
- Typical representation: coefficient table across binary thresholds, continuous funding ratios, and alternative source-grouping rules.
- Validation target: determine whether a funding-model result is an artifact of a single classification rule.
- Empirical signature: substantive conclusions remain similar when ambiguous source categories are included, excluded, or treated continuously.

## Uses in Science of Science

- Validates [competitive-funding share thresholds](../measures/competitive_funding_share_threshold.md) and [fractional project-funding attribution](../measures/fractional_project_funding_attribution.md).
- Supports [funding model status contingency](../mechanisms/funding_model_status_contingency.md) by checking whether status interactions depend on a narrow funding definition.
- Generalizes to studies using [funding acknowledgments](../datasets/funding_acknowledgments.md), grant databases, institution budgets, or survey-reported source shares.
- Complements [novelty robustness specification sweep](novelty_robustness_specification_sweep.md) when both the exposure and the outcome require operational choices.

## Operationalization

- Preserve detailed funding-source categories before aggregation.
- Define a main binary funding indicator with a transparent threshold or grouping rule.
- Re-estimate models with continuous funding shares and alternative groupings, such as excluding private donations or explicitly noncompetitive funds.
- Report which results are stable, attenuated, or sensitive across specifications.
- Use source-specific knowledge to explain why a category is ambiguous rather than treating all alternatives as interchangeable.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) defines competitively funded projects as those with at least 25 percent of funds from sources other than internal funds.
- The paper also uses the continuous ratio of competitive funds and reports similar results for the main funding and status-interaction models.
- Wang et al. test alternative dummy definitions that exclude private donations, or exclude private donations plus other noncompetitive funding, from the competitive category.
- Their robustness discussion reports broadly stable results, with the female interaction becoming insignificant under some alternative definitions while remaining negative and sizeable.

## Caveats

- Source categories can hide program-level heterogeneity; one grant family can contain mechanisms with very different selectivity or autonomy.
- Robustness across nearby definitions does not prove that the funding measure captures the true causal channel.
- Funding definitions are embedded in national funding systems and may not map cleanly across countries.

## Links

- [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md)
- [fractional project-funding attribution](../measures/fractional_project_funding_attribution.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [funding status-interaction test](funding_status_interaction_test.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [novelty robustness specification sweep](novelty_robustness_specification_sweep.md)
- [funding acknowledgments](../datasets/funding_acknowledgments.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `funding_definition_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: funding classification robustness; competitive funding definition sensitivity; funding-source grouping robustness; funding exposure sensitivity
