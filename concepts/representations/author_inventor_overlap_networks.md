# Author-inventor overlap networks

## Summary

Author-inventor overlap networks connect scientific authors and patent inventors through patent citations to papers, making cross-community science-technology ties explicit.

## Canonical Form

- Unit of analysis: paper author, patent inventor, patent-paper citation, person name, organization, field, technology class, or bipartite edge.
- Typical representation: bipartite author-inventor graph, projected overlap network, same-person bridge, or paper-to-patent team overlap matrix.
- Mechanism or measurement target: how scientific and inventive communities intersect through cited scientific work.
- Empirical signature: inventors on a citing patent overlap with authors of the cited paper or connect to them through repeated patent-paper citation edges.

## Uses in Science of Science

- Extends [scientist-inventor boundary spanning](../mechanisms/scientist_inventor_boundary_spanning.md) from same-person direct boundary cases to a network representation.
- Uses [patent-paper links](../datasets/patent_paper_links.md) to study cross-community teams and knowledge-transfer pathways.
- Supports studies of university commercialization, startup formation, firm attention to science, and open innovation.
- Connects author disambiguation and inventor disambiguation to science-technology network analysis.

## Operationalization

- Start from confidence-scored patent-paper links.
- Attach authors to cited papers and inventors to citing patents.
- Match exact or disambiguated author and inventor identities when studying same-person spans.
- Build bipartite author-inventor edges when a patent by inventor `i` cites a paper by author `a`.
- Project or cluster the graph by institutions, firms, fields, technology classes, or time windows.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) identifies cross-community networks of invention as an enabled research direction for public PCS data.
- The paper notes that team studies often stay within paper coauthor networks or patent co-inventor networks, and asks whether those communities intersect.
- Marx and Fuegi state that patent citations to science allow researchers to check overlap between authors on a paper and inventors on a patent, thereby creating cross-community networks.
- Their commercialization example also uses overlap between paper authors and patent inventors to establish paper-patent pairs assigned to startup companies.

## Caveats

- Name overlap is not sufficient person disambiguation, especially across countries, initials, transliteration, and name changes.
- Patent-paper citation edges are not complete records of collaboration or knowledge transfer.
- Graph projections can overstate connectivity when large teams or highly cited papers create dense bipartite neighborhoods.

## Links

- [scientist-inventor boundary spanning](../mechanisms/scientist_inventor_boundary_spanning.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)
- [patent-paper boundary](patent_paper_boundary.md)
- [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [homonym synonym author errors](../validations/homonym_synonym_author_errors.md)
- [coauthorship networks](coauthorship_networks.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `author_inventor_overlap_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: author inventor overlap graph; cross-community invention network; paper-author patent-inventor network; author-inventor bridge network
