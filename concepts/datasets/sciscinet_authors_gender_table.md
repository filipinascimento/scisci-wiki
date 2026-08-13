# SciSciNet authors-gender table

## Summary

SciSciNet authors-gender table is a probabilistic author-demographic layer that attaches name-derived gender probabilities and metadata to disambiguated author identifiers.

## Canonical Form

- Unit of analysis: author ID, given name, gender-probability record, data source, or missingness flag.
- Typical representation: author-demographic table with probability fields, source counts, inferred labels, and uncertainty metadata.
- Data target: support demographic science-of-science analyses while keeping inference uncertainty and coverage limits visible.
- Empirical signature: author records receive probabilistic rather than perfectly observed demographic annotations.

## Uses in Science of Science

- Dataset layer for [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Connects author demographics to [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md).
- Supports analyses of [gender and race stratification](../mechanisms/gender_race_stratification.md) and [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) when used carefully.
- Should be treated as a historical SciSciNet layer rather than a current, complete demographic source.

## Operationalization

- Link disambiguated author IDs to name-gender probability sources.
- Preserve probability values, source counts, missingness, and uncertain classifications.
- Avoid collapsing uncertain records into hard binary labels unless required and justified.
- Audit coverage by geography, time, language, and field.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes an author-gender table in SciSciNet and reports construction and coverage details.
- The paper also notes limitations of name-derived demographic inference.
- This motif is distinct from demographic-inference methods because it is a reusable table layer in a scholarly data lake.
- It should be used with current ethical caveats and should not be treated as self-reported gender.

## Caveats

- Name-based gender inference is culturally uneven, binary in many tools, and incomplete.
- Author disambiguation errors can propagate into demographic analyses.
- Recent analyses should verify whether a fresher OpenAlex, Dimensions, ORCID, or survey source is more appropriate.

## Links

- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [SciSciNet-v2](sciscinet_v2.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; SciSciNet: W4378980478; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_authors_gender_table`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: SciSciNet author gender table; probabilistic author-demographic table; author gender probability layer; SciSciNet demographic author layer
