# Maximum-score tail parameter estimator

## Summary

Maximum-score tail parameter estimator uses the largest observed success count as a rough calibration check for heavy-tail parameters in bibliometric distributions.

## Canonical Form

- Unit of analysis: top-cited paper, most productive author, maximum success count, tail exponent, or distribution parameter.
- Typical representation: compare expected maximum score under a fitted distribution with the observed extreme value.
- Method target: use the tail's most visible observation as a plausibility check on cumulative-advantage or power-law fits.
- Empirical signature: fitted parameters imply a maximum score close to the highest observed author, paper, journal, or other entity.

## Uses in Science of Science

- Adds an order-statistic check to [citation distribution scaling](../measures/citation_distribution_scaling.md).
- Connects [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md) to empirical extremes.
- Flags [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md) when extreme-count calibration rests on one or a few observations.

## Operationalization

- Fit a candidate tail or cumulative-advantage distribution.
- Identify the maximum observed success count in the same sample frame.
- Compare the fitted distribution's expected or implied maximum to the observed maximum.
- Treat large mismatch as evidence that parameters, truncation, or sample boundaries need review.

## Evidence and Validations

- Verified full-text evidence from Price (1976) estimates tail parameters using the highest-scoring author in publication data.
- Price also uses the highest-cited Lowry paper as an extreme-value check in citation data.
- These examples show maximum-score calibration as a simple empirical anchor for bibliometric heavy-tail models.

## Caveats

- A single maximum is noisy and highly sensitive to sample boundaries.
- Extreme observations can be database artifacts, review papers, or field-specific anomalies.
- Maximum-score checks should complement, not replace, full distribution fitting.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)
- [cumulative advantage distribution](cumulative_advantage_distribution.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `maximum_score_tail_parameter_estimator`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: maximum-score tail estimator; extreme-count parameter check; highest-cited tail calibration; top-score distribution check
