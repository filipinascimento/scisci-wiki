# Hidden field-testing-history caveat

## Summary

Hidden field-testing-history caveat is the warning that a reported positive finding is hard to interpret when prior tests, failed analyses, and competing teams' attempts are unknown.

## Canonical Form

- Unit of analysis: finding, field, hypothesis family, unpublished test, prior analysis path, or investigator network.
- Typical representation: missing testing-history flag attached to a p-value, PPV estimate, or literature review.
- Validation target: whether apparent evidential strength survives unknown field-level multiplicity.
- Empirical signature: a single reported test appears significant, but the number of unreported or prior tests cannot be reconstructed.

## Uses in Science of Science

- Refines [field testing multiplicity](../mechanisms/field_testing_multiplicity.md) with an evidence-availability caveat.
- Connects [p-value diagnosticity under forking paths](../validations/p_value_diagnosticity_forking_paths.md) to field history, not just one analyst's choices.
- Motivates [exploratory field registry network](../datasets/exploratory_field_registry_network.md) and [preregistered test-denominator visibility](preregistered_test_denominator_visibility.md).
- Provides a caveat for [positive predictive value of findings](../measures/positive_predictive_value_findings.md) when denominators are hidden.

## Operationalization

- Search registries, preprints, conference abstracts, theses, protocols, trial databases, and prior reviews for related tests.
- Ask whether the author team, field, or platform has tested similar relationships before.
- Treat a reported p-value as less diagnostic when field-level testing history is opaque.
- Prefer syntheses that include registered nulls, failed replications, and unpublished results.
- Record whether the testing denominator is observed, partially observed, or hidden.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) argues that it is often unknown how many research teams have tested the same relationship or how many analyses occurred before a positive finding was reported.
- The paper links this hidden testing history to low PPV and the difficulty of interpreting isolated significant findings.
- This motif turns unobserved multiplicity into an explicit validation caveat.

## Caveats

- Hidden testing history is not proof that a specific finding is false.
- Registries reduce but do not eliminate hidden tests, especially for exploratory or observational fields.
- Overly broad definitions of "same relationship" can overstate multiplicity.

## Links

- [field testing multiplicity](../mechanisms/field_testing_multiplicity.md)
- [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md)
- [exploratory field registry network](../datasets/exploratory_field_registry_network.md)
- [preregistered test-denominator visibility](preregistered_test_denominator_visibility.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [alpha-correction degrees-of-freedom limit](alpha_correction_degrees_of_freedom_limit.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; SciSciNet: W2144981148; WoS: unknown]

## Metadata

- Concept ID: `hidden_field_testing_history_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: hidden testing denominator; unknown field multiplicity caveat; unobserved testing-history bias; field testing history opacity
