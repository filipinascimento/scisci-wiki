# Cited half-life temporal confound

## Summary

Field differences in citation half-life and delayed recognition can confound year-normalized citation comparisons.

## Canonical Form

- Unit of analysis: field, citation-age profile, cited half-life, publication cohort, or delayed-recognition case.
- Typical representation: temporal-profile audit attached to field-year citation baselines.
- Mechanism, measurement, or validation target: field-specific time dynamics in normalized citation impact.
- Empirical signature: normalized comparisons differ when fields have different citation half-lives or delayed-recognition tails.

## Uses in Science of Science

- Refines citation normalization validation by linking it to [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md) and [sleeping beauty](../mechanisms/sleeping_beauty.md).
- Useful as a reusable check when [longitudinal c0 growth control](longitudinal_c0_growth_control.md) is used in science-of-science inference.
- Creates cross-links to [field year citation baseline c0](../measures/field_year_citation_baseline_c0.md) so the motif is not interpreted in isolation.

## Operationalization

- Estimate cited half-life or citation-age profiles by field.
- Compare normalized citation curves across cohorts.
- Run delayed-recognition sensitivity checks for fields with long citation tails.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) motivates year comparisons by noting sleeping-beauty trajectories and field variation in cited half-life.
- This makes temporal profile differences a validation concern for field-year normalization.

## Caveats

- The paper motivates the confound rather than fully operationalizing a half-life metric.
- Citation half-life can vary by database coverage and document type.

## Links

- [Citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [Sleeping beauty](../mechanisms/sleeping_beauty.md)
- [Longitudinal c0 growth control](longitudinal_c0_growth_control.md)
- [Field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [Universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [Sleeping-beauty detection](../methods/sleeping_beauty_detection.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `cited_half_life_temporal_confound`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: citation half-life field confound; delayed-recognition normalization caveat; temporal citation-profile confound
