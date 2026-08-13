# Average subject-category dissimilarity

## Summary

Average subject-category dissimilarity measures the average cognitive distance among the subject categories represented in a paper's references or another scholarly set.

## Canonical Form

- Unit of analysis: paper reference list, subject-category set, field portfolio, or science-map overlay.
- Typical representation: unweighted average of pairwise distances `d_ij` among represented categories.
- Measurement target: disparity among invoked knowledge sources, independent of category shares except for category presence.
- Empirical signature: a set receives a high score when its represented categories are mutually distant in a co-citation, citation, text, or map-distance space.

## Uses in Science of Science

- Provides a direct [category disparity](category_disparity.md) indicator for interdisciplinarity studies.
- Complements share-weighted [Rao-Stirling diversity](rao_stirling_diversity.md), which combines disparity with category shares.
- Supplies a paper-level input for [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md).
- Helps separate distant recombination from simply having many or balanced categories.

## Operationalization

- Assign references or items to subject categories.
- Build or select a subject-category similarity matrix.
- Convert similarity to distance, commonly as `d_ij = 1 - s_ij`.
- Average pairwise distances over represented category pairs.
- Report how multi-category references and categories with sparse similarity data are handled.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) defines average dissimilarity between referenced subject categories as a paper-level interdisciplinarity measure.
- Wang et al. compute dissimilarity as one minus cosine similarity between subject categories based on their co-citation matrix.
- Their factor analysis shows that average dissimilarity loads strongly on the factor interpreted as disparity.
- Their impact models find that long-term citations increase with disparity at a decreasing rate, while high-disparity papers receive lower short-term citation attention.

## Caveats

- Average dissimilarity ignores how many references fall in each category; a lightly represented distant category can affect the score.
- The measure depends on the similarity matrix snapshot and category granularity.
- It is undefined or uninformative when fewer than two subject categories are represented.

## Links

- [category disparity](category_disparity.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [Simpson diversity index](simpson_diversity_index.md)
- [Shannon entropy diversity](shannon_entropy_diversity.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `average_subject_category_dissimilarity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: average SC dissimilarity; subject-category distance average; unweighted category disparity; average disciplinary dissimilarity
