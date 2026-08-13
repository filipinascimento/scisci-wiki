# Multidisciplinary journal relative-importance profile

## Summary

Multidisciplinary journal relative-importance profile measures how strongly a broad journal connects to multiple subdisciplines before deciding whether it should remain multiply assigned.

## Canonical Form

- Unit of analysis: multidisciplinary journal, subdiscipline, citation count, reference count, normalized importance score, or assignment decision.
- Typical representation: profile of absolute and normalized citations and references across candidate subdisciplines.
- Measurement target: diagnose whether a journal's breadth justifies multiple map assignments.
- Empirical signature: high normalized importance across several subdisciplines indicates broad or multidisciplinary scope.

## Uses in Science of Science

- Refines [multipoint journal fractional assignment](../methods/multipoint_journal_fractional_assignment.md).
- Helps decide when [single-subdiscipline journal assignment](../methods/single_subdiscipline_journal_assignment.md) is appropriate.
- Adds a diagnostic to [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md).

## Operationalization

- Count citations received from and references made to each subdiscipline.
- Normalize counts by the number of papers in those subdisciplines.
- Remove journal self-citations where needed.
- Compare profile concentration or breadth against cutoff points.
- Decide whether to single-assign or retain multiple assignments.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) examines multidisciplinary journals using sums of citations and references normalized by subdiscipline paper counts.
- The paper re-examines 40 journals assigned to more than one subdiscipline in the original UCSD map.
- It uses absolute and normalized citation/reference profiles, with journal self-citations removed, to decide whether a journal can be singly assigned.

## Caveats

- Normalized profiles can be unstable for journals with few papers.
- Broad journals such as Nature, Science, and PNAS may remain difficult to single-assign.
- Journal-level profiles can misclassify individual articles in multidisciplinary venues.

## Links

- [multipoint journal fractional assignment](../methods/multipoint_journal_fractional_assignment.md)
- [single-subdiscipline journal assignment](../methods/single_subdiscipline_journal_assignment.md)
- [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md)
- [source-title assignment support threshold](../methods/source_title_assignment_support_threshold.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; SciSciNet: W2036137014; WoS: unknown]

## Metadata

- Concept ID: `multidisciplinary_journal_relative_importance_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: multidisciplinary journal importance profile; broad-journal subdiscipline profile; normalized citation-reference profile; multipoint journal assignment diagnostic
