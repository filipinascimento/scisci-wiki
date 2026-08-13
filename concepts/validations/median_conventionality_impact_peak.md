# Median conventionality impact peak

## Summary

Median conventionality impact peak is the nonmonotonic pattern in which citation impact rises with conventional grounding up to a very high percentile and then declines.

## Canonical Form

- Unit of analysis: paper, median conventionality percentile bin, citation outcome, field, year, or team-size stratum.
- Typical representation: binned median-conventionality curve, peak percentile band, reversal point, or interaction plot with tail novelty.
- Validation target: test whether conventional grounding has a finite optimum rather than a simple more-is-better relationship.
- Empirical signature: impact is highest at very high but not maximal median conventionality, especially when paired with tail novelty.

## Uses in Science of Science

- Adds a continuous validation to [median conventionality](../measures/median_conventionality.md) beyond high/low quadrant labels.
- Qualifies [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md) by showing that excessive conventionality can lose impact.
- Connects [tail novelty](../measures/tail_novelty.md) to the idea that unusual combinations work best inside a strong but not saturated conventional core.
- Supports [responsible metrics](../measures/responsible_metrics.md) by warning against one-dimensional novelty or conventionality scores.

## Operationalization

- Compute median conventionality for each paper and convert it to within-cohort percentiles or bins.
- Estimate citation outcomes separately by conventionality bin, tail-novelty class, and authorship structure.
- Include field fixed effects or field-year comparisons where possible.
- Identify the peak band and whether the relationship reverses after the peak.
- Report the curve rather than only a binary high-conventionality indicator.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) bins papers into eleven equally sized median-conventionality categories and estimates impact with field fixed effects.
- The paper reports that peak impact occurs in the 85th to 95th percentile of median conventionality.
- Uzzi et al. state that the peak appears irrespective of tail-novelty status or authorship structure.
- The figure caption reports that impact increases with median conventionality until the 85th to 95th percentile band and then reverses.

## Caveats

- The peak is citation-based and may differ for disruption, policy impact, patents, replication value, or expert judgments.
- Percentile bands depend on the cohort, field definition, reference-list length, and null model.
- A nonmonotonic curve can be obscured if conventionality is collapsed into a high/low indicator.

## Links

- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md)
- [recombination impact robustness grid](recombination_impact_robustness_grid.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `median_conventionality_impact_peak`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: conventionality impact optimum; 85th-95th conventionality peak; conventionality reversal point; nonmonotonic conventionality impact
