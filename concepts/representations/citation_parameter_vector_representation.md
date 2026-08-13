# Citation-parameter vector representation

## Summary

Citation-parameter vector representation encodes a paper's citation history with fitted impact, immediacy, and longevity parameters.

## Canonical Form

- Unit of analysis: paper, citation trajectory, fitted parameter, or long-term impact forecast.
- Typical representation: vector such as `(lambda, mu, sigma)` for fitness, immediacy, and longevity.
- Representation target: summarize a citation history with interpretable parameters.
- Empirical signature: different citation trajectories can be compared through their parameter vectors.

## Uses in Science of Science

- Bundles [paper fitness](../measures/paper_fitness.md), [citation immediacy parameter](../measures/citation_immediacy_parameter.md), and [citation longevity parameter](../measures/citation_longevity_parameter.md).
- Supports [long-term citation prediction](../methods/long_term_citation_prediction.md).
- Provides a compact input for [citation trajectory models](../methods/citation_trajectory_models.md).
- Helps classify trajectory shapes without relying only on raw citation counts.

## Operationalization

- Fit a citation-history model to each paper.
- Estimate the paper's fitness, immediacy, and longevity parameters.
- Store the parameter vector alongside paper metadata.
- Compare papers or cohorts in parameter space.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) fits citation histories with parameters for fitness, immediacy, and longevity.
- The paper uses these parameters to predict ultimate citation impact.
- This representation converts a time series into a reusable feature vector.

## Caveats

- Short or sparse citation histories can produce unstable parameter estimates.
- Parameter vectors omit content, field, and institutional context unless joined to other data.
- Similar parameter vectors can arise from different causal pathways.

## Links

- [paper fitness](../measures/paper_fitness.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612]

## Metadata

- Concept ID: `citation_parameter_vector_representation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation parameter vector; lambda mu sigma citation representation; impact-immediacy-longevity vector; citation trajectory feature vector
