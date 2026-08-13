# Multidisciplinary field-mix caveat

## Summary

Multidisciplinary field-mix caveat is the validation concern that broad multidisciplinary categories may combine several field-specific citation distributions, weakening field-normalized scaling and ranking assumptions.

## Canonical Form

- Unit of analysis: multidisciplinary category, journal set, article-level field assignment, or citation distribution.
- Typical representation: mixed-field distribution, convolution of field distributions, split-journal test, or article-level reassignment.
- Validation target: whether a field category is internally coherent enough for citation normalization.
- Empirical signature: a broad category fails to match the normalized distribution seen in more homogeneous fields.

## Uses in Science of Science

- Guards [relative citation performance c_f](../measures/relative_citation_performance_cf.md) against overly broad reference sets.
- Refines [reference set construction](../methods/reference_set_construction.md) and [field-classification sensitivity](field_classification_sensitivity.md).
- Explains why multidisciplinary journals may need article-level field assignment rather than journal-level category normalization.
- Connects journal-category baselines to [science maps](../representations/science_maps.md) and publication-level clustering approaches.

## Operationalization

- Identify broad or multidisciplinary categories in the source database.
- Compare their normalized citation distribution with homogeneous field categories.
- Split multidisciplinary journals or papers into article-level fields when possible.
- Test whether high-level categories are mixtures of narrower citation distributions.
- Report when a category is excluded, split, or handled with special rules.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) reports that the Web of Science category Multidisciplinary Sciences does not perfectly fit the universal normalized-citation pattern.
- The paper explains the mismatch as a convolution of citation distributions from the single disciplines represented in the journals.
- Radicchi et al. note that focusing on Nature, Science, and PNAS within the category fits the global universal picture better.
- This supports treating field-mix sensitivity as a validation step when citation normalization uses journal-level categories.

## Caveats

- Multidisciplinary status is not inherently a data-quality problem; it becomes a problem when used as a single homogeneous citation baseline.
- Article-level field assignment can reduce mixing but introduces its own classification uncertainty.
- Excluding multidisciplinary categories can bias analyses that study cross-field or general-science venues.

## Links

- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [reference set construction](../methods/reference_set_construction.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [science maps](../representations/science_maps.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `multidisciplinary_field_mix_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: multidisciplinary category caveat; field-mix normalization caveat; mixed-field citation distribution; multidisciplinary citation baseline
