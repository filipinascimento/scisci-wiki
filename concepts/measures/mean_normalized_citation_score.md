# Mean normalized citation score

## Summary

Mean normalized citation score summarizes a set of papers by averaging citation counts after each paper has been normalized against comparable papers from the same reference set.

## Canonical Form

- Unit of analysis: paper portfolio, author, institution, country, journal, field, funder, or program.
- Typical representation: average of observed-to-expected citation ratios or related normalized citation scores.
- Measurement target: average relative citation impact after adjusting for field, year, document type, and citation window.
- Empirical signature: a portfolio score above one indicates citation impact above the reference-set expectation under the chosen normalization.

## Uses in Science of Science

- Provides a compact aggregate for [field normalized citation impact](field_normalized_citation_impact.md).
- Complements [citation percentile indicators](citation_percentile_indicators.md), which are less sensitive to extreme citation counts.
- Helps connect [citation distribution scaling](citation_distribution_scaling.md) to evaluation workflows.

## Operationalization

- Define a [reference set](../methods/reference_set_construction.md) for each paper.
- Compute an expected citation value, often the mean citation count in the same field, year, document type, and citation window.
- Divide each paper's observed citations by its expected value.
- Average normalized values across the portfolio, optionally with fractional counting or uncertainty intervals.
- Report the [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md), especially whether the score uses average of ratios or ratio of averages.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) shows the basic ratio logic: divide citation counts by a field-year average to reduce large cross-disciplinary differences.
- The Radicchi c_f indicator is split out as [relative citation performance c_f](relative_citation_performance_cf.md), a paper-level ratio that can be averaged into portfolio-level normalized scores when the aggregation rule is explicit.
- Verified full-text evidence from Waltman (2016) reviews normalized citation indicators based on average citation counts and treats the mean normalized citation score family as a central cited-side normalization approach.
- Waltman's review also cautions that average-based normalized indicators depend on publication selection, document-type inclusion, citation-window length, and field definitions.
- Waltman distinguishes two aggregation rules: averaging paper-level normalized citation ratios and dividing total observed citations by total expected citations.
- Verified full-text evidence from Hutchins et al. (2016) provides a paper-specific alternative in the same family: [Relative Citation Ratio](relative_citation_ratio.md) divides article citation rate by an expected citation rate derived from a co-citation field and benchmark.
- Verified full-text evidence from Nielsen and Andersen (2021) adds a longitudinal variant, [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md), which first discounts citations by citing-year reference volume and then field-year normalizes the resulting score.

## Caveats

- Means remain sensitive to heavy-tailed citation distributions, even after normalization.
- A high portfolio average can be driven by a few extreme papers.
- Mean normalized scores remain citation-performance indicators and should not be interpreted as importance without the [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md).
- Reference-set choices and fractional counting rules should be reported with the score.

## Links

- [field normalized citation impact](field_normalized_citation_impact.md)
- [relative citation performance c_f](relative_citation_performance_cf.md)
- [field-year citation baseline c0](field_year_citation_baseline_c0.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [relative citation ratio](relative_citation_ratio.md)
- [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md)
- [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]
- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `mean_normalized_citation_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Aliases: MNCS; average normalized citation score; normalized citation average; observed expected citation ratio
