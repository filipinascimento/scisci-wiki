# h-index field-scale caveat

## Summary

h-index field-scale caveat is the warning that h-index values are not directly comparable across fields with different citation densities, publication rates, collaboration sizes, and database coverage.

## Canonical Form

- Unit of analysis: author, field, subfield, discipline, database snapshot, or evaluation cohort.
- Typical representation: field-stratified h-index distributions, field-normalized h-index variants, and benchmark comparisons by discipline.
- Validation target: whether apparent author-impact differences reflect field scale rather than individual contribution.
- Empirical signature: one field has systematically higher h values than another, especially at the high end, under the same database rules.

## Uses in Science of Science

- Provides the original cross-field warning attached to [h-index](../measures/h_index.md).
- Motivates [field-normalized h-index](../measures/field_normalized_h_index.md), [field normalized citation impact](../measures/field_normalized_citation_impact.md), and field-specific [h-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md).
- Includes collaboration-size differences, which can be audited through [large-team h-index inflation](large_team_h_index_inflation.md) and [coauthor-normalized h-index](../measures/coauthor_normalized_h_index.md).
- Helps responsible metric users avoid comparing scientists from physics, biomedical sciences, and other fields with a single raw h threshold.
- Links h-index interpretation to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) and [field-classification sensitivity](field_classification_sensitivity.md).

## Operationalization

- Compute h-index distributions separately by field, subfield, career stage, and database.
- Compare raw h values with field-normalized or percentile-based author metrics.
- Inspect differences in reference-list length, number of papers per scientist, field size, collaboration size, and document-type mix.
- Report field caveats whenever h-index values are used outside a single comparable community.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) states that typical h values differ across fields because of reference-list length, papers per scientist, and field size.
- Hirsch's biological and biomedical examples show substantially higher high-end h values than the physics examples.
- The paper explicitly calls for more research on similarities and differences in h-index distributions across fields.

## Caveats

- Field labels can be too coarse for interdisciplinary scientists and mixed-topic careers.
- Normalizing by field can reduce one bias while introducing sensitivity to classification choices.
- Raw h-index comparisons may be reasonable within tight subfields but should still report database and career-age assumptions.

## Links

- [h-index](../measures/h_index.md)
- [field-normalized h-index](../measures/field_normalized_h_index.md)
- [h-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md)
- [coauthor-normalized h-index](../measures/coauthor_normalized_h_index.md)
- [large-team h-index inflation](large_team_h_index_inflation.md)
- [recognition-cohort h-index validation](recognition_cohort_h_index_validation.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `h_index_field_scale_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index field differences; discipline-specific h-index scale; cross-field h-index caveat; raw h-index field bias
