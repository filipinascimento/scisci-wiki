# Field-normalized h-index

## Summary

Field-normalized h-index modifies the h-index by rescaling both citation counts and publication ranks against field-specific averages, aiming to compare authors across disciplines more fairly.

## Canonical Form

- Unit of analysis: author, field, publication set, citation count, publication rank, or evaluation portfolio.
- Typical representation: generalized h-index, hf, citations normalized as c/c0, rank normalized as r/N0, or field-rescaled h metric.
- Measurement target: combine productivity and impact while reducing field differences in citation density and publication rate.
- Empirical signature: author rankings change when citations and publication counts are normalized by discipline.

## Uses in Science of Science

- Extends [h-index](h_index.md) with [field normalized citation impact](field_normalized_citation_impact.md).
- Connects [citation distribution scaling](citation_distribution_scaling.md), [mean normalized citation score](mean_normalized_citation_score.md), and [responsible metrics](responsible_metrics.md).
- Provides a concrete example of why author-level evaluation needs field and productivity-rate normalization.
- Responds to the original [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md), where raw h values vary across fields with different citation and publication practices.

## Operationalization

- Assign the author's papers to fields and choose a citation window and database snapshot.
- Normalize each paper's citations by [relative citation performance c_f](relative_citation_performance_cf.md).
- Normalize publication rank by the field-specific average number of publications per author, [publication-rate normalized rank](publication_rate_normalized_rank.md).
- Sort papers by normalized citation performance and find the last normalized rank where c/c0 is at least r/N0.
- Report raw h-index, field-normalized h-index, field assignment rules, and sensitivity to database coverage.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) identifies difficulty comparing authors in different disciplines as a shortcoming of the original h-index.
- The paper argues that article impact should be compared through c/c0, where c0 is the average number of citations in the field.
- Radicchi et al. also normalize publication counts through N/N0 because author publication rates differ by discipline.
- The paper defines a generalized h-index, hf, by ordering articles by c/c0 and comparing that value to reduced rank r/N0.
- The citation and productivity components are split out as [relative citation performance c_f](relative_citation_performance_cf.md) and [publication-rate normalized rank](publication_rate_normalized_rank.md).

## Caveats

- Field assignment and database coverage can dominate the result.
- Normalizing h-index does not solve author contribution, career length, self-citation, or citation-context problems.
- Multi-field authors need transparent handling of mixed field baselines.

## Links

- [h-index](h_index.md)
- [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [relative citation performance c_f](relative_citation_performance_cf.md)
- [publication-rate normalized rank](publication_rate_normalized_rank.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `field_normalized_h_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: generalized h-index; hf index; normalized h-index; field-rescaled h-index
