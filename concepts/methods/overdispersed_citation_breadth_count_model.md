# Overdispersed citation-breadth count model

## Summary

An overdispersed citation-breadth count model estimates changes in the number of distinct cited articles or journals when counts are discrete, skewed, and more variable than a simple Poisson process assumes.

## Canonical Form

- Unit of analysis: journal-year count, subfield-year count, source-year panel observation, or distinct cited-source outcome.
- Typical representation: negative-binomial, quasi-Poisson, or robust count regression with fixed effects and exposure controls.
- Method target: model citation-breadth counts without treating highly concentrated core-journal observations as ordinary linear outcomes.
- Empirical signature: exponentiated coefficients can be interpreted as ratios or percentage changes in distinct cited sources.

## Uses in Science of Science

- Provides a model class for [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md).
- Strengthens [online availability panel identification](../validations/online_availability_panel_identification.md) when breadth outcomes are counts rather than continuous measures.
- Complements [journal fixed-effect citation models](journal_fixed_effect_citation_model.md), which handle paper-level citation counts under related panel assumptions.
- Helps avoid mistaking source-size, field-size, and overdispersion artifacts for substantive [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).

## Operationalization

- Define the count outcome, such as distinct cited articles or distinct cited journals in a source-year window.
- Inspect the mean-variance relation and the concentration of high-count observations.
- Fit a count model that allows overdispersion, using fixed effects or source-specific dispersion where the design calls for within-source comparisons.
- Include controls for citation year, article volume, reference-list length, field or subfield, and source coverage.
- Exponentiate coefficients when using log-link count models, then convert ratios to percentage changes for interpretation.
- Check robustness to Poisson with robust errors, zero-inflated specifications, sample restrictions, and alternative citation windows.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) models the distinct number of cited articles and journals with negative binomial models.
- Evans motivates the count model because citation values are discrete, high values concentrate within a few core journals, and counts vary widely among other sources.
- The paper estimates fixed-effect specifications with maximum likelihood and interprets exponentiated coefficients as the ratio of distinct cited items after a one-year increase in electronic provision relative to no increase.
- Evans converts those ratios into percentage changes and reports that additional online availability is associated with fewer distinct cited articles and journals.
- This modeling choice separates the count nature of citation breadth from the linear models Evans uses for average reference age and Herfindahl concentration.

## Caveats

- Fixed-effect negative-binomial formulations differ across software and should be documented carefully.
- Overdispersion adjustment does not solve source disambiguation, missing-reference, or field-boundary errors.
- Count models still require clear denominators for article volume, reference volume, and citation-window length.
- Extremely sparse or zero-heavy panels may require separate zero-process checks.

## Links

- [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md)
- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [journal fixed-effect citation model](journal_fixed_effect_citation_model.md)
- [citation window selection](citation_window_selection.md)
- [expanding citation-window sweep](expanding_citation_window_sweep.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [reference set construction](reference_set_construction.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `overdispersed_citation_breadth_count_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: citation breadth negative binomial; overdispersed distinct-citation count model; distinct cited-source count regression; source-breadth count model
