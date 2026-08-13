# Evaluation-metric mechanism audit

## Summary

Evaluation-metric mechanism audit is a validation practice that interprets performance indicators by auditing the generative mechanisms that produce their observed distributions, correlations, and manipulation vulnerabilities.

## Canonical Form

- Unit of analysis: metric, indicator distribution, evaluation system, platform trace, or policy use.
- Typical representation: mechanism audit, indicator threat model, or distributional validation checklist.
- Validation target: understand what an indicator does and does not capture before using it in assessment.
- Empirical signature: metric interpretation changes after modeling its production mechanism, platform dependencies, and incentives.

## Uses in Science of Science

- Extends [responsible metrics](../measures/responsible_metrics.md).
- Generalizes [alternative-indicator mechanism modeling](../methods/alternative_indicator_mechanism_modeling.md) beyond non-citation indicators.
- Helps prevent [indicator false precision](indicator_false_precision.md).
- Links metric pluralism to practical validation rather than metric proliferation alone.

## Operationalization

- Model the process that generates the indicator, including exposure, platform behavior, incentives, and manipulation opportunities.
- Compare indicator distributions across fields, time, and data providers.
- Test correlations with established metrics while preserving construct differences.
- Document failure modes before using an indicator in funding, hiring, or institutional evaluation.

## Evidence and Validations

- Verified full-text evidence from Fortunato et al. (2018) says eliminating inconsistencies in quantitative evaluation requires understanding the generating mechanisms behind common statistics.
- The review warns that metric profusion requires understanding what each metric captures and misses.
- It argues that SciSci can model mechanisms governing performance indicators and detect manipulation in alternative indicators such as downloads.

## Caveats

- Mechanism audits can still be incomplete when data providers hide platform or cleaning details.
- A well-understood indicator is not automatically appropriate for high-stakes evaluation.
- Audits should be repeated as platforms and incentives change.

## Links

- [responsible metrics](../measures/responsible_metrics.md)
- [alternative-indicator mechanism modeling](../methods/alternative_indicator_mechanism_modeling.md)
- [indicator false precision](indicator_false_precision.md)
- [metric pluralism and productive specialization](../mechanisms/metric_pluralism_productive_specialization.md)
- [citation metric gaming](citation_metric_gaming.md)

## References

- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; SciSciNet: W2793071066; WoS: unknown]

## Metadata

- Concept ID: `evaluation_metric_mechanism_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Fortunato et al. (2018) (2018)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.aao0185`
- OpenAlex ID: `W2793071066`
- Dimensions ID: `pub.1101303008`
- SciSciNet ID: `W2793071066`
- Aliases: metric mechanism audit; indicator generative-mechanism validation; evaluation indicator threat model
