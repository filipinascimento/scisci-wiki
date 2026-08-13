# Weighted KS citation-fit test

## Summary

Weighted KS citation-fit test is a goodness-of-fit validation that uses a weighted Kolmogorov-Smirnov distance to compare fitted citation trajectory models against empirical citation histories.

## Canonical Form

- Unit of analysis: citation trajectory, fitted curve, paper cohort, or model family.
- Typical representation: weighted KS statistic, model comparison table, or empirical-versus-fitted curve test.
- Validation target: whether a citation growth model tracks observed cumulative citations better than alternatives.
- Empirical signature: the focal model has smaller weighted deviations from empirical citation histories.

## Uses in Science of Science

- Validates [citation trajectory models](../methods/citation_trajectory_models.md).
- Complements [alternative citation curve benchmark](alternative_citation_curve_benchmark.md).
- Links citation-history fit to [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Supports downstream [long-term citation prediction](../methods/long_term_citation_prediction.md).

## Operationalization

- Fit the focal model and alternative growth curves to citation histories.
- Compute weighted deviations between empirical and fitted cumulative curves.
- Compare fit statistics across model families and citation-impact strata.
- Report the weighting scheme and observation window.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) benchmarks its citation model against Logistic, Bass, and Gompertz alternatives.
- The paper uses a weighted KS test to compare goodness of fit.
- The figure caption repeats the weighted KS comparison for the model benchmark.

## Caveats

- The KS weighting scheme can change which part of the trajectory dominates the test.
- Good in-sample fit does not guarantee forecast calibration.
- Sparse or delayed-recognition trajectories can violate model assumptions.

## Links

- [citation trajectory models](../methods/citation_trajectory_models.md)
- [alternative citation curve benchmark](alternative_citation_curve_benchmark.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation forecast quartile calibration](citation_forecast_quartile_calibration.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612; WoS: unknown]

## Metadata

- Concept ID: `weighted_ks_citation_fit_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: weighted Kolmogorov-Smirnov citation test; citation-curve goodness-of-fit test; weighted KS trajectory validation
