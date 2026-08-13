# Field-balanced top-rank representation

## Summary

Field-balanced top-rank representation tests whether top-ranked papers from multiple fields appear in roughly proportional shares after citation normalization.

## Canonical Form

- Unit of analysis: field, paper, global rank list, top-z-percent subset, or normalized citation score.
- Typical representation: discipline share in top 5%, 10%, 20%, or 40% of a pooled ranking.
- Validation target: whether a citation ranking overrepresents high-citation-density fields and underrepresents low-citation-density fields.
- Empirical signature: after normalization, each field contributes close to its expected share in top-ranked subsets.

## Uses in Science of Science

- Converts [relative citation performance c_f](../measures/relative_citation_performance_cf.md) into a ranking validation rather than only a distributional fit.
- Provides a fairness check for [citation percentile indicators](../measures/citation_percentile_indicators.md) and field-normalized top-paper comparisons.
- Helps diagnose raw-citation rankings that favor biomedical or high-reference-density fields over mathematics, engineering, or other lower-citation-density fields.
- Complements [universal citation distribution collapse](universal_citation_distribution_collapse.md).

## Operationalization

- Pool papers from several fields with known field sizes.
- Rank the pooled papers once by raw citations and again by a normalized measure such as c_f.
- For each top-z-percent cutoff, compute the percentage of each field's papers that appears in the top set.
- Compare observed field shares with the expected z percent under an unbiased ranking.
- Report deviations, sampling uncertainty, and sensitivity to field taxonomy and document filters.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) ranks pooled articles from multiple disciplines by raw citation count and by c_f.
- Their raw-citation rankings show wide cross-field variation in the percentage of each discipline appearing in top-ranked subsets.
- Their c_f rankings dramatically reduce those variations for several top-z-percent choices, with empirical standard deviations close to the theoretical expectation under unbiased ranking.
- The paper uses this test to support the claim that c_f gives a fairer cross-discipline ranking than raw citation counts.

## Caveats

- Proportional field representation is a ranking fairness diagnostic, not a complete definition of scientific value.
- Field-balanced ranking should be interpreted with [relative citation importance-scope caveat](relative_citation_importance_scope_caveat.md).
- Results depend on the fields pooled, field sizes, citation windows, and document-type filtering.
- Interdisciplinary papers and multidisciplinary journals may require fractional or article-level field assignment.

## Links

- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [top-percentile publication share](../measures/top_percentile_publication_share.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [relative citation importance-scope caveat](relative_citation_importance_scope_caveat.md)
- [reference set construction](../methods/reference_set_construction.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `field_balanced_top_rank_representation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: top-rank field balance; unbiased top-z ranking; normalized ranking field fairness; cross-field top-share validation
