# Hierarchical assignment consistency constraint

## Summary

Hierarchical assignment consistency constraint requires that lower-level publication or research-area assignments nest cleanly inside higher-level areas in a field classification.

## Canonical Form

- Unit of analysis: publication, research area, hierarchy level, parent area, child area, or assignment table.
- Typical representation: parent-child lookup, nested area identifier, consistency check, or hierarchy validation rule.
- Validation target: ensure that fine-grained co-membership implies shared membership at every broader level.
- Empirical signature: each lower-level area has exactly one parent area and area identifiers encode that nesting.

## Uses in Science of Science

- Validates [publication-level field classification](../methods/publication_level_field_classification.md) outputs.
- Provides a structural check for [paper-field linkages](../representations/paper_field_linkages.md).
- Complements [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md) by checking the final assignment table.
- Supports reproducible crosswalks between broad fields, fields, and subfields.

## Operationalization

- Store parent area for every research area at each level.
- Check that each publication assigned to a low-level area is assigned to that area's parent at the next higher level.
- Use hierarchical identifiers or explicit parent-child tables to detect broken nesting.
- Validate all levels after reassignment, exclusions, or manual relabeling.
- Report violations as classification errors unless overlapping hierarchy is explicitly intended.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) states that each publication belongs to one research area at the lowest level, each lowest-level area belongs to one area at the next level, and so on.
- Their notation for areas x, x.y, and x.y.z encodes the requirement that level-3 areas are subareas of level-2 areas and level-2 areas are subareas of level-1 areas.
- This makes nesting a validation property of the classification table, not just a visual feature of the map.

## Caveats

- Strict nesting is useful for many indicators but underrepresents overlapping and interdisciplinary fields.
- Consistency checks verify hierarchy mechanics, not semantic quality.
- Some classification systems intentionally allow multiple parents and should not be judged by this constraint.

## Links

- [paper-field linkages](../representations/paper_field_linkages.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [publication-level field classification](../methods/publication_level_field_classification.md)
- [nonoverlapping field-assignment caveat](nonoverlapping_field_assignment_caveat.md)
- [field classifications](../measures/field_classifications.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; SciSciNet: W2126566678; WoS: unknown]

## Metadata

- Concept ID: `hierarchical_assignment_consistency_constraint`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: nested classification consistency; hierarchy assignment constraint; field hierarchy consistency check; parent-child area validation
