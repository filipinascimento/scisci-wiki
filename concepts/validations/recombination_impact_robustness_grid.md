# Recombination impact robustness grid

## Summary

Recombination impact robustness grid is a validation design that retests novelty-conventionality impact patterns across decades, hit thresholds, fields, controls, and authorship strata.

## Canonical Form

- Unit of analysis: paper, field, decade, citation threshold, regression specification, or authorship stratum.
- Typical representation: robustness figure grid, alternative top-citation thresholds, field-by-field panels, or fixed-effect regression checks.
- Validation target: determine whether a recombination-impact association is a broad regularity or an artifact of one cohort, threshold, or field.
- Empirical signature: high conventionality plus tail novelty remains associated with elevated high-impact probability across multiple robustness cuts.

## Uses in Science of Science

- Validates [novelty and conventionality](../mechanisms/novelty_conventionality.md) and [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md).
- Documents sensitivity of [hit-paper probability](../measures/hit_paper_probability.md) to top-citation thresholds and citation windows.
- Pairs with [median conventionality impact peak](median_conventionality_impact_peak.md) when continuous curves are more informative than quadrants.
- Supports [responsible metrics](../measures/responsible_metrics.md) by requiring field and threshold sensitivity before evaluation use.

## Operationalization

- Recompute the novelty-conventionality outcome pattern across multiple publication periods.
- Repeat with alternative high-impact thresholds, such as top 1%, top 5%, and top 10% cited papers.
- Run field-by-field or field-fixed-effect models rather than relying only on pooled estimates.
- Check whether authorship structure changes the pattern or only changes the frequency of high-novelty combinations.
- Report which parts of the pattern are robust and which are specification-dependent.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) reports robustness of the hit-paper relationship across different time periods, alternative high-impact definitions, and 243 fields of science.
- The paper's figure caption states that similar findings hold for all other decades from 1950 to 2000, top 1% or top 10% citation thresholds, and analyses controlling for field and other observable paper differences.
- Uzzi et al. also run regressions by median-conventionality category and team size with field fixed effects.
- These checks support the claim that the recombination-impact pattern is not limited to one decade, one top-5% hit definition, or one pooled field mixture.

## Caveats

- Robustness across fields and thresholds is not causal evidence that recombination causes later citations.
- The grid still depends on WoS coverage, journal-pair proxies, citation windows, and the selected null model.
- Citation robustness does not guarantee robustness for disruption, practical use, policy uptake, or replication value.

## Links

- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md)
- [median conventionality impact peak](median_conventionality_impact_peak.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `recombination_impact_robustness_grid`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: novelty impact robustness grid; recombination robustness checks; field-time hit-threshold robustness; novelty conventionality sensitivity grid
