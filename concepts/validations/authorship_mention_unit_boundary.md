# Authorship mention-unit boundary

## Summary

The authorship mention-unit boundary is the limitation that a bibliometric demographic analysis counts author-paper appearances rather than disambiguated individual scientists.

## Canonical Form

- Unit of analysis: authorship mention, author-paper row, author-position slot, country-authorship contribution, or fractional authorship.
- Typical representation: publication-author table without person-level longitudinal disambiguation.
- Validation target: whether output and impact claims refer to authored positions rather than unique people or careers.
- Empirical signature: the study can count gendered authorships and author positions without reconstructing individual researcher histories.

## Uses in Science of Science

- Refines [authorship-output indicator boundary](authorship_output_indicator_boundary.md) by naming the row-level counting unit.
- Clarifies the difference between authorship-level demographic shares and person-level measures from [author name disambiguation](../methods/author_name_disambiguation.md).
- Connects the [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md) to data structures such as [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md).
- Helps prevent overinterpretation of publication counts as counts of individual scientists.

## Operationalization

- Define the author-paper row as the counted unit before aggregation.
- Count first, last, middle, or fractional author positions at the authorship level.
- Avoid claims about individual career productivity unless author disambiguation is performed.
- Report whether repeated authors are counted repeatedly across papers.
- Keep person-level mobility, promotion, and retention questions separate from authorship-level output.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) analyzes 27,329,915 authorships in Web of Science, not a disambiguated population of unique individuals.
- The paper notes that author disambiguation is not required for its main global gendered authorship measures because the authorship record is the analytic unit.
- This boundary is central when translating their output and citation results into claims about scientists rather than author positions.

## Caveats

- Highly productive individuals contribute many authorship mentions and can affect aggregate shares.
- Authorship-level results cannot directly estimate individual career trajectories, retention, or mobility.
- Name ambiguity and repeated authors are handled differently in authorship-level and person-level designs.
- Fractional counting can reduce but not eliminate the distinction between authorships and people.

## Links

- [authorship-output indicator boundary](authorship_output_indicator_boundary.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `authorship_mention_unit_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: author-paper unit boundary; authorship mention counting; author-position unit caveat; non-disambiguated authorship unit
