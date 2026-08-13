# Global citation-opportunity parameters

## Summary

Global citation-opportunity parameters encode corpus-wide citation conditions, such as average reference-list length, publication growth, and normalization constants, separately from paper-specific fitness, immediacy, and longevity.

## Canonical Form

- Unit of analysis: corpus, field, journal system, citation model, or paper cohort.
- Typical representation: global parameter vector, reference-rate parameter, growth-rate parameter, or normalization constant.
- Representation target: separate opportunity to receive citations from paper-specific attractiveness.
- Empirical signature: paper-level citation probability is modeled against shared global citation supply conditions.

## Uses in Science of Science

- Extends [citation volume growth normalization](../methods/citation_volume_growth_normalization.md).
- Links global opportunity to [field publication growth rate delta](../measures/field_publication_growth_rate_delta.md).
- Complements [citation-propensity factorization](citation_propensity_factorization.md).
- Provides background parameters for [paper fitness](../measures/paper_fitness.md) and related citation-trajectory models.

## Operationalization

- Estimate corpus-level average reference-list length.
- Estimate publication growth or field expansion.
- Include normalization constants that keep citation probabilities well-defined.
- Fit paper-level parameters only after the shared opportunity structure is specified.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) introduces global model parameters for average references, publication growth, and normalization.
- The paper distinguishes these global parameters from paper-specific relative fitness, immediacy, and longevity.
- This separation supports comparisons of citation histories across journals and fields.

## Caveats

- Global parameters may hide field-specific heterogeneity.
- Publication growth and reference-list length can change over time.
- The parameterization depends on the citation database and coverage window.

## Links

- [citation volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [field publication growth rate delta](../measures/field_publication_growth_rate_delta.md)
- [citation-propensity factorization](citation_propensity_factorization.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation-parameter vector representation](citation_parameter_vector_representation.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612; WoS: unknown]

## Metadata

- Concept ID: `global_citation_opportunity_parameters`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation opportunity parameters; global citation model parameters; reference-growth normalization parameters
