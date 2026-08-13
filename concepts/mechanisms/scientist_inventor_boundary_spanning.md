# Scientist-inventor boundary spanning

## Summary

Scientist-inventor boundary spanning occurs when the same person appears as an author of a scientific paper and as an inventor on a patent that cites that paper, directly bridging scientific and technological frontiers.

## Canonical Form

- Unit of analysis: patent-paper pair, cited paper author, citing patent inventor, name match, assignee type, institution type, or boundary-spanning person.
- Typical representation: inventor-author name match, share of direct boundary patents with same-name spans, assignee-stratified spanning share, or dual home-run indicator.
- Mechanism: people who produce both papers and patents can carry ideas across the paper-patent boundary directly rather than only through institutional handoff.
- Empirical signature: same-name inventor-author matches are common in university and government boundary patents and less common in corporate boundary patents.

## Uses in Science of Science

- Adds a person-level mechanism to [patent-paper boundary](../representations/patent_paper_boundary.md) and [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md).
- Connects [patent-paper links](../datasets/patent_paper_links.md), [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md), and [scientific mobility](scientific_mobility.md).
- Generalizes to [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md) when many cited papers and citing patents are represented as a cross-community graph.
- Helps separate institutional handoff from individual dual-role knowledge transfer.
- Contrasts with [university-firm patent-paper handoff](university_firm_patent_paper_handoff.md), where different institutions rather than the same person bridge the boundary.
- Suggests validation needs around author-inventor name matching and disambiguation.

## Operationalization

- Identify direct boundary patents that cite scientific papers.
- Match inventor names on the patent to author names on the cited paper.
- Stratify matches by assignee type, institution type, field, technology class, and impact outcome.
- Where possible, replace exact name matching with disambiguated author-inventor identities.
- Compare boundary-spanning pairs against matched patent-paper pairs without same-person spans.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) defines same-individual boundary cases by matching inventor names for a patent with author names for the paper that the patent cites.
- The paper reports that for direct boundary university patents, 55.4% cited a paper written by an individual with the same name.
- Ahmadpoor and Jones find a high percentage for government patents as well, while the share falls to 14.3% for direct boundary corporate patents.
- The same study reports that both the paper and patent produced by such an individual were especially likely to be "home runs" in their respective domains.
- In the discussion, the authors interpret these patterns as consistent with people personally spanning the science-technology boundary and advancing both scientific and technological frontiers.

## Caveats

- Same-name matching can create false positives for common names and false negatives for name variants, initials, transliteration, or name changes.
- Person-level spanning is not the only mechanism; institutional handoffs from university papers to firm patents are also common.
- Direct citation by a patent does not prove the inventor read or used the cited paper, even when names match.
- Robust identity matching may require author disambiguation, inventor disambiguation, affiliations, and coauthor/co-inventor context.

## Links

- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [university-firm patent-paper handoff](university_firm_patent_paper_handoff.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [homonym synonym author errors](../validations/homonym_synonym_author_errors.md)
- [scientific mobility](scientific_mobility.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `scientist_inventor_boundary_spanning`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: author-inventor boundary spanning; scientist-inventor dual role; same-name paper-patent spanning; Pasteur boundary spanning
