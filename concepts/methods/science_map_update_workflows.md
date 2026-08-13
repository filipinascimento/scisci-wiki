# Science map update workflows

## Summary

Science map update workflows maintain a science map or classification system as journals, fields, databases, and publication volumes change, while preserving enough continuity for comparisons over time.

## Canonical Form

- Unit of analysis: journal, paper, cluster, subdiscipline, field, map node, map version, or update interval.
- Typical representation: update protocol, journal-to-cluster assignment rule, versioned classification table, or before/after map comparison.
- Method target: keep maps current without breaking longitudinal comparability.
- Empirical signature: new records are assigned to existing or revised map units, coverage increases, and map-quality criteria are re-evaluated.

## Uses in Science of Science

- Provides maintenance logic for [science maps](../representations/science_maps.md), [science map overlays](../representations/science_map_overlays.md), and [field classifications](../measures/field_classifications.md).
- Helps separate real field change from classification-version artifacts.
- Supports reproducible portfolio analysis, interdisciplinarity studies, and field-normalized indicators.
- Depends on tracking the [science-map source-title spine](../datasets/science_map_source_title_spine.md) and checking update denominators with [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md).
- Uses [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md) when the updated map must remain comparable with earlier overlays.

## Operationalization

- Record the original map version, source database coverage, journal or paper universe, clustering method, and assignment rules.
- Identify new journals or papers not covered by the prior map.
- Assign new records using citation flows, references, journal similarity, topic labels, or expert review, then document single-label and multi-label choices.
- Compare updated and original maps by coverage, cluster balance, classification stability, mapping accuracy, legibility, and overlay usability.
- Separate source-title growth from article-volume growth with [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md).
- Use [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md) when newly covered journals are likely to span multiple clusters.
- Use [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md) when an update prioritizes readable source-title lookup and overlay counts.
- Treat [science map accuracy validation](../validations/science_map_accuracy_validation.md) as part of the release process, not a separate afterthought.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) documents the original UCSD map and its update from a 5-year to a 10-year map/classification system.
- The update added thousands of journals, simplified most journal assignment to one subdiscipline, and evaluated whether the updated map improved coverage, mapping accuracy, understandability, and overlay usability.
- The paper explicitly frames updateability as a desirable feature of science maps because scientific structure and database coverage continuously evolve.
- It also shows a practical tradeoff: single-category assignment can make overlays easier to read, but highly interdisciplinary journals may require special handling.
- The same full text supports [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md) and [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md) as lower-level update diagnostics.

## Caveats

- Updating a map can introduce discontinuities that look like field growth, decline, or interdisciplinarity change.
- Single-label assignments simplify visualization but can misrepresent multidisciplinary venues.
- Classification updates need versioned release notes; otherwise downstream analyses become hard to reproduce.

## Links

- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [science-location lookup tables](science_location_lookup_tables.md)
- [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md)
- [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md)
- [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md)
- [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md)
- [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md)
- [journal similarity mapping](journal_similarity_mapping.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md)
- [weighted science-map matrix fusion](weighted_science_map_matrix_fusion.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [topic prevalence dynamics](topic_prevalence_dynamics.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `science_map_update_workflows`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Aliases: map update protocol; classification versioning; science-map maintenance; journal assignment update
