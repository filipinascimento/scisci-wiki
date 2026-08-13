# Minimum research-area size constraint

## Summary

Minimum research-area size constraint is the rule that each cluster or research area in a field classification must contain at least a specified number of publications at each hierarchy level.

## Canonical Form

- Unit of analysis: research area, hierarchy level, publication, connected component, clustering parameter, or excluded publication.
- Typical representation: level-specific minimum-size parameters such as `n_min(level)`.
- Method target: prevent classification systems from producing tiny, unstable, or uninterpretable research areas.
- Empirical signature: undersized clusters are merged, reassigned, or excluded, and disconnected components below the lowest-level threshold are omitted.

## Uses in Science of Science

- Makes [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md) more interpretable by pairing granularity with a minimum support rule.
- Provides a methodological bridge between clustering choices and [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md).
- Helps build field baselines for [reference set construction](reference_set_construction.md) without very small denominators.
- Forces classification reports to state the smallest field unit that will be treated as meaningful.

## Operationalization

- Choose the number of hierarchy levels and a minimum publication count for every level.
- During clustering, reassign or merge clusters below the minimum size when possible.
- For the lowest classification level, require publications to belong to a connected component at least as large as the minimum size.
- Report how the thresholds affect included publications, excluded publications, cluster counts, and field-size distributions.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) defines a minimum number of publications per research area as one of two key parameters at each classification level.
- Their application uses minimum-size thresholds of 120,000 publications at level 1, 5,000 at level 2, and 50 at level 3.
- Because the lowest-level minimum is 50, a publication must be connected directly or indirectly to at least 49 other publications to be included in the classification.
- The same rule explains part of the 0.8 million-publication exclusion audit in the [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md).

## Caveats

- Larger thresholds improve stability but can erase small or emerging research fronts.
- Thresholds are design choices and should be chosen for the intended use of the classification.
- Excluding small components can disproportionately affect low-citation-density fields, older records, letters, or records outside the citation window.

## Links

- [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md)
- [publication-level field classification](publication_level_field_classification.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [field classifications](../measures/field_classifications.md)
- [reference set construction](reference_set_construction.md)
- [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `minimum_research_area_size_constraint`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: minimum area size; n-min field threshold; minimum publication threshold; field-cluster support constraint
