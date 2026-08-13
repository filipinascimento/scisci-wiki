# Citation-propensity factorization

## Summary

Citation-propensity factorization represents a paper's citation rate as a product of intrinsic fitness, cumulative attention from prior citations, and aging or obsolescence.

## Canonical Form

- Unit of analysis: paper, citation event, citation trajectory, fitness term, aging term, or preferential-attachment term.
- Typical representation: citation propensity factorized into paper-specific and temporal components.
- Representation target: decompose observed citation dynamics into interpretable mechanisms.
- Empirical signature: a paper's future citation rate depends on fitted impact, prior citations, and time since publication.

## Uses in Science of Science

- Composes [paper fitness](../measures/paper_fitness.md), [preferential attachment](../mechanisms/preferential_attachment.md), and [lognormal citation survival function](../methods/lognormal_citation_survival_function.md).
- Provides a representation layer for [citation trajectory models](../methods/citation_trajectory_models.md).
- Links [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md) to cumulative-attention dynamics.
- Helps explain why early citation history alone is not a complete model.

## Operationalization

- Estimate a paper-specific fitness parameter.
- Include a preferential-attachment or cumulative-citation term.
- Include an aging or obsolescence function.
- Fit the model to observed citation histories and compare predicted and observed trajectories.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) models citation dynamics through fitness, preferential attachment, and aging.
- The paper uses this factorization to explain long-term citation trajectories.
- It supports prediction of ultimate impact from a compact set of mechanistic components.

## Caveats

- Factorization simplifies social, institutional, and topical mechanisms.
- Parameter estimates can depend on field, citation window, and data coverage.
- Exogenous events can disrupt a fitted propensity trajectory.

## Links

- [paper fitness](../measures/paper_fitness.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [lognormal citation survival function](../methods/lognormal_citation_survival_function.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612]

## Metadata

- Concept ID: `citation_propensity_factorization`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation rate factorization; citation propensity decomposition; fitness-attachment-aging factorization; mechanistic citation propensity
