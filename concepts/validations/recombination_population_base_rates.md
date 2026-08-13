# Recombination population base rates

## Summary

Recombination population base rates are cohort-level prevalence estimates for conventional and atypical reference combinations before those measures are linked to scientific impact.

## Canonical Form

- Unit of analysis: paper cohort, field-year, cited-journal pair distribution, median conventionality, or tail novelty.
- Typical representation: population histogram, share below or above a threshold, field-by-field replication table, or decade comparison.
- Validation target: establish whether a recombination feature is common, rare, stable, or field-specific before using it as an explanatory variable.
- Empirical signature: most papers rely on highly conventional combinations, while strongly atypical median combinations are rare.

## Uses in Science of Science

- Provides the cohort baseline for [median conventionality](../measures/median_conventionality.md) and [tail novelty](../measures/tail_novelty.md).
- Helps distinguish a rare strategy from a strategy that merely has high impact conditional on occurrence.
- Gives denominator context to the [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md).
- Supports field and time comparisons of recombination strategies before outcome modeling.

## Operationalization

- Compute paper-level reference-combination measures for a publication cohort.
- Plot or tabulate the distribution of median conventionality and tail novelty across papers.
- Report shares above or below substantively meaningful thresholds, such as negative z-score values.
- Repeat by decade, field, or document class to test whether base rates are stable.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) reports that half of papers in the 1980s and 1990s had high positive median z-scores, while papers with negative median z-scores were rare.
- The same paper reports that about 41% of papers in those decades had 10th-percentile z-scores below zero.
- Uzzi et al. state that these empirical regularities are largely replicated field by field and across time.
- This supports treating recombination prevalence as a base-rate layer separate from impact models.

## Caveats

- Base rates depend on the cited entity resolution, journal coverage, and null model.
- A rare recombination profile is not necessarily valuable or creative.
- Field-level aggregation can hide local specialties with different opportunity structures.

## Links

- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; SciSciNet: W2066752129; WoS: unknown]

## Metadata

- Concept ID: `recombination_population_base_rates`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: recombination prevalence baseline; novelty-conventionality base rates; journal-pair population rates; recombination cohort baseline
