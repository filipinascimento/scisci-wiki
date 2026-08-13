# Citation threshold profile

## Summary

Citation threshold profile summarizes a citation distribution by reporting shares or counts below and above interpretable citation-count thresholds.

## Canonical Form

- Unit of analysis: paper cohort, citation-count threshold, field, database snapshot, or citation window.
- Typical representation: counts and percentages for zero citations, low-citation thresholds, and extreme high-citation thresholds.
- Measurement target: expose distributional skew in an interpretable table before fitting a parametric model.
- Empirical signature: most papers occupy low thresholds while a very small fraction occupy extreme high-citation thresholds.

## Uses in Science of Science

- Extends [uncited-paper mass](uncited_paper_mass.md) from zero citations to a broader lower-tail and upper-tail profile.
- Provides simple context for [citation distribution scaling](citation_distribution_scaling.md), [attention inequality](../mechanisms/attention_inequality.md), and [citation impact indicators](citation_impact_indicators.md).
- Helps communicate why averages are fragile under heavy-tailed citation distributions.
- Supplies threshold inputs for [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md).
- Provides a broader threshold-count companion to the [field-year mean high-citation flag](field_year_mean_high_citation_flag.md).
- Can be reported directly for historical data slices such as [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md).

## Operationalization

- Choose thresholds meaningful for the corpus, such as zero, <=10, >200, >500, or >1000 citations.
- Count papers in each threshold region and divide by the cohort denominator.
- Report publication year, citation-window endpoint, database, and document-type inclusion rules.
- Pair threshold profiles with full distributions or rank plots when making statistical claims.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) reports that in an ISI 1981 cohort of 783,339 papers, 368,110 were uncited and 633,391 were cited 10 times or less.
- The same paper reports that only 2,103 papers exceeded 200 citations, 282 exceeded 500 citations, and 64 exceeded 1,000 citations.
- Redner uses these threshold counts to illustrate both the mass of minimally recognized papers and the sparsity of the extreme citation tail.
- The paper concludes that citation distributions provide a more complete measure of popularity than averages or total citations.

## Caveats

- Thresholds are corpus-specific and should not be compared across fields or years without normalization.
- Low thresholds can be distorted by database coverage and uncited-paper inclusion rules.
- High thresholds are unstable in small cohorts and need tail-sparsity diagnostics.

## Links

- [uncited-paper mass](uncited_paper_mass.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)
- [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md)
- [citation higher-moment outlier leverage](../validations/citation_higher_moment_outlier_leverage.md)
- [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md)
- [citation impact indicators](citation_impact_indicators.md)
- [field-year mean high-citation flag](field_year_mean_high_citation_flag.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [responsible metrics](responsible_metrics.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `citation_threshold_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation threshold counts; low high citation threshold profile; citation count profile; citation skew threshold table
