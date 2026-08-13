# Citation-indicator size dependence

## Summary

Citation-indicator size dependence distinguishes indicators that grow with publication volume from indicators that estimate average impact per publication.

## Canonical Form

- Unit of analysis: paper set, author, group, institution, journal, country, or field.
- Typical representation: size-dependent total indicator, size-independent average indicator, paired total/average comparison, or size-adjusted caveat.
- Measurement target: decide whether an indicator measures total output-weighted impact or average per-publication impact.
- Empirical signature: totals and counts of highly cited publications do not decrease when more publications are added, while averages and proportions can decrease.

## Uses in Science of Science

- Clarifies interpretation of [citation impact indicators](citation_impact_indicators.md).
- Separates total-impact indicators from [mean normalized citation score](mean_normalized_citation_score.md), [citation percentile indicators](citation_percentile_indicators.md), and [top-percentile publication share](top_percentile_publication_share.md).
- Explains why the [h-index](h_index.md) is sensitive to portfolio size even though it combines publication and citation counts.
- Supports [responsible metrics](responsible_metrics.md) by forcing the evaluation question to choose between total contribution and average performance.

## Operationalization

- Classify each metric as size-dependent or size-independent before comparing units.
- Use total citations and number of highly cited papers when the target is aggregate impact.
- Use average citations, normalized averages, or proportions of highly cited papers when comparing units of different output size.
- Treat h-index as size-dependent unless a separate size-adjusted indicator is explicitly defined and validated.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) distinguishes five basic citation-impact indicators: total citations, average citations per publication, number of highly cited publications, proportion of highly cited publications, and h-index.
- Waltman classifies total citations, number of highly cited publications, and h-index as size-dependent indicators.
- The review classifies average citations per publication and proportion of highly cited publications as size-independent indicators used for comparing units of different size.
- Waltman notes that the h-index is size-dependent but lacks a direct size-independent counterpart because of how it combines publication and citation counts.

## Caveats

- Size-independent does not mean unbiased; averages and proportions still depend on field, age, document type, citation window, and database coverage.
- Size-dependent indicators may be appropriate for total contribution questions but misleading for average-performance comparisons.
- Input-normalized productivity indicators require additional data on researchers, funding, or resources.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [h-index](h_index.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](responsible_metrics.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `citation_indicator_size_dependence`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: size-dependent citation indicators; size-independent citation indicators; total versus average citation impact; citation indicator portfolio-size dependence
