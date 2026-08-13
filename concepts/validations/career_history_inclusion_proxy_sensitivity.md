# Career-history inclusion proxy sensitivity

## Summary

Career-stage contributorship findings are sensitive to inclusion thresholds and career proxies such as first publication year, 1980 coverage, and minimum publication counts.

## Canonical Form

- Unit of analysis: author career history, inclusion threshold, first-publication year, publication count, gender-confidence filter, or document type.
- Typical representation: sensitivity grid over career-history inclusion and proxy rules.
- Mechanism, measurement, or validation target: robustness of career-stage contribution archetypes to sample construction.
- Empirical signature: archetype assignment, transition, or attrition estimates shift across first-year and minimum-output filters.

## Uses in Science of Science

- Refines career-history validation by linking it to [author name disambiguation](../methods/author_name_disambiguation.md) and [homonym synonym author errors](homonym_synonym_author_errors.md).
- Useful as a reusable check when [scientific age career stage bins](../representations/scientific_age_career_stage_bins.md) is used in science-of-science inference.
- Creates cross-links to [career survivorship exit censoring boundary](career_survivorship_exit_censoring_boundary.md) so the motif is not interpreted in isolation.

## Operationalization

- Run grids over first-publication year versus first-first-authored year, minimum-publication thresholds, and pre-1980 exclusions.
- Compare archetype assignment, transition, and attrition estimates across those grids.
- Track how author-disambiguation error and representativeness move under relaxed thresholds.

## Evidence and Validations

- Verified local full text from Robinson-Garcia et al. (2020) applies gender-confidence, post-1980, five-publication, and document-type filters and notes that first-publication age and sample representativeness can affect results.
- The motif turns those filters into an explicit sensitivity design.

## Caveats

- Relaxing thresholds may worsen author-disambiguation error.
- Strict thresholds can exclude transient, early-career, or nontraditional authors.

## Links

- [Author name disambiguation](../methods/author_name_disambiguation.md)
- [Homonym and synonym author errors](homonym_synonym_author_errors.md)
- [Scientific-age career-stage bins](../representations/scientific_age_career_stage_bins.md)
- [Career-survivorship exit-censoring boundary](career_survivorship_exit_censoring_boundary.md)
- [Citation sample representativeness check](citation_sample_representativeness_check.md)
- [Same-source contribution prediction boundary](same_source_contribution_prediction_boundary.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/eLife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `career_history_inclusion_proxy_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: five-publication inclusion sensitivity; scientific-age proxy audit; transient-author exclusion bias
