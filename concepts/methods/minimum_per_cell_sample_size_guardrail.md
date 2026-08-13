# Minimum per-cell sample-size guardrail

## Summary

Minimum per-cell sample-size guardrail is a reporting and design rule that requires a minimum sample size in each experimental cell or a clear cost-based justification.

## Canonical Form

- Unit of analysis: experimental cell, stopping rule, minimum sample size, reviewer checklist, or power justification.
- Typical representation: per-cell sample-size threshold, design checklist item, or data-collection rule.
- Method target: reduce undisclosed optional stopping and severely underpowered flexible analyses.
- Empirical signature: each condition has a stated minimum sample size, and deviations are justified before results are interpreted.

## Uses in Science of Science

- Operationalizes part of the [researcher-degrees disclosure checklist](researcher_degrees_disclosure_checklist.md).
- Targets [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md) with a simple design rule.
- Links sample-size planning to [study power false-positive risk](../measures/study_power_false_positive_risk.md).
- Helps reviewers identify [small-effect false-positive vulnerability](../validations/small_effect_false_positive_vulnerability.md).

## Operationalization

- Require authors to state the intended minimum observations per experimental cell before analysis.
- Flag studies with very small cells unless data collection is unusually costly or constrained.
- Require disclosure of all interim analyses or stopping decisions.
- Pair the threshold with power calculations when expected effect sizes are available.
- Ask reviewers to treat underpowered but transparent designs differently from undisclosed stopping.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) recommends disclosure of minimum per-cell sample sizes and treats very small cells as a warning sign for flexible stopping.
- Their checklist uses the rule as part of a broader transparency intervention rather than as a universal power threshold.
- The motif is distinct from generic power analysis because it focuses on hidden stopping and per-condition denominators.
- It also gives peer review a concrete item that can be checked quickly.

## Caveats

- A fixed minimum does not guarantee adequate power for small effects.
- Some designs have unequal cells by design, requiring adapted rules.
- Costly or rare-population studies need justification rather than automatic exclusion.

## Links

- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [researcher-degrees disclosure checklist](researcher_degrees_disclosure_checklist.md)
- [study power false-positive risk](../measures/study_power_false_positive_risk.md)
- [small-effect false-positive vulnerability](../validations/small_effect_false_positive_vulnerability.md)
- [sequential p-value path instability](../representations/sequential_p_value_path_instability.md)
- [reviewer transparency enforcement](reviewer_transparency_enforcement.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; SciSciNet: W2161498332; WoS: unknown]

## Metadata

- Concept ID: `minimum_per_cell_sample_size_guardrail`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: per-cell sample minimum; sample-size stopping guardrail; minimum cell n disclosure; underpowered-cell warning rule
