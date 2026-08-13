# Positive predictive value of findings

## Summary

Positive predictive value of findings estimates the probability that a claimed statistically significant research finding reflects a true relationship.

## Canonical Form

- Unit of analysis: claimed finding, study, field, hypothesis family, or literature.
- Typical representation: probability model linking power, type I error, pre-study odds, number of tested relationships, and bias.
- Mechanism or measurement target: credibility of positive claims under low power, weak priors, flexible analysis, and selective reporting.
- Empirical signature: a formally significant result can still have low post-study probability of being true when true relationships are rare or bias is high.

## Uses in Science of Science

- Provides a quantitative bridge between [replication and reproducibility](../validations/replication_reproducibility.md) and [analytic flexibility](../validations/analytic_flexibility_false_positives.md).
- Helps compare fields with different prior probabilities, sample sizes, incentives, and testing intensity.
- Converts metascience claims about false positives into a measurable risk model.
- Supports policy arguments for larger studies, lower-bias designs, preregistration, replication, and evidence synthesis.
- Splits field-level credibility boundaries into [field-relationship universe denominator](../representations/field_relationship_universe_denominator.md), [small-effect false-positive vulnerability](../validations/small_effect_false_positive_vulnerability.md), [prestige refutation suppression](../mechanisms/prestige_refutation_suppression.md), and [hidden field-testing-history caveat](../validations/hidden_field_testing_history_caveat.md).

## Operationalization

- Estimate or assume statistical power, type I error, pre-study odds that a tested relationship is true, and bias.
- Compute positive predictive value for a single claimed finding or for a field-level testing regime.
- Compare PPV under scenarios such as exploratory discovery, confirmatory trials, small underpowered studies, and meta-analyses.
- Use [design-setting PPV calibration](../methods/design_setting_ppv_calibration.md) when comparing credibility across common design classes.
- Use PPV as a model diagnostic rather than as a precise paper-level truth label unless inputs are well estimated.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) defines positive predictive value as the post-study probability that a claimed significant finding is true.
- Ioannidis models PPV as a function of statistical power, type I error, and the ratio of true to non-true relationships being probed.
- The same full text extends the model to account for multiple independent studies and bias, showing that PPV decreases when power is low, pre-study odds are weak, testing is massive, or bias is high.
- Ioannidis' examples range from adequately powered randomized trials to discovery-oriented research with massive testing, making PPV a reusable motif for field-level validity audits.
- Lower-level motifs from the same verified full text split the PPV model into [pre-study odds](pre_study_odds.md), [study power and false-positive risk](study_power_false_positive_risk.md), [research bias parameter](research_bias_parameter.md), [field testing multiplicity](../mechanisms/field_testing_multiplicity.md), [hot-field Proteus phenomenon](../mechanisms/hot_field_proteus_phenomenon.md), [null-field bias estimation](../validations/null_field_bias_estimation.md), [design-setting PPV calibration](../methods/design_setting_ppv_calibration.md), and [single-team significance overemphasis](../validations/single_team_significance_overemphasis.md).

## Caveats

- PPV inputs are often hard to estimate empirically, especially pre-study odds and bias.
- PPV is a model for research regimes, not a direct detector of which individual significant result is false.
- Low PPV can arise from exploratory search even without misconduct.

## Links

- [replication and reproducibility](../validations/replication_reproducibility.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [pre-study odds](pre_study_odds.md)
- [study power and false-positive risk](study_power_false_positive_risk.md)
- [research bias parameter](research_bias_parameter.md)
- [design-setting PPV calibration](../methods/design_setting_ppv_calibration.md)
- [large-scale concept testing](../methods/large_scale_concept_testing.md)
- [field testing multiplicity](../mechanisms/field_testing_multiplicity.md)
- [hot-field Proteus phenomenon](../mechanisms/hot_field_proteus_phenomenon.md)
- [null-field bias estimation](../validations/null_field_bias_estimation.md)
- [single-team significance overemphasis](../validations/single_team_significance_overemphasis.md)
- [negative findings evidence value](../mechanisms/negative_findings_evidence_value.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [responsible metrics](responsible_metrics.md)
- [field-relationship universe denominator](../representations/field_relationship_universe_denominator.md)
- [small-effect false-positive vulnerability](../validations/small_effect_false_positive_vulnerability.md)
- [prestige refutation suppression](../mechanisms/prestige_refutation_suppression.md)
- [hidden field-testing-history caveat](../validations/hidden_field_testing_history_caveat.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `positive_predictive_value_findings`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Aliases: PPV of research findings; false positive report probability; post-study probability; finding credibility model
