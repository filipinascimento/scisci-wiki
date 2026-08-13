# Fixed-set citation inequality sensitivity

## Summary

Fixed-set citation inequality sensitivity tests whether a longitudinal citation-inequality trend persists when the author count or journal set is held constant across time.

## Canonical Form

- Unit of analysis: author population, journal set, citation index, field, period, or inequality statistic.
- Typical representation: original trend compared with fixed-author, fixed-journal, or fixed-source robustness curves.
- Validation target: distinguish real concentration changes from database expansion, source-list growth, or changing population denominators.
- Empirical signature: the inequality trend remains similar after fixing the author sample size or journal set.

## Uses in Science of Science

- Supports [normalized inflation-corrected citation score](../measures/normalized_inflation_corrected_citation_score.md) by adding a source-growth robustness layer.
- Provides a validation companion for [author citation Gini](../measures/author_citation_gini.md) and [citation elite concentration](../measures/citation_elite_concentration.md).
- Connects longitudinal inequality analysis to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) and [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md).

## Operationalization

- Estimate the baseline citation concentration or Gini trend.
- Recompute the trend with a fixed number of authors across years.
- Recompute the trend with a fixed set of journals or sources across years.
- Compare levels, slopes, and breakpoints with the baseline trend.
- Report whether conclusions depend on database growth, new journal inclusion, or author-population expansion.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) notes that Web of Science grows through more papers and the inclusion of new journals.
- Their main citation-inequality analysis uses field-normalized and inflation-corrected citation scores to reduce temporal comparability problems.
- Nielsen and Andersen also report that fixed-author and fixed-journal robustness checks produce near-identical trends in citation concentration.
- This supports the interpretation that rising author-level citation inequality is not only an artifact of database growth or source-list expansion.

## Caveats

- Fixed-set checks can overrepresent older journals or continuing authors and underrepresent new fields.
- Holding the journal set fixed does not solve author disambiguation or citation-practice changes.
- Similar robustness curves support, but do not prove, a causal mechanism behind rising inequality.

## Links

- [normalized inflation-corrected citation score](../measures/normalized_inflation_corrected_citation_score.md)
- [author citation Gini](../measures/author_citation_gini.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)
- [web of science](../datasets/web_of_science.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `fixed_set_citation_inequality_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: fixed-author inequality sensitivity; fixed-journal concentration check; source-growth robustness; citation database growth sensitivity
