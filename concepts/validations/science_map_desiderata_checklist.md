# Science-map desiderata checklist

## Summary

Science-map desiderata checklist is a validation rubric for judging whether a science map or classification system is useful, interpretable, updateable, and suitable for overlays.

## Canonical Form

- Unit of analysis: science map, classification system, map update, overlay workflow, or map release.
- Typical representation: checklist, rubric, release review, or map-quality criteria table.
- Validation target: whether a map is fit for navigation, comparison, decision support, and repeated updates.
- Empirical signature: a map release is evaluated against explicit criteria instead of only shown as a visualization.

## Uses in Science of Science

- Gives [science map accuracy validation](science_map_accuracy_validation.md) a broader release-quality frame beyond local clustering accuracy.
- Guides [science map update workflows](../methods/science_map_update_workflows.md), [science map overlays](../representations/science_map_overlays.md), and [field classifications](../measures/field_classifications.md).
- Makes map limitations visible before using map positions for evaluation, funding, institutional comparison, or interdisciplinarity analysis.
- Helps compare maps built from WoS, Scopus, OpenAlex, Dimensions, or mixed data layers.

## Operationalization

- Evaluate data quality and coverage before map construction.
- Check dimensionality reduction, clustering, layout, labels, and graphic design for interpretability.
- Avoid inputs that create [journal-level map distortion caveat](journal_level_map_distortion_caveat.md) or unvalidated [citation-linkage similarity bias](citation_linkage_similarity_bias.md).
- Verify interactivity, zooming, filtering, and detail-on-demand when the map is deployed as a tool.
- Confirm that new records can be mapped through a documented [science-location lookup table](../methods/science_location_lookup_tables.md).
- Require updateability, versioning, and alignment or crosswalks to common classifications.
- Require [map-update structure preservation constraint](map_update_structure_preservation_constraint.md) when the map will be used for longitudinal comparison.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) lists eight desirable features for a science map classification system.
- The criteria include high-quality coverage, dimensionality reduction, readable clusters and labels, understandable graphic design, interactivity, a mapping process for overlays, easy updateability, and alignment with common classifications.
- Borner et al. use this checklist to compare the 10-year UCSD map against the earlier map and to describe improvements in coverage, understandability, updateability, and overlay usability.
- The paper also notes an unresolved alignment gap: connecting the map to other common classifications remains desirable but unfinished.
- The same desiderata motivate split-out caveats for journal-level input distortion and citation-only similarity bias.
- Additional UCSD-map residual motifs now split out [science-classification crosswalk alignment](science_classification_crosswalk_alignment.md), [science-map usability study validation](science_map_usability_study_validation.md), [science-map mental-model fit](science_map_mental_model_fit.md), [subdiscipline journal-count coefficient of variation](../measures/subdiscipline_journal_count_cv.md), [symmetric citation-similarity weighting caveat](symmetric_citation_similarity_weighting_caveat.md), [consensus-aligned circular map ordering](../representations/consensus_aligned_circular_map_ordering.md), [source-title assignment support threshold](../methods/source_title_assignment_support_threshold.md), [multidisciplinary journal relative-importance profile](../measures/multidisciplinary_journal_relative_importance_profile.md), [annualized overlay node sizing](../representations/annualized_overlay_node_sizing.md), and [general-purpose map assignment tradeoff](general_purpose_map_assignment_tradeoff.md).

## Caveats

- A checklist does not guarantee that a map is valid for every downstream task.
- Some criteria trade off against each other: single-label simplicity can reduce paper-level fidelity, while fine-grained accuracy can reduce readability.
- User-interface usability should be tested with real users, not inferred only from map design.

## Links

- [science map accuracy validation](science_map_accuracy_validation.md)
- [science-classification crosswalk alignment](science_classification_crosswalk_alignment.md)
- [science-map usability study validation](science_map_usability_study_validation.md)
- [science-map mental-model fit](science_map_mental_model_fit.md)
- [science-map coverage expansion audit](science_map_coverage_expansion_audit.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [map-update structure preservation constraint](map_update_structure_preservation_constraint.md)
- [subdiscipline journal-count coefficient of variation](../measures/subdiscipline_journal_count_cv.md)
- [journal-level map distortion caveat](journal_level_map_distortion_caveat.md)
- [citation-linkage similarity bias](citation_linkage_similarity_bias.md)
- [symmetric citation-similarity weighting caveat](symmetric_citation_similarity_weighting_caveat.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [source-title assignment support threshold](../methods/source_title_assignment_support_threshold.md)
- [multidisciplinary journal relative-importance profile](../measures/multidisciplinary_journal_relative_importance_profile.md)
- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [annualized overlay node sizing](../representations/annualized_overlay_node_sizing.md)
- [consensus-aligned circular map ordering](../representations/consensus_aligned_circular_map_ordering.md)
- [general-purpose map assignment tradeoff](general_purpose_map_assignment_tradeoff.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [field classifications](../measures/field_classifications.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `science_map_desiderata_checklist`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: science-map quality checklist; map desiderata; map release rubric; science-map validation criteria
