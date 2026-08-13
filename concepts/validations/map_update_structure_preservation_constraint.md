# Map-update structure preservation constraint

## Summary

Map-update structure preservation constraint is the validation requirement that a science-map update should expand coverage while preserving enough of the prior map structure to support longitudinal comparison.

## Canonical Form

- Unit of analysis: map version, discipline, subdiscipline, cluster coordinate, source-title assignment, or overlay comparison.
- Typical representation: fixed node hierarchy, retained cluster count, stable coordinates, preserved discipline ordering, or before/after overlay comparability check.
- Validation target: ensure that map updates do not create artificial field changes by moving or redefining the reference system too aggressively.
- Empirical signature: coverage increases while the main structure, number of broad units, and major map geometry remain comparable across versions.

## Uses in Science of Science

- Provides a continuity guardrail for [science map update workflows](../methods/science_map_update_workflows.md).
- Helps [science map overlays](../representations/science_map_overlays.md) compare portfolios across map versions without confusing map drift with scientific change.
- Complements [science-map coverage expansion audit](science_map_coverage_expansion_audit.md), which asks what coverage changed, by asking how much the reference structure changed.
- Supports longitudinal field-normalization and field-emergence studies that depend on stable [field classifications](../measures/field_classifications.md).

## Operationalization

- Record the prior map's discipline hierarchy, subdiscipline count, coordinates, and assignment rules.
- Define which structure should be preserved, such as broad disciplines, subdiscipline count, node coordinates, or visual ordering.
- Add new sources or records to existing units when the goal is longitudinal comparability.
- Report structural changes separately from coverage changes.
- When structure changes are necessary, publish crosswalks and versioned release notes before comparing overlays.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) lists updateability as a desirable science-map feature and states that updates should preserve the main map structure as much as possible.
- The paper states that the 2010 UCSD map update preserves the visual structure of the original 2005 map, making it possible to compare overlays generated with either version.
- In its desiderata evaluation, Borner et al. report that the update preserves the main structure, including the number of disciplines and subdisciplines.
- The authors also note that successive maps can be animated over time to communicate the evolving structure of science, while the fixed subdiscipline count might be altered in future updates.

## Caveats

- Preserving structure can hide genuine field emergence, splitting, merging, or decline.
- Holding the number of subdisciplines fixed can improve comparability while reducing sensitivity to new fields.
- Structural continuity is not enough; source coverage, assignment accuracy, and overlay usability also need validation.

## Links

- [science map update workflows](../methods/science_map_update_workflows.md)
- [science-map coverage expansion audit](science_map_coverage_expansion_audit.md)
- [science-map desiderata checklist](science_map_desiderata_checklist.md)
- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [field classifications](../measures/field_classifications.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `map_update_structure_preservation_constraint`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: map structure preservation; science-map continuity constraint; update comparability constraint; stable basemap update
