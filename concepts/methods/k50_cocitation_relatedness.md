# K50 co-citation relatedness

## Summary

K50 co-citation relatedness is a normalized journal co-citation measure that subtracts an expected cosine-like value to emphasize higher-than-expected relationships involving small journals and reduce the dominance of large journals.

## Canonical Form

- Unit of analysis: journal pair, co-citation count, row sum, expected value, or relatedness edge.
- Typical representation: asymmetric K50 score, expected-cosine correction, or co-citation similarity matrix.
- Method target: create a scalable co-citation relatedness measure for science-map construction.
- Empirical signature: small-journal and small-large-journal relationships that exceed expectation are accentuated, while low-than-expected large-journal relationships are discounted.

## Uses in Science of Science

- Provides a co-citation alternative to inter-citation measures in [journal similarity mapping](journal_similarity_mapping.md).
- Supplies normalized edge weights for [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md).
- Helps construct co-citation science maps when the desired universe extends beyond the ISI citing-journal list.
- Feeds [science map measure selection grid](../validations/science_map_measure_selection_grid.md), where relatedness measures are compared on accuracy, scalability, and readability.

## Operationalization

- Compute journal co-citation frequencies from paper-level reference-list co-occurrences.
- For each journal pair, compute a cosine-like observed term and an expected value based on row sums and total co-citation mass.
- Subtract the expected value from the observed term and retain the larger directional value when the measure is asymmetric.
- Use the resulting K50 scores as a co-citation similarity matrix before layout and filtering.
- Compare against raw co-citation and Pearson co-citation alternatives.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) defines CC-K50 as a normalized co-citation frequency measure.
- The paper describes K50 as a cosine-type value minus an expected cosine value, with expected values varying by row sum and therefore producing asymmetry.
- Boyack et al. state that subtracting the expected component accentuates higher-than-expected relationships involving small journals and discounts lower-than-expected relationships between large journals.
- In their map-selection table, CC-K50 has better local accuracy, scalability, and visual balance than CC-Pearson, while raw co-citation performs poorly.

## Caveats

- K50 is tied to the co-citation universe and expected-value assumptions used in the paper.
- Asymmetry requires a documented rule for reducing directional pair scores before undirected layout.
- The measure does not solve source coverage, journal normalization, or multidisciplinary-journal problems by itself.

## Links

- [journal similarity mapping](journal_similarity_mapping.md)
- [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md)
- [science map measure selection grid](../validations/science_map_measure_selection_grid.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [top-N similarity edge filtering](top_n_similarity_edge_filtering.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [co-citation](../representations/co_citation.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `k50_cocitation_relatedness`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: CC-K50; K50 journal relatedness; expected-cosine co-citation; normalized co-citation K50
