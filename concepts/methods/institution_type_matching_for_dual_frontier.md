# Institution-type matching for the dual frontier

## Summary

Institution-type matching for the dual frontier classifies paper and patent outputs into universities, government laboratories, firms, or other institutional settings for science-technology boundary analysis.

## Canonical Form

- Unit of analysis: paper affiliation, patent assignee, institution string, organization type, or output node.
- Typical representation: rule-based or list-based organization classification attached to papers and patents.
- Method target: compare boundary distance and handoff patterns by institutional setting.
- Empirical signature: papers and patents can be grouped into institution-type categories before distance and impact analyses.

## Uses in Science of Science

- Provides the institutional data layer for [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md).
- Extends [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) into a patent-paper setting.
- Supports [institutional frontier-distance decomposition](institutional_frontier_distance_decomposition.md).

## Operationalization

- Parse author addresses for university and government-laboratory indicators.
- Parse patent assignee fields for equivalent institutional indicators.
- Match firms using assignee names and external firm identifiers where available.
- Label unmatched or ambiguous outputs conservatively.
- Use the resulting categories in distance, impact, and handoff analyses.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) sorts USPTO patents and Web of Science papers into universities, U.S. government laboratories, and firms.
- The supplementary methods describe address-string rules for universities, government-laboratory lists, and firm matching.
- These classifications support institution-level distance distributions and D=1 boundary handoff analyses.

## Caveats

- Address and assignee strings are noisy and can change over time.
- Some outputs involve multiple institution types.
- Rule-based institutional matching can miss hospitals, nonprofit labs, or subsidiaries unless explicitly handled.

## Links

- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [institutional frontier-distance decomposition](institutional_frontier_distance_decomposition.md)
- [science-technology distance](../measures/science_technology_distance.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `institution_type_matching_for_dual_frontier`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: dual-frontier institution matching; paper-patent institution typing; university firm government lab matching; institutional setting classification
