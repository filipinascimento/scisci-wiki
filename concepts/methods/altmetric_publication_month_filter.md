# Altmetric publication-month filter

## Summary

Altmetric publication-month filtering restricts an altmetric analysis to papers with identifiable publication months inside a provider collection window, so source coverage and citation exposure are not mixed across incompatible time periods.

## Canonical Form

- Unit of analysis: paper, publication month, provider collection start date, citation census year, DOI-bearing article, or review.
- Typical representation: month-eligible cohort, July-December subset, provider-start cutoff, or publication-month completeness flag.
- Method target: align online-attention observation with citation-window availability.
- Empirical signature: papers lacking clear publication-month metadata are excluded even when they fall in the nominal publication year.

## Uses in Science of Science

- Refines [altmetric attention timing windows](altmetric_attention_timing_windows.md) when a provider began collecting after the start of a calendar year.
- Defines the eligible denominator before applying [altmetric active universe](altmetric_active_universe.md), [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md), or [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md).
- Connects provider collection dates in [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md) to paper-level inclusion rules.
- Helps separate source-coverage restrictions from [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md).

## Operationalization

- Record the provider collection start date and the citation census window.
- Keep only papers whose publication month can be unambiguously identified within the eligible period.
- Report how many otherwise eligible papers are lost because month metadata are unclear.
- Preserve document-type filters such as articles and reviews if citation comparisons require them.
- Pair the filter with an [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md) caveat, because issue-month metadata can lag online availability.
- Run a broader sensitivity analysis when the publication month is missing for many records.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) focuses on publications from July 2011 onward because Altmetric.com collection began in July 2011 and 2011 was the most recent year with a full 2012 citation window.
- The paper keeps only records whose publication month is clearly identifiable, so the selected papers can be assigned to July through December 2011.
- Costas et al. acknowledge that this excludes some papers from the same months when month metadata are unclear.
- The paper then uses complementary tight analyses to reduce sensitivity to the remaining timing problem.

## Caveats

- Month filters can disproportionately exclude journals, fields, or databases with incomplete issue-month metadata.
- Official issue month is not the same as first online availability.
- A month-eligible subset improves timing alignment but changes the target population.
- Provider backfill, API changes, and snapshot date still need separate provenance checks.

## Links

- [altmetric attention timing windows](altmetric_attention_timing_windows.md)
- [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md)
- [altmetric active universe](altmetric_active_universe.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [citation window selection](citation_window_selection.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_publication_month_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: altmetric month eligibility; publication-month restriction; provider-start month filter; July 2011 altmetric filter
