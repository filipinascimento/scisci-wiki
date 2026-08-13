# Science-technology majority connectivity

## Summary

Science-technology majority connectivity is the empirical pattern that most cited scientific papers can be linked forward to later patents and most patents can be linked backward to prior scientific papers in an integrated citation network.

## Canonical Form

- Unit of analysis: patent, paper, connected component, patent-paper path, field, technology class, or citation network.
- Typical representation: connected-share table, connected-component size, forward paper-to-patent reachability, or backward patent-to-paper reachability.
- Mechanism or conclusion: science and technology are not independent citation spheres; broad traceable pathways connect the two domains.
- Empirical signature: a majority of cited papers and a majority of patents have finite paths to the patent-paper boundary.

## Uses in Science of Science

- Gives a system-level connectivity result for [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Complements [patent-paper links](../datasets/patent_paper_links.md), which can focus on direct patent-to-paper references.
- Provides the denominator for [science-technology distance](../measures/science_technology_distance.md), because distance is only defined for connected nodes.
- Helps evaluate claims that scientific and technological progress operate in disconnected spheres.

## Operationalization

- Build a directed network from paper-to-paper, patent-to-patent, and patent-to-paper citation edges.
- Identify direct patent-paper boundary edges from patents to scientific publications.
- Trace papers forward through later paper citations to patents and patents backward through patent citations to scientific papers.
- Report connected shares separately for papers and patents, with clear treatment of uncited papers and disconnected nodes.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) builds an integrated citation network from 4.8 million U.S. patents from 1976-2015 and 32 million Web of Science articles from 1945-2013.
- The paper reports that 60.5% of patents made references that could ultimately be traced to scientific papers.
- Among cited science and engineering papers, 79.7% could ultimately be connected to a future patent.
- Ahmadpoor and Jones interpret this majority connectivity as evidence against a strong independent-spheres view of science and technology.

## Caveats

- Connectivity is not causality; a citation path is evidence of traceability, not proof of knowledge transfer or commercial value.
- Uncited papers, missing patent references, database coverage, and patent citation practices shape the connected denominator.
- Forward and backward reachability depend on edge direction and the years included in the paper and patent corpora.

## Links

- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `science_technology_majority_connectivity`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: majority patent-paper connectivity; cross-domain citation connectivity; science-technology connectedness; patent-paper reachability
