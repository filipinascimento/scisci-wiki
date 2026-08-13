# Nonauthor identifier-profile contamination filter

## Summary

Nonauthor identifier-profile contamination filter is the validation motif that benchmark profiles must exclude identifier records that do not correspond to individual authors.

## Canonical Form

- Unit of analysis: identifier profile, person record, author mention, author-position evidence, or benchmark inclusion rule.
- Typical representation: person-role flag, author-marked publication, maintained profile, recent-activity filter, or organization-like profile exclusion.
- Validation target: prevent nonperson or nonauthor records from contaminating author-disambiguation labels.
- Empirical signature: a persistent identifier source contains records that require person and author-role filtering before benchmark use.

## Uses in Science of Science

- Tightens [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md) by distinguishing person records from author evidence.
- Works with [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md) and [unique identifier inclusion gate](unique_identifier_inclusion_gate.md).
- Supports validation of author-level datasets before career, mobility, mentoring, and collaboration studies.

## Operationalization

- Require identifier records to be marked as persons and linked to publications where the entity is an author.
- Remove organization-like profiles, group accounts, and profiles without author-position evidence.
- Report the number of excluded records and the effect of filters on field, year, and country coverage.
- Recheck whether activity filters remove valid inactive or retired researchers.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) restricts the ResearcherID benchmark to person-marked author records and recent ResearcherID-linked Web of Science publications.
- The paper uses those filters to build an evaluation set for unsupervised author-disambiguation comparisons.
- This motif isolates contamination filtering from broader identifier-coverage caveats.

## Caveats

- Strict filtering can drop valid authors with inactive, incomplete, or poorly maintained profiles.
- Organization and consortium authors require separate handling rather than silent deletion in some studies.
- The filter improves benchmark cleanliness but may reduce population representativeness.

## Links

- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md)
- [unique identifier inclusion gate](unique_identifier_inclusion_gate.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `nonauthor_identifier_contamination_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: nonperson author-ID filter; identifier profile contamination check; author-role benchmark filter
