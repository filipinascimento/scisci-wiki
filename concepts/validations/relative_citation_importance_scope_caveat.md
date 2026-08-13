# Relative citation importance-scope caveat

## Summary

Relative citation importance-scope caveat is the warning that a high field-normalized citation score indicates citation performance within a reference set, not necessarily broad scientific importance, quality, or societal value.

## Canonical Form

- Unit of analysis: paper, field-year reference set, normalized citation score, evaluation context, or scope claim.
- Typical representation: caveat attached to `c_f`, MNCS, percentile rank, or top-paper status.
- Validation target: prevent field-normalized citation indicators from being reinterpreted as universal importance measures.
- Empirical signature: two papers can reverse order under raw citations and normalized citations, while their broader importance remains unresolved.

## Uses in Science of Science

- Places [relative citation performance c_f](../measures/relative_citation_performance_cf.md) inside [responsible metrics](../measures/responsible_metrics.md).
- Guards [field-normalized citation impact](../measures/field_normalized_citation_impact.md), [mean normalized citation score](../measures/mean_normalized_citation_score.md), and [citation percentile indicators](../measures/citation_percentile_indicators.md) against overinterpretation.
- Complements [field-balanced top-rank representation](field_balanced_top_rank_representation.md), because fairer field representation is not the same as measuring importance.

## Operationalization

- State what the normalized indicator measures: citation performance relative to a field-year baseline.
- Avoid language equating normalized citation advantage with quality, truth, novelty, or societal importance.
- Pair normalized scores with qualitative context, field scope, contribution type, citation function, and uncertainty.
- When using rankings, report whether the evaluation question concerns field-relative performance or broader importance.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) gives a counterintuitive example: an Aerospace Engineering article with 20 citations can have a higher `c_f` than a Developmental Biology article with 100 citations.
- The paper explicitly warns that a larger `c_f` does not mean the article is necessarily more important.
- Radicchi et al. note that field-related factors matter for importance: a specialist-field article with outstanding `c_f` may be less important for science or society than a lower-`c_f` article in a broad competitive discipline.
- This makes the scope of field-normalized indicators explicit: they support fair citation-performance comparison, not universal value judgment.

## Caveats

- This caveat should not be used to dismiss field normalization; it limits interpretation after normalization.
- Importance can mean field-internal importance, cross-field scientific value, policy relevance, technological use, or social value, which require different evidence.
- Qualitative review can also be biased, so the caveat points to mixed evidence rather than metric rejection.

## Links

- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [field-balanced top-rank representation](field_balanced_top_rank_representation.md)
- [lognormal relative-citation curve](lognormal_relative_citation_curve.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation contexts and functions](../representations/citation_contexts.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `relative_citation_importance_scope_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: c_f importance caveat; normalized citation value caveat; field-relative impact scope; citation performance versus importance
