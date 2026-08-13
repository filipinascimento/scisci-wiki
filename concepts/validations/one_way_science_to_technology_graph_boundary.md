# One-way science-to-technology graph boundary

## Summary

One-way science-to-technology graph boundary is the scope caveat that a directed patent-to-paper citation graph measures paths from patented inventions back to prior science, not reverse flows from technology into science or non-patent applications.

## Canonical Form

- Unit of analysis: directed citation edge, patent, paper, boundary node, reverse linkage, or out-of-scope application.
- Typical representation: limitation statement attached to a science-technology distance design.
- Validation target: prevent overclaiming about all science-technology interactions from one directed graph.
- Empirical signature: the measured graph follows patent references backward to scientific papers and leaves reverse technology-to-science pathways unmeasured.

## Uses in Science of Science

- Defines the interpretation boundary for [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Adds a scope caveat to [science-technology distance](../measures/science_technology_distance.md).
- Connects to [citation face-value validity boundary](citation_face_value_validity_boundary.md) because citation edges capture only one kind of trace.

## Operationalization

- State the direction in which citation paths are traced.
- List relevant technology-to-science or non-patent application pathways outside the graph.
- Avoid using one-way distance to claim full causal coverage of science-technology interplay.
- Consider alternative link definitions, such as full-text necessary-knowledge links, if reverse pathways are central.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) notes that the study does not address nonlinear reverse linkages where technological advances may drive scientific progress.
- The paper also states that its distance metric uses a directed graph from patented invention to scientific advance.
- It proposes future link definitions, including full-text analyses and paths from science back to prior patented technologies.

## Caveats

- A one-way graph can still answer valuable questions about prior science in patents.
- Reverse-linkage absence from the design should not be interpreted as reverse-linkage absence in reality.
- Alternative link definitions may produce different boundary distances and typologies.

## Links

- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [citation face-value validity boundary](citation_face_value_validity_boundary.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [patent citation source roles](patent_citation_source_roles.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `one_way_science_to_technology_graph_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: one-way dual-frontier scope caveat; directed patent-to-paper boundary; reverse-linkage omission caveat; science-to-technology graph scope boundary
