# Journal subject-category thesaurus matching

## Summary

Journal subject-category thesaurus matching is the workflow of normalizing cited-reference journal strings and mapping them to field categories so reference lists can be converted into disciplinary profiles.

## Canonical Form

- Unit of analysis: cited reference, journal title string, journal abbreviation, subject category, or thesaurus entry.
- Typical representation: journal-name normalization table, journal-to-category lookup, match-rate audit, and unmatched-reference log.
- Method target: transform raw cited references into cited field-category instances.
- Empirical signature: a high share of cited references can be assigned to one or more categories after iterative title normalization and lookup expansion.

## Uses in Science of Science

- Supplies the preprocessing layer for [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md).
- Enables construction of [WoS subject-category co-citation matrices](../representations/wos_subject_category_cocitation_matrix.md) from cited-reference strings.
- Makes [interdisciplinarity](../mechanisms/interdisciplinarity.md) indicators reproducible by documenting how journal titles become fields.
- Provides an audit target for [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md) and field-classification sensitivity.

## Operationalization

- Extract journal source strings from cited-reference records.
- Normalize abbreviation variants, punctuation, truncation, and alternate title forms with a find-and-replace thesaurus.
- Join normalized journal titles to a journal-to-subject-category lookup, allowing multi-category journals to produce multiple category instances when that is the chosen counting rule.
- Iterate on unmatched high-frequency references, then report match coverage, explicit non-WoS assignments, and residual unmatched cases.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) describes processing Web of Science cited-reference strings with VantagePoint and journal-title thesauri.
- The paper reports a base thesaurus from Thomson Scientific with full journal names, abbreviated journal names, and corresponding subject categories.
- Porter and Rafols note that about 39% of journals are associated with more than one subject category, making counting rules explicit.
- Their workflow links 768,440 of 1,020,528 cited references to subject categories and separately checks about 28,000 references as not belonging to a subject category, addressing almost 80% of cited-reference frequency.

## Caveats

- High-frequency matching can leave long-tail references undercovered.
- Multi-category journals can inflate category counts unless fractional or instance-level counting is specified.
- Journal-title abbreviation conventions can change across databases and years.
- The workflow assigns journal-level categories, not article-level topics.

## Links

- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [field classifications](../measures/field_classifications.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `journal_subject_category_thesaurus_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: journal-to-SC thesaurus; cited-reference journal matching; subject-category lookup matching; journal title normalization for SCs
