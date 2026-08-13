# Single-journal publication-assignment audit

## Summary

A single-journal publication-assignment audit checks how publications from one journal distribute across algorithmic research areas to diagnose multidisciplinary journals, misclassifications, and topic-level specificity.

## Canonical Form

- Unit of analysis: journal, publication, research area, hierarchy level, misclassification case, or classification audit.
- Typical representation: journal-by-research-area distribution table plus close inspection of surprising assignments.
- Validation target: determine whether publication-level field assignments improve over journal-level field inheritance for a familiar journal.
- Empirical signature: most papers from a specialist journal fall in expected areas, while some papers are plausibly assigned to different topical areas and some sparse-link errors are detected.

## Uses in Science of Science

- Validates [publication-level field classification](../methods/publication_level_field_classification.md) against journal-level expectations.
- Makes the limits of [field classifications](../measures/field_classifications.md) visible when a journal spans multiple topics.
- Complements [sparse direct-citation exclusion](sparse_direct_citation_exclusion.md) by separating sensible cross-area assignments from citation-sparse errors.
- Supports [field-classification sensitivity](field_classification_sensitivity.md) and manual audits of algorithmic taxonomies.

## Operationalization

- Select a journal whose topical scope is known to domain experts.
- Tabulate its publications across classification levels and research areas.
- Inspect assignments outside expected areas, prioritizing highly cited or policy-relevant cases.
- Distinguish plausible topic-specific placement from misclassification caused by sparse links or noisy relatedness.
- Repeat for multidisciplinary journals and specialist journals to compare audit behavior.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) audits JASIST publications from 2001-2010.
- Of 1,499 JASIST articles, letters, and reviews, 62 were excluded from the classification system and 1,437 were assigned.
- Almost 97% of assigned JASIST publications fell into either social and health sciences or mathematics and computer science.
- The authors inspected 46 publications outside those two broad areas and found both clear misclassifications and sensible assignments.
- A network-analysis subset assigned to a physical-sciences area was judged sensible because the topic receives substantial attention in physics journals.

## Caveats

- Familiar-journal audits are informative but not statistically representative validation.
- Expert expectations can encode journal stereotypes and miss legitimate cross-field work.
- Highly multidisciplinary journals require different audit logic than specialist journals.
- Manual inspection scales poorly without sampled or stratified audit designs.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [field classifications](../measures/field_classifications.md)
- [sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)
- [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [multidisciplinary category exclusion robustness](multidisciplinary_category_exclusion_robustness.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `single_journal_publication_assignment_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: journal assignment audit; JASIST classification audit; journal-to-field distribution audit; publication-level journal audit
