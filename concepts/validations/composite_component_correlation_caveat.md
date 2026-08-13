# Composite component correlation caveat

## Summary

Composite component correlation caveat is the validation warning that a multi-component bibliometric score can combine indicators that are not independent, so the composite may overweight related dimensions while appearing broadly balanced.

## Canonical Form

- Unit of analysis: composite metric, component indicator, author profile, field, or ranking.
- Typical representation: component-correlation matrix, redundancy note, component-exposure table, or composite-versus-components comparison.
- Validation target: whether a composite score adds distinct evidence beyond correlated inputs.
- Empirical signature: the composite is stable and transparent but its components move together, making some dimensions count more than their labels imply.

## Uses in Science of Science

- Qualifies [author citation composite indicator](../measures/author_citation_composite_indicator.md) and other multi-indicator evaluation scores.
- Connects composite indicators to [responsible metrics](../measures/responsible_metrics.md) because weighting and redundancy remain normative choices.
- Complements [composite indicator replication stability](composite_indicator_replication_stability.md): a reproducible composite can still have correlated components.
- Encourages users of the [standardized author citation database](../datasets/standardized_author_citation_database.md) to inspect component metrics alongside the aggregate score.

## Operationalization

- Publish all component indicators in addition to the composite.
- Estimate pairwise correlations among components within relevant fields, career stages, and source snapshots.
- Report whether the composite's rank order is driven mostly by one or two strongly correlated components.
- Compare decisions made from the composite against decisions made from independent component review.
- Treat component weighting as an explicit design choice rather than a purely technical default.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) builds an author composite indicator from six citation metrics.
- The paper states that the six components of the composite indicator are not orthogonal and have correlations among themselves.
- Ioannidis et al. note that some bibliometrics experts may prefer to inspect each component independently rather than rely on the composite.
- The authors explicitly provide the component values, allowing both composite and component-wise interpretations.

## Caveats

- Correlated components do not automatically invalidate a composite; they may represent related but still useful dimensions.
- A component-correlation caveat is different from computational instability or source-data error.
- Correlation patterns can vary by field, career age, collaboration regime, and database.
- Component transparency does not prevent downstream users from overinterpreting a single composite rank.

## Links

- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [composite indicator replication stability](composite_indicator_replication_stability.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [author-position citation components](../measures/author_position_citation_components.md)
- [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `composite_component_correlation_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: non-orthogonal composite components; correlated metric components; composite redundancy caveat; component correlation audit
