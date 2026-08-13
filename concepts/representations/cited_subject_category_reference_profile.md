# Cited subject-category reference profile

## Summary

A cited subject-category reference profile represents a paper by the distribution of Web of Science subject categories assigned to the works or journals it cites.

## Canonical Form

- Unit of analysis: focal paper, cited reference, cited journal, subject category, or reference-list category count.
- Typical representation: vector of cited subject-category counts or shares for each focal paper.
- Representation target: disciplinary composition of the knowledge sources invoked by a paper.
- Empirical signature: papers differ in how many categories they cite, how evenly references are spread, and how distant the cited categories are.

## Uses in Science of Science

- Provides the input representation for [category variety](../measures/category_variety.md), [distributional balance](../measures/distributional_balance.md), and [category disparity](../measures/category_disparity.md).
- Makes [interdisciplinarity](../mechanisms/interdisciplinarity.md) measurable from cited knowledge sources rather than only from journal labels.
- Links reference-list data to [WoS subject-category co-citation matrices](wos_subject_category_cocitation_matrix.md) and science-map distances.
- Supports paper-level models that compare interdisciplinary papers within the same journal.

## Operationalization

- Parse each focal article's reference list and map cited journals or cited records to Web of Science subject categories.
- Count or fractionally count category assignments across the focal paper's references.
- Convert counts into shares for evenness and composite diversity measures.
- Retain the category profile alongside the focal paper's own subject categories so same-field and other-field references can be distinguished.
- Version the subject-category mapping and document how references from journals with multiple categories are handled.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) constructs interdisciplinarity measures from the disciplinary profile of each article's references.
- Wang et al. use Web of Science subject categories referenced by each article and compute measures including referenced category count, other-discipline reference ratio, 1-Gini, Simpson, Shannon, average dissimilarity, and Rao-Stirling diversity.
- The paper treats the profile as evidence of drawing and integrating knowledge pieces from multiple disciplines.
- Porter and Rafols (2009) provide an adjacent map-based lineage by constructing subject-category co-citation similarities from cited subject-category instances.

## Caveats

- Reference profiles observe cited sources, not all knowledge used in the research process.
- Journal-level category assignment can overstate interdisciplinarity when journals have multiple subject categories.
- The profile depends on reference parsing, cited-journal normalization, and the category taxonomy version.

## Links

- [WoS subject-category co-citation matrix](wos_subject_category_cocitation_matrix.md)
- [Web of Science](../datasets/web_of_science.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [other-discipline reference ratio](../measures/other_discipline_reference_ratio.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `cited_subject_category_reference_profile`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: cited SC profile; referenced subject-category distribution; reference discipline profile; cited field profile
