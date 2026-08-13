# Single-subdiscipline journal assignment

## Summary

Single-subdiscipline journal assignment maps each source title to one dominant science-map subdiscipline to make classification tables and overlays easier to read.

## Canonical Form

- Unit of analysis: journal, source title, subdiscipline, citation-flow profile, or map update.
- Typical representation: one journal-to-subdiscipline label, dominant citation-flow assignment, or single-label lookup row.
- Method target: simplify map overlays and counts by avoiding fractional or multi-label source-title assignments.
- Empirical signature: most journals have exactly one science-map subdiscipline even when they contain papers from several fields.

## Uses in Science of Science

- Provides a simple classification layer for [science-location lookup tables](science_location_lookup_tables.md), [science map overlays](../representations/science_map_overlays.md), and [field classifications](../measures/field_classifications.md).
- Acts as the single-label counterpart to [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md).
- Clarifies why [multidisciplinary field-mix caveat](../validations/multidisciplinary_field_mix_caveat.md) matters when journal-level labels are used for paper-level analysis.
- Helps map-update teams balance interpretability against faithful representation of multidisciplinary venues.

## Operationalization

- For each new or broad journal, compute citation and reference flows to existing map subdisciplines.
- Normalize flows by subdiscipline output to reduce size bias.
- Remove journal self-citations when using citation flows for reassignment.
- Assign the journal to the dominant subdiscipline when the evidence is sufficiently clear.
- Retain explicit exceptions for highly interdisciplinary journals that should remain multiply assigned or fractionally represented.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) reports that new WoS journals in the UCSD map update were assigned to exactly one subdiscipline to ease mapping and map reading.
- The paper describes using incoming and outgoing citation counts to original-map subdisciplines, normalized by subdiscipline publication volume, to choose the top subdiscipline.
- Borner et al. also re-examine 40 originally multiply assigned journals, remove journal self-citations, and singly assign 6 of them when the evidence supports it.
- That update logic is now split into [source-title assignment support threshold](source_title_assignment_support_threshold.md), [multidisciplinary journal relative-importance profile](../measures/multidisciplinary_journal_relative_importance_profile.md), and [general-purpose map assignment tradeoff](../validations/general_purpose_map_assignment_tradeoff.md).
- The full text keeps a small set of broad journals, including Science, Nature, the Lancet, BMJ, and JAMA, as multiply assigned exceptions.

## Caveats

- Single-label assignment can make a journal's papers appear more homogeneous than they are.
- The method is easier for overlays but weaker for article-level field normalization.
- Dominant citation flows can shift after editorial changes, title splits, or database coverage changes.

## Links

- [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md)
- [source-title assignment support threshold](source_title_assignment_support_threshold.md)
- [multidisciplinary journal relative-importance profile](../measures/multidisciplinary_journal_relative_importance_profile.md)
- [general-purpose map assignment tradeoff](../validations/general_purpose_map_assignment_tradeoff.md)
- [science-location lookup tables](science_location_lookup_tables.md)
- [science map update workflows](science_map_update_workflows.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [science map overlays](../representations/science_map_overlays.md)
- [field classifications](../measures/field_classifications.md)
- [multidisciplinary field-mix caveat](../validations/multidisciplinary_field_mix_caveat.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `single_subdiscipline_journal_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: single-label journal classification; dominant subdiscipline assignment; one-subdiscipline source-title mapping; single-category journal map
