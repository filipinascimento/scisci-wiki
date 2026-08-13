# Null-field bias estimation

## Summary

Null-field bias estimation treats a research area with no true relationships as a diagnostic setting where observed positive findings and effect sizes estimate the field's net bias.

## Canonical Form

- Unit of analysis: field, claim set, effect-size distribution, literature, topic, or hypothesis family.
- Typical representation: observed effect-size distribution around a null expectation, excess-significance profile, or bias-dominated claim set.
- Validation target: whether visible findings measure real effects or mostly the bias process that generated the literature.
- Empirical signature: many claimed effects appear in a domain where later evidence or theory suggests the true effects are absent or negligible.

## Uses in Science of Science

- Provides a field-level validation motif for [positive predictive value of findings](../measures/positive_predictive_value_findings.md).
- Links [research bias parameter](../measures/research_bias_parameter.md) to observable literature-level effect-size patterns.
- Supports [responsible metrics](../measures/responsible_metrics.md), because citation and publication impact can amplify fields whose claimed effects mostly index bias.
- Gives a suggested experiment: use well-characterized null or near-null fields to estimate plausible bias ranges for neighboring fields.

## Operationalization

- Identify a field or claim family where theory, later large-scale evidence, or strong negative evidence suggests no meaningful true relationships.
- Compare observed effect sizes with a null distribution expected from chance alone.
- Estimate how much selective reporting, analytic flexibility, conflicts, or publication selection would be needed to generate the observed literature.
- Use the resulting bias range as a cautionary prior for related fields with similar designs or incentives.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) discusses a hypothetical null field where no true findings exist.
- The paper argues that in such a field, deviations of observed findings from chance expectations would measure the prevailing bias.
- Ioannidis uses a dietary-pattern and tumor-risk example to show how claimed relative risks could be interpreted as bias rather than true effects if no causal relationships exist.
- The paper states that in low-PPV fields, large and highly significant effects may be more likely to signal large bias than important discoveries.

## Caveats

- Establishing that a field is truly null is difficult and often controversial.
- Bias estimation can be confounded by heterogeneous measurement, genuine small effects, or changing technologies.
- Researchers in a field may resist null-field framing, so evidence standards should be explicit and transparent.
- The method is most useful as a sensitivity and calibration device, not as a universal declaration that a field has no truth.

## Links

- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [research bias parameter](../measures/research_bias_parameter.md)
- [pre-study odds](../measures/pre_study_odds.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [replication and reproducibility](replication_reproducibility.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `null_field_bias_estimation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: null-field bias measure; bias-dominated literature; claimed effect as bias estimate; field-level net bias
