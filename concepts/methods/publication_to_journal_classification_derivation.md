# Publication-to-journal classification derivation

## Summary

Publication-to-journal classification derivation creates a journal-level classification by aggregating paper-level field assignments instead of assigning each journal directly to a single field.

## Canonical Form

- Unit of analysis: publication, journal, research area, subject category, paper-to-field assignment, or journal field profile.
- Typical representation: journal-by-area share table, derived journal label, fractional journal profile, or journal-level map layer.
- Method target: recover journal-level summaries from publication-level classifications without losing article-level detail.
- Empirical signature: multidisciplinary journals receive mixed profiles, while specialized journals concentrate in one or a few research areas.

## Uses in Science of Science

- Connects [publication-level field classification](publication_level_field_classification.md) to journal-facing evaluation and mapping outputs.
- Provides a paper-first alternative to [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md).
- Supports [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md) when journals span several fields.
- Helps audit [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md).

## Operationalization

- Assign individual publications to research areas using a publication-level classification.
- Aggregate paper assignments by journal, optionally by year or document type.
- Compute journal shares across research areas and select a dominant area only when concentration is high enough.
- Preserve fractional profiles for multidisciplinary journals.
- Report whether downstream analyses use dominant labels, fractional profiles, or both.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) notes that journal-level classifications can be derived from their publication-level system.
- The paper argues that this route is preferable to starting with journals when the goal is to handle multidisciplinary journals and fine-grained fields.
- Deriving journal profiles from paper assignments keeps article-level specificity while still enabling journal-level maps and summaries.
- The method therefore bridges paper-level clustering and legacy journal-level classification workflows.

## Caveats

- Aggregating paper labels to journals can reintroduce journal-level simplification if only the dominant area is retained.
- Journal profiles change over time, so derivations should specify publication years.
- Small journals or sparse publication windows can produce unstable profiles.
- The quality of derived journal labels depends on the underlying publication-level classification.

## Links

- [publication-level field classification](publication_level_field_classification.md)
- [single-subdiscipline journal assignment](single_subdiscipline_journal_assignment.md)
- [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md)
- [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md)
- [publication-cluster subject-category overlap profile](../representations/publication_cluster_subject_category_overlap_profile.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](../representations/science_maps.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `publication_to_journal_classification_derivation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: journal profile from paper clusters; paper-to-journal classification aggregation; derived journal classification; journal field profile derivation
