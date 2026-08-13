# Cited subject-category match-yield audit

## Summary

Cited subject-category match-yield audit reports how many cited references can be linked to subject categories, how many are confirmed outside the category system, and how many remain unresolved.

## Canonical Form

- Unit of analysis: cited reference, journal, subject category, thesaurus entry, article, or field-year sample.
- Typical representation: matched-reference count, outside-system count, unresolved share, or match-yield table.
- Validation target: make the denominator of reference-to-field analyses visible before interpreting disciplinary breadth.
- Empirical signature: a large but incomplete share of cited references resolves to subject categories through a journal-category thesaurus.

## Uses in Science of Science

- Validates [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md).
- Connects [full cited-reference indexing](../datasets/full_cited_reference_indexing.md) to field-profile construction.
- Provides a coverage layer for [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Supports interpretable [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md).

## Operationalization

- Count all cited references in the focal corpus.
- Link cited journal strings to subject categories using a documented thesaurus.
- Track references matched to categories, references checked as outside the category system, and unresolved references.
- Report match yield by field, year, journal source, and citation frequency when possible.
- Improve the thesaurus iteratively while preserving version and denominator notes.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) reports 1,020,528 cited references in their sample.
- Their journal-subject-category thesaurus linked 768,440 cited references to a subject category, while another 28,000 were checked and assigned as not being in a subject category.
- The authors state that, by cited-reference frequency, they properly addressed almost 80 percent of cited references and describe iterative improvement of the journal-subject-category thesaurus.

## Caveats

- High-frequency reference matching can leave long-tail references unresolved.
- Journal-title abbreviation variation can affect match yield.
- Subject-category matching inherits category-system limits and does not prove cognitive integration by itself.

## Links

- [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md)
- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [reference-list length growth confound](reference_list_length_growth_confound.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; SciSciNet: W2087238585; WoS: unknown]

## Metadata

- Concept ID: `cited_subject_category_match_yield_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: subject-category match yield; cited-reference field matching audit; journal-category denominator audit; SC match-yield check
