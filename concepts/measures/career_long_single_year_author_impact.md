# Career-long and single-year author impact

## Summary

Career-long and single-year author impact separates accumulated citation performance across a career from citation attention received in a recent year.

## Canonical Form

- Unit of analysis: author, author-year, citation window, field, or subfield.
- Typical representation: paired career-long and single-year citation indicators, often with field labels and self-citation variants.
- Measurement target: distinguish long-run accumulated author impact from recent citation performance.
- Empirical signature: seniority and publication age dominate career-long counts more strongly than single-year citation snapshots.

## Uses in Science of Science

- Adds a career-stage guardrail to [author citation composite indicator](author_citation_composite_indicator.md) and [h-index](h_index.md).
- Supports [responsible metrics](responsible_metrics.md) by preventing one accumulated citation score from standing in for current contribution.
- Connects citation evaluation to [scientific career impact](../mechanisms/scientific_career_impact.md), where productivity timing and citation timing are central.
- Provides a temporal design choice for [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Complements [citation window selection](../methods/citation_window_selection.md) at the author level.

## Operationalization

- Define a career-long citation window, usually all available indexed citations to an author's papers within the database's historical coverage.
- Define a single-year or recent-year citation window and recompute the same author-level components for citations received in that window.
- Report [Scopus pre-1996 citation truncation](../validations/scopus_pre_1996_citation_truncation.md) or equivalent source-window limits when career-long indicators are source-windowed.
- Report first publication year and last publication year so users can interpret career stage.
- Pair both windows with field/subfield context and self-citation-included and self-citation-excluded variants.
- Avoid comparing early-career and late-career scientists with career-long metrics alone.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) constructs both career-long and single-year versions of its author citation indicators.
- The career-long version uses Scopus citation data from January 1, 1996 to December 31, 2017, with citations to pre-1996 papers counted only when received during that indexed window.
- The single-year version uses citations received in 2017 to measure recent citation performance and reduce, but not eliminate, bias from career length.
- Ioannidis et al. include first and last publication years because career stage remains relevant even when recent-year citation windows are used.
- The same paper later compares updated career-long snapshots to show how author-level citation tables can be refreshed over time.

## Caveats

- Career-long indicators favor older publication portfolios and database eras with better citation coverage.
- Single-year indicators remain dependent on the existing stock of citable work.
- Very recent work may be undervalued by both windows if citation accumulation is slow.
- Field, publication type, and database coverage still affect both measures.

## Links

- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [author citation composite indicator](author_citation_composite_indicator.md)
- [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md)
- [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md)
- [citation window selection](../methods/citation_window_selection.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [citation impact indicators](citation_impact_indicators.md)
- [h-index](h_index.md)
- [responsible metrics](responsible_metrics.md)
- [Scopus pre-1996 citation truncation](../validations/scopus_pre_1996_citation_truncation.md)
- [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `career_long_single_year_author_impact`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: career-long author impact; single-year author impact; recent-year author citation performance; author impact window split
