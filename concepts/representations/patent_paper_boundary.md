# Patent-paper boundary

## Summary

The patent-paper boundary is the set of direct links where a patent cites a scientific paper, marking the immediate interface between technological invention and scientific research.

## Canonical Form

- Unit of analysis: directly linked patent, paper, patent-paper citation, field, technology class, institution, or individual.
- Typical representation: boundary edges in a bipartite or integrated patent-paper citation graph.
- Mechanism or measurement target: immediate science-to-technology linkage and frontier-spanning output.
- Empirical signature: a patent directly references a scientific paper, so both nodes lie at distance 1 from the boundary in Ahmadpoor and Jones' metric.

## Uses in Science of Science

- Defines the anchor set for [science-technology distance](../measures/science_technology_distance.md).
- Identifies the direct data boundary created by [scientific non-patent references](../datasets/scientific_non_patent_references.md).
- Supports comparisons of direct versus indirect [patent-paper links](../datasets/patent_paper_links.md).
- Helps locate people, institutions, and fields that span scientific and technological frontiers.
- Provides the anchor for [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md).

## Operationalization

- Build direct patent-to-paper links from resolved non-patent references or curated patent-paper pairs.
- Assign boundary status to both patents and papers in each direct cross-domain citation.
- Use the boundary as a seed set for recursive graph-distance, temporal-lag, or impact analyses.
- Compare boundary nodes with connected non-boundary nodes and disconnected nodes.
- Audit source roles with [patent citation source roles](../validations/patent_citation_source_roles.md) when direct patent-paper references include applicant/examiner flags.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) defines the boundary as patents that directly cite journal articles and papers directly cited by patents.
- In their corpus, 0.759 million patents directly cited 1.41 million papers, representing 21% of connected patents and 10% of connected papers.
- Boundary nodes have unusually high within-domain impact: directly science-linked patents and directly patent-cited papers are more likely to be high-citation "home runs" than comparable outputs farther from the boundary.
- The boundary also exposes scientist-inventors and institutions that personally or organizationally bridge understanding and application.
- Direct boundary edges can be contrasted with [indirect patent-paper distance distributions](../measures/indirect_patent_paper_distance_distribution.md) and [university-firm patent-paper handoffs](../mechanisms/university_firm_patent_paper_handoff.md).

## Caveats

- Direct citation is an incomplete and noisy proxy for use.
- The boundary depends on patent reference extraction, citation-source roles, paper matching, and database coverage.
- Direct boundary status is not the same as causal proof that the cited paper enabled the invention.

## Links

- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)
- [citation networks](citation_networks.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `patent_paper_boundary`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: paper-patent boundary; direct science-technology boundary; D equals one frontier; dual frontier
