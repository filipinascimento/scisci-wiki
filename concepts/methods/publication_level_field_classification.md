# Publication-level field classification

## Summary

Publication-level field classification assigns individual papers to research areas rather than inheriting fields only from journals or venues.

## Canonical Form

- Unit of analysis: publication, research area, classification level, journal, or citation cluster.
- Typical representation: paper-to-area assignment table with hierarchical area identifiers.
- Method target: create finer field boundaries for normalization, mapping, and portfolio analysis.
- Empirical signature: multidisciplinary journals split across areas, while topically related papers from different journals can be grouped together.

## Uses in Science of Science

- Refines [field classifications](../measures/field_classifications.md) beyond journal-level subject categories.
- Provides paper-level inputs for [paper-field linkages](../representations/paper_field_linkages.md), [reference set construction](reference_set_construction.md), and [science maps](../representations/science_maps.md).
- Helps evaluate interdisciplinary, multidisciplinary, and emerging-topic papers that journal-level categories place poorly.
- Supports interpretable outputs through [research-area term labeling](research_area_term_labeling.md), temporal overlays through [average publication-year hot-area detection](../measures/average_publication_year_hot_area_detection.md), and validation through [single-journal publication-assignment audits](../validations/single_journal_publication_assignment_audit.md).
- Uses [publication-cluster subject-category overlap profile](../representations/publication_cluster_subject_category_overlap_profile.md) and [high-aggregation label ambiguity](../validations/high_aggregation_label_ambiguity.md) checks when broad areas need human-readable labels.
- Connects citation-based clustering to later open classification systems in OpenAlex, Dimensions, and SciSciNet.
- Requires explicit reporting of corpus scope, area-size thresholds, optimization behavior, and single-assignment caveats.

- A residual Waltman and van Eck pass adds [zero-degree publication handling](../validations/zero_degree_publication_handling.md), [component-size inclusion gate](../validations/component_size_inclusion_gate.md), [resolution-penalized cluster objective](resolution_penalized_cluster_objective.md), [nested research-area code path](../representations/nested_research_area_code_path.md), [large-scale classification compute profile](../validations/large_scale_classification_compute_profile.md), [publication-window left-censoring exclusion](../validations/publication_window_left_censoring_exclusion.md), [research-area label source escalation](research_area_label_source_escalation.md), [direct-citation area map projection](../representations/direct_citation_area_map_projection.md), [field-normalization reference-set substrate](../representations/field_normalization_reference_set_substrate.md), and [transparent classification artifact release](transparent_classification_artifact_release.md).
## Operationalization

- Build a publication relatedness network from citation, text, bibliographic-coupling, co-citation, or hybrid relations.
- Cluster publications into research areas at one or more levels of granularity.
- Set [minimum research-area size constraints](minimum_research_area_size_constraint.md) and report excluded publications.
- Tune levels, resolution parameters, and minimum sizes with [purpose-guided classification parameter tuning](purpose_guided_classification_parameter_tuning.md), then apply an auditable [undersized cluster reassignment rule](undersized_cluster_reassignment_rule.md) where needed.
- Assign each publication to a field or to a hierarchy of fields, preserving version and parameter settings.
- Label research areas, audit journal-level decompositions, and document coverage and accuracy gaps.
- Validate the classification against journal categories, expert labels, known specialties, and sensitivity of normalized indicators.
- Check [hierarchical assignment consistency constraint](../validations/hierarchical_assignment_consistency_constraint.md) after reassignment or relabeling.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) argues that journal-level classifications have limited detail and handle multidisciplinary journals poorly.
- Their method assigns each publication to a single research area at each level of a hierarchy, rather than assigning papers only through journal membership.
- Their application clusters 10.2 million Web of Science articles, letters, and reviews from 2001-2010, producing 20 level-1 areas, 672 level-2 areas, and 22,412 level-3 areas for the included publications.
- The corpus is now split out as the [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md).
- The JASIST case study shows why publication-level assignment matters: most JASIST papers fall into social/health sciences or mathematics/computer science, but some network-analysis papers are sensibly assigned outside those broad journal-level expectations.
- The same full text motivates split-out motifs for cluster term labeling, hot-area detection from average publication year, single-journal assignment audits, accuracy-gap validation, and hybrid relatedness extensions beyond direct citation.
- Later split-out motifs capture subject-category overlap profiles, broad-label ambiguity, core-periphery assignment audits, and journal-level derivation from paper clusters.
- It also motivates split-out motifs for [minimum research-area size constraints](minimum_research_area_size_constraint.md), [multilevel coarsening-refinement clustering](multilevel_coarsening_refinement_clustering.md), [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md), and the [nonoverlapping field-assignment caveat](../validations/nonoverlapping_field_assignment_caveat.md).
- A later Waltman and van Eck pass splits out purpose-guided parameter tuning, [research-area average normalized relatedness](../measures/research_area_average_normalized_relatedness.md), undersized-cluster reassignment, and hierarchical assignment consistency as reusable implementation and validation motifs.

## Caveats

- Single-area paper assignment is simple and non-overlapping, but it can underrepresent genuinely interdisciplinary work.
- Publication-level classifications depend on the relatedness graph and clustering parameters.
- Fine-grained classes can improve specificity while increasing sensitivity to sparse links and optimization choices.

## Links

- [field classifications](../measures/field_classifications.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md)
- [normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md)
- [minimum research-area size constraint](minimum_research_area_size_constraint.md)
- [purpose-guided classification parameter tuning](purpose_guided_classification_parameter_tuning.md)
- [research-area average normalized relatedness](../measures/research_area_average_normalized_relatedness.md)
- [undersized cluster reassignment rule](undersized_cluster_reassignment_rule.md)
- [hierarchical assignment consistency constraint](../validations/hierarchical_assignment_consistency_constraint.md)
- [multilevel coarsening-refinement clustering](multilevel_coarsening_refinement_clustering.md)
- [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md)
- [research-area term labeling](research_area_term_labeling.md)
- [high-aggregation label ambiguity](../validations/high_aggregation_label_ambiguity.md)
- [publication-cluster subject-category overlap profile](../representations/publication_cluster_subject_category_overlap_profile.md)
- [research-area core-periphery assignment audit](../validations/research_area_core_periphery_assignment_audit.md)
- [publication-to-journal classification derivation](publication_to_journal_classification_derivation.md)
- [average publication-year hot-area detection](../measures/average_publication_year_hot_area_detection.md)
- [single-journal publication-assignment audit](../validations/single_journal_publication_assignment_audit.md)
- [direct-citation classification accuracy gap](../validations/direct_citation_classification_accuracy_gap.md)
- [hybrid publication-relatedness extension](hybrid_publication_relatedness_extension.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [nonoverlapping field-assignment caveat](../validations/nonoverlapping_field_assignment_caveat.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [reference set construction](reference_set_construction.md)
- [science maps](../representations/science_maps.md)

- [zero-degree publication handling](../validations/zero_degree_publication_handling.md)
- [publication-window left-censoring exclusion](../validations/publication_window_left_censoring_exclusion.md)
- [transparent classification artifact release](transparent_classification_artifact_release.md)
## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `publication_level_field_classification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: publication-level classification; paper-level classification; article-level field classification; paper-level research areas
