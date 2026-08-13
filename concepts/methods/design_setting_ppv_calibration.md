# Design-setting PPV calibration

## Summary

Design-setting PPV calibration uses stylized combinations of power, pre-study odds, and bias to compare how credible significant findings are across research designs and scientific settings.

## Canonical Form

- Unit of analysis: research design, field, hypothesis family, study setting, or claimed significant finding.
- Typical representation: PPV scenario table with assumed power, true-to-null odds, bias parameter, and example design class.
- Method target: make the credibility implications of design choices concrete before or after evidence is produced.
- Empirical signature: confirmatory, well-powered designs have much higher modeled PPV than exploratory, low-prior, high-bias designs.

## Uses in Science of Science

- Operationalizes [positive predictive value of findings](../measures/positive_predictive_value_findings.md) as a design-comparison workflow.
- Connects [pre-study odds](../measures/pre_study_odds.md), [study power and false-positive risk](../measures/study_power_false_positive_risk.md), and [research bias parameter](../measures/research_bias_parameter.md) in a single table.
- Helps interpret when meta-analysis, early-phase trials, exploratory epidemiology, and high-throughput discovery should be trusted differently.
- Provides a compact teaching and policy tool for field-level validity audits.

## Operationalization

- Choose design classes or research settings to compare.
- Assign plausible values for power, true-to-null relationship ratio, and bias for each setting.
- Compute PPV under a common type-I error threshold or sensitivity grid.
- Report the assumptions explicitly rather than treating the scenario table as a measured truth.
- Use empirical replication, preregistration, and meta-research evidence to update scenario assumptions where possible.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) presents a scenario table comparing PPV across adequately powered randomized trials, confirmatory meta-analyses, small inconclusive meta-analyses, early-phase trials, exploratory epidemiology, and discovery-oriented massive testing.
- The table shows that adequately powered randomized trials with favorable pre-study odds can have high PPV, while exploratory massive testing can have extremely low PPV even with limited bias.
- Ioannidis uses the table to argue that most research designs and fields struggle to achieve a PPV above 50%.
- The same section warns that pooling low-power studies can remain weak when pre-study odds are poor.

## Caveats

- Scenario tables are assumption-driven and should not be mistaken for direct estimates of each field's truth rate.
- The values of pre-study odds and bias are often subjective or field-specific.
- A low-PPV design can still be useful for generating hypotheses if it is labeled and followed by stronger confirmation.

## Links

- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [pre-study odds](../measures/pre_study_odds.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)
- [research bias parameter](../measures/research_bias_parameter.md)
- [field testing multiplicity](../mechanisms/field_testing_multiplicity.md)
- [single-team significance overemphasis](../validations/single_team_significance_overemphasis.md)
- [large-scale concept testing](large_scale_concept_testing.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `design_setting_ppv_calibration`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: PPV scenario table; design-setting credibility calibration; research design PPV table; credibility scenario calibration
