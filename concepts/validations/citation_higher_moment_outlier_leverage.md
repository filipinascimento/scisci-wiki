# Citation higher-moment outlier leverage

## Summary

Citation higher-moment outlier leverage is the validation concern that a single exceptionally cited paper may barely change mean citations while strongly affecting higher-order citation moments and tail-sensitive indicators.

## Canonical Form

- Unit of analysis: publication cohort, annual citation distribution, top-cited paper, moment order, or tail-sensitive indicator.
- Typical representation: mean citation count, square-root second moment, cube-root third moment, maximum citation count, or top-paper leverage audit.
- Validation target: determine whether a citation indicator is dominated by one or a few extreme papers.
- Empirical signature: the cohort mean changes little while higher moments or tail indicators jump in years with one exceptional paper.

## Uses in Science of Science

- Adds an outlier-sensitivity layer to [citation moment-ratio shape test](../methods/citation_moment_ratio_shape_test.md).
- Helps interpret [citation impact indicators](../measures/citation_impact_indicators.md), [citation distribution scaling](../measures/citation_distribution_scaling.md), and [citation threshold profile](../measures/citation_threshold_profile.md).
- Complements [citation tail sparsity limit](citation_tail_sparsity_limit.md): sparse tails are not only hard to fit, they can also dominate high-order summaries.
- Supports robust reporting of high-impact tails, including winsorized, percentile, and threshold-based alternatives.
- Uses annual rows from [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md) as a classic example.

## Operationalization

- For each cohort, compute mean citations, higher moments, high-percentile thresholds, and maximum citation count.
- Compare how each summary changes after removing or winsorizing the top one, top five, or top percentile of papers.
- Report whether conclusions depend on moment order, tail threshold, or one named exceptional paper.
- Pair moment summaries with full distribution plots and [citation threshold profile](../measures/citation_threshold_profile.md).
- Record citation-data census dates because the identity and leverage of top papers can change over time.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) uses annual Physical Review D citation statistics to compare mean citations, second and third moment roots, and the most-cited paper by year.
- Redner notes that a single exceptionally well-cited paper has little effect on the average number of citations in a year but a much larger influence on higher-order moments.
- The annual table shows years with similar mean citations but very different maximum citation counts and higher moments.
- This supports checking whether high-order citation summaries are measuring broad impact or a small number of extreme papers.

## Caveats

- Outlier leverage is not necessarily a flaw; extreme papers can be the substantive target of a high-impact analysis.
- Removing top papers can erase real discovery signals, so sensitivity should be reported rather than automatically used to censor.
- Moment leverage depends on field size, citation window, document type, and database coverage.

## Links

- [citation moment-ratio shape test](../methods/citation_moment_ratio_shape_test.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [citation threshold profile](../measures/citation_threshold_profile.md)
- [citation tail sparsity limit](citation_tail_sparsity_limit.md)
- [citation tail maturation bias](citation_tail_maturation_bias.md)
- [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `citation_higher_moment_outlier_leverage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation moment outlier leverage; high-order citation moment sensitivity; top-paper moment leverage; extreme-paper citation leverage
