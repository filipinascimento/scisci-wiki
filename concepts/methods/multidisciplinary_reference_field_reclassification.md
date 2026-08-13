# Multidisciplinary reference-field reclassification

## Summary

Multidisciplinary reference-field reclassification assigns multidisciplinary publications to substantive fields using the fields of their references.

## Canonical Form

- Unit of analysis: publication, reference list, Web of Science subject category, field control, or multidisciplinary journal.
- Typical representation: reassigned field label derived from cited-reference fields.
- Method target: reduce ambiguous field controls for papers published in multidisciplinary outlets.
- Empirical signature: papers in multidisciplinary journals receive field labels based on their reference composition rather than journal label alone.

## Uses in Science of Science

- Refines [paper-field linkages](../representations/paper_field_linkages.md) for multidisciplinary publications.
- Complements [WoS subject-category fractionalization](../validations/wos_subject_category_fractionalization.md).
- Supports [field-normalized citation impact](../measures/field_normalized_citation_impact.md) and novelty models needing field controls.
- Adds a field-assignment caveat to [Web of Science](../datasets/web_of_science.md) based survey frames.

## Operationalization

- Identify papers assigned to multidisciplinary or broad field categories.
- Inspect cited references and their field assignments.
- Reassign the focal paper to the dominant or most relevant reference-field category.
- Merge or collapse categories when the analytic design requires coarser controls.
- Report the rule and sensitivity to alternative field mappings.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) describes limiting the sample to Japanese WoS publications and constructing field controls.
- The paper reassigns multidisciplinary papers using reference-field evidence and collapses Economics and Business into Social Sciences.
- This procedure creates 20 field controls for the funding-model analysis.
- The motif generalizes to any publication-origin survey where multidisciplinary journals would otherwise blur field comparisons.

## Caveats

- Reference fields reflect cited literature, not necessarily the paper's contribution field.
- Dominant-reference rules can misclassify genuinely interdisciplinary papers.
- Field reclassification affects novelty, normalization, and sampling weights.

## Links

- [paper-field linkages](../representations/paper_field_linkages.md)
- [WoS subject-category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Web of Science](../datasets/web_of_science.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [WoS Japanese journal coverage limit](../validations/wos_japanese_journal_coverage_limit.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `multidisciplinary_reference_field_reclassification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: reference-based field reassignment; multidisciplinary WoS field reassignment; cited-reference field reclassification; multidisciplinary journal field control
