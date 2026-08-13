# Research bias parameter

## Summary

Research bias parameter is a model term for the share of analyses or findings that would not be positive under an unbiased design but become reported as positive because of design, analysis, reporting, interest, or interpretive distortions.

## Canonical Form

- Unit of analysis: analysis path, study, field, claim, or research design.
- Typical representation: bias fraction `u`, bias scenario, selective-reporting probability, or distortion term in a PPV model.
- Measurement target: how much non-chance distortion converts otherwise negative findings into positive findings.
- Empirical signature: increasing bias lowers the probability that a reported positive finding is true, even with unchanged power and pre-study odds.

## Uses in Science of Science

- Provides a formal bridge between [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md) and [positive predictive value of findings](positive_predictive_value_findings.md).
- Turns broad concerns about incentives, conflicts, and analytic discretion into a parameter that can be varied in simulations.
- Links [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md) and [analytic flexibility](../validations/analytic_flexibility_false_positives.md) to field-level credibility.
- Supports [responsible metrics](responsible_metrics.md) by warning that visible positive claims can reflect bias intensity rather than truth.

## Operationalization

- Model `u` as the share of otherwise non-positive analyses that become reported as findings because of bias.
- Use empirical audits of outcome switching, undisclosed analyses, conflicts of interest, publication selection, or p-value distributions to bracket plausible bias levels.
- Run PPV sensitivity analyses across low, moderate, and high bias regimes.
- Separate bias from chance false positives and from reverse bias that suppresses true findings.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) defines bias as design, data, analysis, and presentation factors that tend to produce research findings when they should not be produced.
- Ioannidis denotes the bias parameter as `u`, the proportion of probed analyses that would not have been findings but end up presented and reported as such because of bias.
- The paper models PPV in the presence of bias and shows that PPV decreases as `u` increases.
- The same full text identifies selective or distorted reporting, conflicts of interest, prejudice, and flexible designs or outcomes as sources of bias.

## Caveats

- `u` is rarely directly observed and often has to be bounded indirectly.
- Bias is not synonymous with fraud; ordinary incentives and ambiguity can create biased reporting.
- Different bias sources can interact, so one scalar parameter is a simplification.
- Reverse bias can suppress true findings, but Ioannidis argues that selective positive bias is a central concern in modern published literatures.

## Links

- [positive predictive value of findings](positive_predictive_value_findings.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [reverse bias false-negative risk](../validations/reverse_bias_false_negative_risk.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [null-field bias estimation](../validations/null_field_bias_estimation.md)
- [responsible metrics](responsible_metrics.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `research_bias_parameter`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: bias parameter u; research finding bias fraction; selective-reporting bias parameter; PPV bias term
