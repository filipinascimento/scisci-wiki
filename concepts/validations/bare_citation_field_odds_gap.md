# Bare-citation field odds gap

## Summary

Raw citation thresholds have different odds across fields before any normalization is applied.

## Canonical Form

- Unit of analysis: field, paper cohort, raw citation threshold, probability, odds ratio, or citation-density contrast.
- Typical representation: field-specific probability table for exceeding a fixed raw citation threshold.
- Mechanism, measurement, or validation target: diagnostic for raw-count unfairness across fields.
- Empirical signature: a paper with the same raw citation count occupies very different field-specific probability positions.

## Uses in Science of Science

- Refines field-normalization validation by linking it to [field normalized citation impact](../measures/field_normalized_citation_impact.md) and [relative citation performance cf](../measures/relative_citation_performance_cf.md).
- Useful as a reusable check when [cross field citation density sources](../mechanisms/cross_field_citation_density_sources.md) is used in science-of-science inference.
- Creates cross-links to [citation impact indicators](../measures/citation_impact_indicators.md) so the motif is not interpreted in isolation.

## Operationalization

- Choose a fixed raw citation threshold and publication cohort.
- Estimate the field-specific probability of reaching or exceeding that threshold.
- Report odds or risk ratios across fields before applying normalized indicators.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) uses a 100-citation contrast between Developmental Biology and Aerospace Engineering to show raw citation counts are field-biased.
- The example demonstrates why field normalization is necessary before cross-field evaluation.

## Caveats

- This is a diagnostic for raw-count unfairness, not a replacement for normalized indicators.
- The magnitude depends on field definitions, citation window, and document type.

## Links

- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [Cross-field citation-density sources](../mechanisms/cross_field_citation_density_sources.md)
- [Citation impact indicators](../measures/citation_impact_indicators.md)
- [Impact-factor field-bias demonstrator](impact_factor_field_bias_demonstrator.md)
- [Average-normalization skewness check](average_normalization_skewness_check.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `bare_citation_field_odds_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: raw citation odds gap; cross-field raw citation probability gap; unnormalized citation-rate disparity
