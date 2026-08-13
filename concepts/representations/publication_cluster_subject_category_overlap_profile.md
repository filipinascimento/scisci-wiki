# Publication-cluster subject-category overlap profile

## Summary

Publication-cluster subject-category overlap profile represents how a publication-level research area overlaps with external subject categories, usually as fractional category shares.

## Canonical Form

- Unit of analysis: publication cluster, research area, Web of Science subject category, article, or fractional overlap cell.
- Typical representation: overlap table, bar chart, category-share profile, cluster-by-category matrix, or label-support profile.
- Representation target: interpret algorithmic publication clusters by comparing them with external classification systems.
- Empirical signature: each publication cluster has a subject-category distribution that can reveal clear fit, mixed content, or boundary mismatch.

## Uses in Science of Science

- Supports [publication-level field classification](../methods/publication_level_field_classification.md) interpretation.
- Adds evidence for [high-aggregation label ambiguity](../validations/high_aggregation_label_ambiguity.md) when broad clusters overlap multiple categories.
- Links citation-based clusters to [field classifications](../measures/field_classifications.md) and [WoS subject-category fractionalization](../validations/wos_subject_category_fractionalization.md).
- Provides a classification analogue to [topic-class profile matrix](topic_class_profile_matrix.md) and [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md).

## Operationalization

- For each publication in an algorithmic research area, retrieve journal or paper subject categories.
- Fractionally count publications assigned to multiple categories.
- Aggregate category shares for each research area or hierarchy level.
- Use the dominant and secondary categories to interpret labels, boundary fit, and mixed clusters.
- Report whether the overlap profile is used for interpretation, validation, or manual relabeling.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) compares algorithmic research areas with Web of Science subject categories.
- The paper uses subject-category distributions to interpret and label high-level areas in its publication-level classification.
- Waltman and van Eck show that some broad algorithmic areas only partially align with familiar discipline labels, making overlap profiles useful but not definitive.
- The representation helps reveal when a cluster is coherent, multidisciplinary, or hard to name.

## Caveats

- Subject categories are journal-level or database-specific and can reintroduce the limitations publication-level classification was designed to avoid.
- High overlap with a category does not prove cluster accuracy.
- Multidisciplinary journals and multi-category assignments can blur the profile.
- Profiles should be paired with term labels, local maps, and expert review.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [high-aggregation label ambiguity](../validations/high_aggregation_label_ambiguity.md)
- [field classifications](../measures/field_classifications.md)
- [WoS subject-category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [topic-class profile matrix](topic_class_profile_matrix.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [research-area term labeling](../methods/research_area_term_labeling.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `publication_cluster_subject_category_overlap_profile`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: subject-category overlap profile; cluster-category overlap table; publication-cluster category shares; research-area category profile
