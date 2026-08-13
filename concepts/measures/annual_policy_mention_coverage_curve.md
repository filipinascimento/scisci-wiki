# Annual policy mention coverage curve

## Summary

Annual policy mention coverage curve tracks the share of eligible papers from each publication year that receive at least one policy-related mention.

## Canonical Form

- Unit of analysis: publication year, DOI-bearing publication cohort, provider snapshot, or field-year.
- Typical representation: yearly count and percentage of papers with at least one policy mention.
- Measurement target: how observed policy-mention coverage varies by publication year and citation/mention lag.
- Empirical signature: policy-mention rates can peak several years after publication and decline for recent years in a fixed snapshot.

## Uses in Science of Science

- Refines [policy mention coverage rate](policy_mention_coverage_rate.md) by making publication year explicit.
- Supports timing-aware interpretation of [policy mention time lag](policy_mention_time_lag.md).
- Helps distinguish real policy uptake from provider backfill, source-list growth, and recent-paper censoring.
- Provides a sparse-data counterpart to [citation window selection](../methods/citation_window_selection.md) for policy attention.

## Operationalization

- Define a DOI-bearing publication denominator by publication year.
- Count papers with at least one policy-related mention in a fixed provider snapshot.
- Divide mentioned papers by eligible papers for each publication year.
- Report provider snapshot date and whether policy-source coverage is stable across the publication years.
- Avoid comparing recent years without noting right-censoring in policy-document production and provider collection.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) reports annual counts and percentages of DOI-bearing WoS papers with at least one policy-related mention for publication years 2000-2014.
- The observed percentage peaks at 0.48% for 2005 publications in their December 2015 Altmetric snapshot.
- The paper interprets this as indicating a longer time frame for policy mentions than for scholarly citations, whose citation curves often peak two to four years after publication.
- Recent years show lower observed rates, including 0.09% for 2014, consistent with short exposure time and provider/source-coverage limits.

## Caveats

- A fixed snapshot conflates policy uptake lag, provider backfill, source-list expansion, and document production timing.
- Yearly rates are DOI-denominator rates, not all-literature rates.
- Low counts can make field-year or institution-year curves unstable.

## Links

- [policy mention coverage rate](policy_mention_coverage_rate.md)
- [policy mention time lag](policy_mention_time_lag.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [citation window selection](../methods/citation_window_selection.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `annual_policy_mention_coverage_curve`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: yearly policy mention rate; policy mention time curve; annual policy coverage; policy-mention publication-year curve
