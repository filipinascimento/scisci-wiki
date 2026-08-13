# Field-relationship universe denominator

## Summary

Field-relationship universe denominator represents a scientific field as the full set of true and non-true relationships that researchers could test, making credibility estimates denominator-aware.

## Canonical Form

- Unit of analysis: field, hypothesis family, relationship universe, true relationship, non-true relationship, or tested subset.
- Typical representation: denominator table or conceptual population of possible relationships behind pre-study odds.
- Measurement target: field-level credibility depends on how many probed relationships are actually true.
- Empirical signature: positive predictive value changes when the assumed ratio of true to non-true relationships changes.

## Uses in Science of Science

- Extends [pre-study odds](../measures/pre_study_odds.md) from a scalar into a field-level representation.
- Provides the denominator behind [positive predictive value of findings](../measures/positive_predictive_value_findings.md).
- Links to [field testing multiplicity](../mechanisms/field_testing_multiplicity.md), where many teams or tests sample from the same relationship universe.
- Motivates data infrastructure such as [exploratory field registry network](../datasets/exploratory_field_registry_network.md) and [large-scale concept testing](../methods/large_scale_concept_testing.md).

## Operationalization

- Define a bounded set of candidate relationships in a field or research program.
- Estimate how many are expected to be true, false, already tested, or untested.
- Track how published positive findings sample from this denominator.
- Use the denominator to compute pre-study odds and scenario PPV.
- Update the denominator as new theory, registries, or systematic maps reveal hidden testing.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) models the ratio of true to non-true relationships being probed in a field.
- The paper shows that PPV depends strongly on this ratio and can be very low when many tested relationships are unlikely to be true.
- It also notes that single reported findings are hard to interpret without knowing the broader field history of testing.

## Caveats

- The full universe of possible relationships is rarely observable.
- Denominators are field- and theory-dependent and can shift over time.
- A field registry can improve denominator visibility but cannot fully enumerate unimagined hypotheses.

## Links

- [pre-study odds](../measures/pre_study_odds.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [field testing multiplicity](../mechanisms/field_testing_multiplicity.md)
- [exploratory field registry network](../datasets/exploratory_field_registry_network.md)
- [large-scale concept testing](../methods/large_scale_concept_testing.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; SciSciNet: W2144981148; WoS: unknown]

## Metadata

- Concept ID: `field_relationship_universe_denominator`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: relationship universe denominator; field hypothesis denominator; true-false relationship universe; PPV denominator representation
