# Focal-effect replication selection

## Summary

Focal-effect replication selection is the rule for choosing which single statistical claim from a source article will define the confirmatory replication outcome.

## Canonical Form

- Unit of analysis: source article, study within article, focal statistical test, effect size, original-author recommendation, or replication protocol.
- Typical representation: last-study default rule, key-effect record, deviation justification, focal contrast, or preregistered confirmatory test.
- Method target: make aggregate replication estimates comparable by preventing post hoc selection of the most convenient, salient, or successful result.
- Empirical signature: a replication report identifies one focal effect before data collection, while allowing secondary outcomes to remain separate.

## Uses in Science of Science

- Adds a claim-selection layer to [direct replication protocols](direct_replication_protocol.md).
- Follows article-level assignment designs such as [rolling replication article-pool assignment](rolling_replication_article_pool_assignment.md) when the source article enters a replication project.
- Qualifies [replication success indicator suites](../measures/replication_success_indicator_suite.md), because the success indicator is only interpretable for the preselected effect.
- Makes the [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md) more reproducible by separating article selection, study selection, and effect selection.
- Connects to [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md): replication teams also need transparent choice rules when extracting a claim from a multi-study article.

## Operationalization

- Define whether the article, study, and focal effect are chosen by fixed rule, randomization, original-author recommendation, feasibility, or team judgment.
- Select the focal effect before replication data collection or analysis.
- Record deviations from default rules and the reason for each deviation.
- Present the focal effect to original authors for critique when fidelity review is part of the protocol.
- Keep secondary outcomes separate from the aggregate confirmatory replication measure.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) states that, by default, the last experiment reported in each article was selected for replication.
- The paper reports that 84 of 100 completed replications used the last reported study, while deviations were justified by feasibility or original-author recommendations.
- For aggregate analyses, one key result from the selected experiment had to be represented as a single statistical test or effect size and was identified before data collection or analysis.
- The paper notes that the selected effect was not necessarily the central claim of the entire article, which makes the focal-effect rule a limitation and a necessary provenance field.

## Caveats

- A single focal effect can underrepresent a multi-study article or theory.
- Original-author recommendations can improve fidelity but may also shift the target after publication.
- Feasibility-driven deviations can bias aggregate reproducibility estimates if hard-to-run effects differ systematically from easy ones.

## Links

- [direct replication protocol](direct_replication_protocol.md)
- [rolling replication article-pool assignment](rolling_replication_article_pool_assignment.md)
- [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [replication feasibility attrition](../validations/replication_feasibility_attrition.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `focal_effect_replication_selection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: focal result selection; key-effect replication target; last-study replication rule; confirmatory effect selection
