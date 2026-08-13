# Study power and false-positive risk

## Summary

Study power and false-positive risk capture how the probability of detecting a true relationship changes the credibility of statistically significant findings.

## Canonical Form

- Unit of analysis: study, tested relationship, field, study design, or evidence regime.
- Typical representation: statistical power `1 - beta`, type II error rate, sample-size regime, detectable effect-size threshold, or power scenario table.
- Measurement target: how often true relationships can be detected, and how this affects the mix of true and false positive findings.
- Empirical signature: low-powered fields produce lower positive predictive value even when the nominal type I error rate is fixed.

## Uses in Science of Science

- Supplies the power input to [positive predictive value of findings](positive_predictive_value_findings.md).
- Gives a design-level reliability motif for [replication and reproducibility](../validations/replication_reproducibility.md).
- Helps compare research regimes with large trials, small exploratory studies, high-throughput screens, and meta-analyses.
- Links small-sample incentives to [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md), because low power makes significant positive claims rarer and more selection-prone.

## Operationalization

- Estimate power for the effect sizes a study or field claims to detect.
- Compare PPV under plausible power values while holding type I error and pre-study odds fixed.
- Distinguish low power caused by small samples from low power caused by tiny true effects.
- Report whether a field's standard designs are confirmatory, exploratory, or underpowered for the claimed effect sizes.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) models positive predictive value as a function of power, type I error, and pre-study odds.
- The paper's first corollary states that smaller studies are less likely to yield true research findings because smaller samples reduce power.
- The second corollary links smaller true effect sizes to lower finding credibility, because power decreases when effects are hard to detect.
- Ioannidis' Table 4 contrasts adequately powered randomized trials with underpowered early-phase trials and exploratory studies, showing much lower modeled PPV in low-power regimes.

## Caveats

- Nominal power calculations can be optimistic when measurement error, multiple testing, or analytic flexibility are ignored.
- Very large studies can make trivial effects statistically significant, so high power is not the same as substantive importance.
- Power depends on the true effect size, which is usually unknown before the study.
- Power should be interpreted with [pre-study odds](pre_study_odds.md), [research bias parameter](research_bias_parameter.md), and field-specific incentives.

## Links

- [positive predictive value of findings](positive_predictive_value_findings.md)
- [pre-study odds](pre_study_odds.md)
- [research bias parameter](research_bias_parameter.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `study_power_false_positive_risk`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Ioannidis (2005) (2005)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: power-dependent PPV; low-power false-positive risk; underpowered study credibility; study power reliability
