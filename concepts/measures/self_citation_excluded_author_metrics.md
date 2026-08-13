# Self-citation-excluded author metrics

## Summary

Self-citation-excluded author metrics recompute author-level citation indicators after removing citations from papers sharing at least one author with the cited paper.

## Canonical Form

- Unit of analysis: author, cited paper, citing paper, author-overlap relation, or citation indicator.
- Typical representation: paired raw and self-citation-excluded total citations, h-index, composite indicator, author-position components, and self-citation percentage.
- Measurement target: how much author-level impact remains after citations from overlapping authors are removed.
- Empirical signature: authors with high raw citation indicators can drop substantially when author-overlap self-citations are excluded.

## Uses in Science of Science

- Adds an author-level correction layer to [self-citation rates](self_citation_rates.md), [citation impact indicators](citation_impact_indicators.md), and [author citation composite indicator](author_citation_composite_indicator.md).
- Supports [citation metric gaming](../validations/citation_metric_gaming.md) screens when extreme self-citation shares distort rankings.
- Complements [citation source concentration ratio](citation_source_concentration_ratio.md), because concentrated citation sources can remain suspicious even after self-citation removal.
- Escalates extreme cases to [citation farm case review](../validations/citation_farm_case_review.md) when self-citation removal alone is insufficient.
- Provides author-level infrastructure for [responsible metrics](responsible_metrics.md).
- Relates to [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md) and [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md).

## Operationalization

- For each citation edge, identify authors of the cited paper and authors of the citing paper.
- Mark the citation as a self-citation if the two author sets overlap.
- Recompute author indicators after excluding marked citation edges.
- Report raw indicators, self-citation-excluded indicators, and the percentage of citations removed.
- Flag extreme self-citation percentages for qualitative audit rather than treating the flag as proof of misconduct.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) reports all six component metrics and the composite author indicator both with and without self-citations.
- Their operational definition removes a citation to a paper when any author of that cited paper is also an author of the citing paper.
- Among the top 100,000 authors in the 1996-2017 career-long database, the median self-citation percentage is 12.7%, with an interquartile range of 8.6%-17.7% and a range from 0.0% to 93.8%.
- In the 2017 single-year database, the median self-citation percentage is 9.2%, with an interquartile range of 4.8%-14.7% and a range from 0.0% to 98.6%.
- Ioannidis et al. report 1,085 career-long and 1,565 single-year top authors above 40% self-citations, warning that very high proportions can make metrics spurious.

## Caveats

- Self-citation is often legitimate in cumulative research programs.
- Removing author-overlap self-citations does not remove citation cartels, coercive citation, or concentrated non-overlapping citation loops.
- Extreme cases need qualitative review before metrics are used for evaluation.
- The author-overlap definition becomes broad for large-team papers.
- Self-citation-excluded metrics still depend on database coverage and author disambiguation.

## Links

- [self-citation rates](self_citation_rates.md)
- [author citation composite indicator](author_citation_composite_indicator.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [author-position citation components](author_position_citation_components.md)
- [citation source concentration ratio](citation_source_concentration_ratio.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [citation farm case review](../validations/citation_farm_case_review.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [responsible metrics](responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `self_citation_excluded_author_metrics`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: self-citation removed author metrics; author metrics without self-citations; self-citation-excluded citation indicators; author self-citation correction
