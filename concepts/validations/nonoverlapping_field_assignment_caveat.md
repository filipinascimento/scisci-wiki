# Nonoverlapping field-assignment caveat

## Summary

Nonoverlapping field-assignment caveat is the limitation that a publication-level classification assigning each paper to one research area can underrepresent interdisciplinary or multi-topic papers.

## Canonical Form

- Unit of analysis: publication, research area, field assignment, interdisciplinary paper, hierarchy level, or overlap rule.
- Typical representation: single-area assignment flag, multi-area candidate set, overlap-allowed extension, or boundary-paper audit.
- Validation target: check whether hard field labels distort papers that legitimately belong to multiple topics or disciplines.
- Empirical signature: papers near field boundaries, multidisciplinary journals, or multi-topic outputs are forced into one area even when several assignments are plausible.

## Uses in Science of Science

- Adds a validation caveat to [publication-level field classification](../methods/publication_level_field_classification.md) and [paper-field linkages](../representations/paper_field_linkages.md).
- Helps interpret interdisciplinarity measures and field-normalized indicators built from hard classifications.
- Complements [single-journal publication-assignment audit](single_journal_publication_assignment_audit.md), because journal-level heterogeneity does not remove paper-level overlap.
- Motivates overlapping, fractional, or probabilistic field assignments when multi-field membership matters.

## Operationalization

- Identify whether the classification allows one area, multiple areas, fractional membership, or probabilistic membership per paper.
- Audit boundary papers using citation neighbors, title/abstract terms, journal context, keywords, expert review, or external classifications.
- Compare hard single-area assignments with overlap-allowed alternatives for interdisciplinary outputs.
- Report the downstream sensitivity of normalized indicators, field counts, science maps, and portfolio measures to the non-overlap rule.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) states that their methodology assigns each publication to a single research area.
- The authors explicitly list allowing overlap of research areas as future work, because publications related to multiple fields or topics may need more than one assignment.
- Their JASIST audit shows that papers from one journal can be distributed across multiple areas, but each individual paper still receives a hard assignment.
- This caveat is distinct from sparse-link exclusion: a paper can be included and still be oversimplified by nonoverlapping field membership.

## Caveats

- Overlapping assignments can make field-normalized indicators and field totals harder to interpret.
- Fractional or probabilistic membership requires clear weighting rules.
- Some evaluation workflows intentionally prefer one primary field for simplicity, but they should document the tradeoff.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [single-journal publication-assignment audit](single_journal_publication_assignment_audit.md)
- [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `nonoverlapping_field_assignment_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: hard field-assignment caveat; single-area assignment limitation; overlapping research-area caveat; multi-topic field assignment loss
