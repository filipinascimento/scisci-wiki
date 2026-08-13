# CAD field-invariance constraint

## Summary

CAD field-invariance constraint is Price's claim that cumulative-advantage distributions have limited room for arbitrary field-specific constants beyond population size and mean successes.

## Canonical Form

- Unit of analysis: field, population size, mean success count, cumulative-advantage distribution, or fitted parameter.
- Typical representation: model constraint that field differences should be absorbed mainly by scale and average success.
- Validation target: check whether a cumulative-advantage model is overfit with field-specific free parameters.
- Empirical signature: field-specific distributions align after accounting for population size and mean count.

## Uses in Science of Science

- Adds a model-validity constraint to [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md).
- Complements [field-normalized citation impact](../measures/field_normalized_citation_impact.md), but focuses on generative distribution invariance rather than normalization.
- Helps [domain-specific SciSci studies](../methods/domain_specific_scisci_studies.md) decide when local constants are necessary.

## Operationalization

- Fit cumulative-advantage distributions separately by field.
- Normalize or parameterize by population size and mean success.
- Test whether residual field-specific parameters are needed.
- Treat extra constants as substantive field mechanisms only after ruling out scale and mean differences.

## Evidence and Validations

- Verified full-text evidence from Price (1976) argues that the cumulative-advantage distribution leaves little room for field-specific constants.
- Price emphasizes dependence on population size and average successes.
- This provides a field-invariance constraint for applying CAD across bibliometric domains.

## Caveats

- Modern fields differ in citation practices, team sizes, databases, and document types.
- Field invariance is an empirical claim to test, not an assumption to impose blindly.
- Normalization can hide real field-specific mechanisms if used too aggressively.

## Links

- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [domain-specific SciSci studies](../methods/domain_specific_scisci_studies.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [growth-attachment null models](growth_attachment_null_models.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `cad_field_invariance_constraint`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: cumulative-advantage field invariance; CAD scale constraint; field-constant restriction; population-size success constraint
